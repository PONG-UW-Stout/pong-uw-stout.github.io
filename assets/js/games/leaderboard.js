// ===========================================================================
//  Local leaderboards.
//  The store behind the top-score table under every game. It lives in this
//  browser and travels nowhere: there is no server behind this site, so a
//  score here is a personal record and not a league table.
//
//  A game page loads this before its own script, mounts a board against the
//  markup from _includes/leaderboard.html, and hands a finished run over. The
//  board works out whether it placed, redraws itself, and that is the whole
//  contract.
//
//  Scores are filed under a game and then a variant, because no two games here
//  vary the same way: Breakout and the Dodger have modes, Frogger has a board
//  and a mode together, and a run on one of those is not comparable with a run
//  on another. A variant is an opaque string, so each game keys its own boards
//  however it needs to.
// ===========================================================================

(function () {
    'use strict';

    const STORE_KEY = 'pong:scores';
    const VERSION = 1;

    // Rows a board shows, and all it keeps. A sixth-best score is of no
    // interest to anyone, and the store shouldn't grow without a bound.
    const KEEP = 5;

    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    /* ------------------------------------------------------------------ */
    /*  1. The store                                                      */
    /* ------------------------------------------------------------------ */

    // Guarded on both sides, like every other store on this site: private
    // windows and blocked site data make localStorage throw, and a scoreboard
    // must never take the game down with it.
    //
    // A shape this code doesn't recognise reads as no scores rather than being
    // repaired, so bumping VERSION later can change the layout without the new
    // code picking through the old one's data as if it were its own.
    function read() {
        try {
            const raw = window.localStorage.getItem(STORE_KEY);
            const saved = raw ? JSON.parse(raw) : null;
            if (saved && typeof saved === 'object' && saved.v === VERSION &&
                saved.games && typeof saved.games === 'object') {
                return saved;
            }
        } catch (err) { /* no stored scores available */ }
        return { v: VERSION, games: {}, imported: false };
    }

    function write(store) {
        try {
            window.localStorage.setItem(STORE_KEY, JSON.stringify(store));
            return true;
        } catch (err) {
            return false;   // the run still stands for this session
        }
    }

    // Anything that isn't a row of the right shape is dropped rather than
    // shown: this is hand-editable data in a devtools panel, and a table is
    // not the place to find out someone put a string in it.
    function rowsIn(store, game, variant) {
        const games = store.games[game];
        const rows = games ? games[variant] : null;
        if (!Array.isArray(rows)) return [];
        return rows.filter(function (row) {
            return row && typeof row === 'object' && isFinite(Number(row.score));
        }).map(function (row) {
            return { score: Number(row.score), at: String(row.at || '') };
        }).sort(function (a, b) {
            return b.score - a.score;
        }).slice(0, KEEP);
    }

    function today() {
        const now = new Date();
        const month = String(now.getMonth() + 1);
        const day = String(now.getDate());
        return now.getFullYear() + '-' +
               (month.length < 2 ? '0' : '') + month + '-' +
               (day.length < 2 ? '0' : '') + day;
    }

    // Split rather than handed to Date, which reads a bare YYYY-MM-DD as UTC
    // and can show the day before to anyone west of Greenwich. The day and the
    // month come back apart because they are set in different faces: see the
    // date column in draw().
    function dateParts(stamp) {
        const parts = String(stamp).split('-');
        if (parts.length !== 3) return null;
        const month = MONTHS[Number(parts[1]) - 1];
        const day = Number(parts[2]);
        if (!month || !day) return null;
        return { day: String(day), month: month };
    }

    // Thousands separators by hand. toLocaleString would do it, but a score
    // written one way in the court and another in the table reads as a bug.
    function group(value) {
        const digits = String(Math.abs(value));
        let out = '';
        for (let i = 0; i < digits.length; i++) {
            if (i > 0 && (digits.length - i) % 3 === 0) out += ',';
            out += digits.charAt(i);
        }
        return (value < 0 ? '-' : '') + out;
    }

    /* ------------------------------------------------------------------ */
    /*  2. Reading and writing a board                                    */
    /* ------------------------------------------------------------------ */

    function top(game, variant) {
        return rowsIn(read(), game, variant);
    }

    function best(game, variant) {
        const rows = top(game, variant);
        return rows.length ? rows[0].score : 0;
    }

    // Read, merge and write every time rather than holding the store in
    // memory: two tabs of the same game would each otherwise write back a copy
    // that never saw the other's scores.
    //
    // Returns the place the run took, or 0 if it didn't make the table. Sorting
    // is stable and the new row goes in last, so matching your own record
    // leaves the older run ahead of it, so a tie doesn't demote the run that got
    // there first.
    function submit(game, variant, score) {
        const value = Math.floor(Number(score));
        if (!isFinite(value) || value <= 0) return 0;

        const store = read();
        const rows = rowsIn(store, game, variant);
        const entry = { score: value, at: today() };

        rows.push(entry);
        rows.sort(function (a, b) { return b.score - a.score; });
        const place = rows.indexOf(entry) + 1;

        if (!store.games[game]) store.games[game] = {};
        store.games[game][variant] = rows.slice(0, KEEP);
        write(store);

        return place <= KEEP ? place : 0;
    }

    function clear(game, variant) {
        const store = read();
        if (!store.games[game]) return;
        if (variant === undefined) delete store.games[game];
        else delete store.games[game][variant];
        write(store);
    }

    /* ------------------------------------------------------------------ */
    /*  3. Scores kept before this module existed                         */
    /* ------------------------------------------------------------------ */

    // Frogger and the Dodger each kept their own best under their own key
    // before there was one store, so those are folded in once and the old keys
    // left where they are. Without this, shipping the table would silently
    // retire everyone's records.
    //
    // Frogger's old key was the board alone, with no mode in it, which is the
    // bug that prompted the shared store, since a gentle Chill run set the
    // record a Classic player then had to beat. There is no way to tell now
    // which mode an old score came from, so it lands on Classic, the default.
    function importLegacy() {
        const store = read();
        if (store.imported) return;
        store.imported = true;

        try {
            const raw = window.localStorage.getItem('pong:lan-prix-dodger');
            const saved = raw ? JSON.parse(raw) : null;
            if (saved && typeof saved === 'object') {
                ['rookie', 'pro'].forEach(function (variant) {
                    const run = Math.floor(Number(saved[variant]));
                    if (isFinite(run) && run > 0) {
                        if (!store.games['lan-prix-dodger']) store.games['lan-prix-dodger'] = {};
                        store.games['lan-prix-dodger'][variant] = [{ score: run, at: '' }];
                    }
                });
            }
        } catch (err) { /* nothing worth keeping there */ }

        // Scanned rather than looked up, because the board slugs are open
        // ended: five come from _data/frogger_boards.yml and any number can
        // come from the builder. my-boards is the builder's own list of saved
        // boards living in the same namespace, not a score.
        try {
            const keys = [];
            for (let i = 0; i < window.localStorage.length; i++) {
                const key = window.localStorage.key(i);
                if (key && key.indexOf('pong:frogger:') === 0 &&
                    key !== 'pong:frogger:my-boards') keys.push(key);
            }
            keys.forEach(function (key) {
                const run = Math.floor(Number(window.localStorage.getItem(key)));
                if (!isFinite(run) || run <= 0) return;
                const slug = key.slice('pong:frogger:'.length);
                if (!store.games.frogger) store.games.frogger = {};
                store.games.frogger[slug + ':classic'] = [{ score: run, at: '' }];
            });
        } catch (err) { /* nothing worth keeping there */ }

        write(store);
    }

    /* ------------------------------------------------------------------ */
    /*  4. The table                                                      */
    /* ------------------------------------------------------------------ */

    // A game mounts one board and keeps the handle. Options:
    //   game     the key its scores are filed under
    //   el       the <section> from _includes/leaderboard.html
    //   variant  () => { key, label }, or null for "no board right now", which
    //            is how two-player Pong says it has nothing to rank
    //   format   (score) => text for the score column; defaults to grouped
    //            digits
    function mount(opts) {
        const el = opts.el;
        if (!el) return null;

        const listEl = el.querySelector('[data-leaderboard="list"]');
        const variantEl = el.querySelector('[data-leaderboard="variant"]');
        const clearEl = el.querySelector('[data-leaderboard="clear"]');
        if (!listEl) return null;

        const format = opts.format || group;

        function current() {
            return opts.variant ? opts.variant() : { key: 'all', label: '' };
        }

        // place is the row just set, so the run a player has this second is
        // picked out of the five. Everything goes in as text: nothing here is
        // worth an innerHTML.
        function draw(place) {
            const variant = current();
            if (!variant) {
                el.hidden = true;
                return;
            }
            el.hidden = false;
            if (variantEl) variantEl.textContent = variant.label || '';

            const rows = top(opts.game, variant.key);
            listEl.textContent = '';

            for (let i = 0; i < KEEP; i++) {
                const row = rows[i];
                const li = document.createElement('li');
                li.className = 'leaderboard_row';
                if (!row) li.classList.add('is-empty');
                if (place && place === i + 1) li.classList.add('is-new');

                const rank = document.createElement('span');
                rank.className = 'leaderboard_rank';
                rank.textContent = (i + 1) + '.';

                const score = document.createElement('span');
                score.className = 'leaderboard_score';
                score.textContent = row ? format(row.score) : '';

                // The rank and the score are digits all through, so those
                // cells take the display face from the stylesheet. A date is
                // half word and half number, so the day gets .number the way
                // any other figure in running text on this site does, and the
                // month is left in the body face.
                const when = document.createElement('span');
                when.className = 'leaderboard_date';
                const date = row ? dateParts(row.at) : null;
                if (date) {
                    const day = document.createElement('span');
                    day.className = 'number';
                    day.textContent = date.day;
                    when.appendChild(day);
                    when.appendChild(document.createTextNode(' ' + date.month));
                }

                li.appendChild(rank);
                li.appendChild(score);
                li.appendChild(when);
                listEl.appendChild(li);
            }
        }

        const board = {
            // The run to beat on the variant showing now. Games cache this
            // rather than calling it per frame: it parses the whole store.
            best: function () {
                const variant = current();
                return variant ? best(opts.game, variant.key) : 0;
            },
            submit: function (score) {
                const variant = current();
                if (!variant) return 0;
                const place = submit(opts.game, variant.key, score);
                draw(place);
                return place;
            },
            refresh: function () { draw(0); },
        };

        if (clearEl) {
            clearEl.addEventListener('click', function () {
                const variant = current();
                if (!variant) return;
                const what = variant.label ? ' for ' + variant.label : '';
                if (!window.confirm('Clear your top scores' + what + '?')) return;
                clear(opts.game, variant.key);
                draw(0);
                if (opts.onClear) opts.onClear();
            });
        }

        draw(0);
        return board;
    }

    importLegacy();

    window.PONG_SCORES = {
        mount: mount,
        top: top,
        best: best,
        submit: submit,
        clear: clear,
        keep: KEEP,
        format: group,
    };
})();
