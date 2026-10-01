// ===========================================================================
//  Guess the Exec.
//  Loaded by _games/guess-the-exec.html, so it only runs on
//  /games/guess-the-exec/.
//
//  The roster is not hardcoded here: the page renders one button per person out
//  of _data/execs.yml and friends, and this file reads them back off those
//  buttons. Add someone to the data and they are in the game.
// ===========================================================================

(function () {
    'use strict';

    const grid = document.getElementById('guess-grid');
    const img = document.getElementById('mugshot-img');
    if (!grid || !img) return;

    const promptEl = document.getElementById('prompt');
    const hintsEl  = document.getElementById('hints');
    const leftEl   = document.getElementById('guesses-left');
    const streakEl = document.getElementById('streak');
    const bestEl   = document.getElementById('best');
    const resultEl = document.getElementById('result');
    const nextBtn  = document.getElementById('next-round');

    const STORE_KEY = 'pong:guess-the-exec';

    // One entry per guess the player still has, blurriest first. The length of
    // this list is how many guesses a round allows.
    const REVEAL = [
        { blur: 18, scale: 1.35 },
        { blur: 13, scale: 1.30 },
        { blur: 9,  scale: 1.22 },
        { blur: 5,  scale: 1.15 },
        { blur: 2,  scale: 1.08 },
    ];

    const options = Array.prototype.slice.call(grid.querySelectorAll('.guess-option'));
    const roster = options.map(function (btn) {
        return {
            btn: btn,
            name: btn.dataset.name || '',
            role: btn.dataset.role || '',
            photo: btn.dataset.photo || '',
        };
    }).filter(function (person) { return person.name && person.photo; });

    if (!roster.length) return;

    /* ------------------------------------------------------------------ */
    /*  1. Picking today's face                                           */
    /* ------------------------------------------------------------------ */

    // Local-midnight day number, so the puzzle turns over at the player's own
    // midnight and not at UTC.
    function today() {
        const now = new Date();
        const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        return Math.round(midnight.getTime() / 86400000);
    }

    function mulberry32(seed) {
        let a = seed >>> 0;
        return function () {
            a = (a + 0x6D2B79F5) | 0;
            let t = Math.imul(a ^ (a >>> 15), 1 | a);
            t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }

    function shuffled(list, seed) {
        const out = list.slice();
        const rand = mulberry32(seed);
        for (let i = out.length - 1; i > 0; i--) {
            const j = Math.floor(rand() * (i + 1));
            const swap = out[i];
            out[i] = out[j];
            out[j] = swap;
        }
        return out;
    }

    // A fresh shuffle each time the roster has been worked through, then one
    // person a day out of it. Everybody comes up once per cycle, in a different
    // order on the next lap.
    function dailyPick(day) {
        const cycle = Math.floor(day / roster.length);
        const order = shuffled(roster, cycle + 1);
        return order[((day % roster.length) + roster.length) % roster.length];
    }

    function randomPick(avoid) {
        if (roster.length === 1) return roster[0];
        let pick = avoid;
        while (pick === avoid) {
            pick = roster[Math.floor(Math.random() * roster.length)];
        }
        return pick;
    }

    /* ------------------------------------------------------------------ */
    /*  2. Hints                                                          */
    /* ------------------------------------------------------------------ */

    // Handed out one per wrong guess, in this order. Each returns null when it
    // has nothing useful to say about this particular person, and gets skipped.
    const HINTS = [
        function (person) {
            return person.role ? 'Their role is ' + person.role + '.' : null;
        },
        function (person) {
            const first = person.name.split(/\s+/)[0] || '';
            return first ? 'Their name starts with ' + first.charAt(0).toUpperCase() + '.' : null;
        },
        function (person) {
            const parts = person.name.split(/\s+/);
            if (parts.length < 2) return null;
            const last = parts[parts.length - 1].replace(/\W/g, '');
            return last ? 'Their surname starts with ' + last.charAt(0).toUpperCase() + '.' : null;
        },
        function (person) {
            const half = roster.indexOf(person) < roster.length / 2 ? 'first' : 'second';
            return 'They are in the ' + half + ' half of the board.';
        },
    ];

    /* ------------------------------------------------------------------ */
    /*  3. Saved progress                                                 */
    /* ------------------------------------------------------------------ */

    // Every read and write is guarded: private windows and blocked site data
    // make localStorage throw, and the game still has to run.
    function load() {
        try {
            const raw = window.localStorage.getItem(STORE_KEY);
            const saved = raw ? JSON.parse(raw) : null;
            if (saved && typeof saved === 'object') return saved;
        } catch (err) { /* no stored progress available */ }
        return { streak: 0, best: 0, day: null, result: null, wrong: [] };
    }

    function save(data) {
        try {
            window.localStorage.setItem(STORE_KEY, JSON.stringify(data));
        } catch (err) { /* nothing to do: the round still plays out in memory */ }
    }

    let store = load();

    // A streak only stands if the last daily played was today or yesterday.
    function liveStreak() {
        const day = today();
        if (store.result !== 'win') return 0;
        if (store.day !== day && store.day !== day - 1) return 0;
        return store.streak || 0;
    }

    function renderStats() {
        if (streakEl) streakEl.textContent = liveStreak();
        if (bestEl) bestEl.textContent = store.best || 0;
    }

    /* ------------------------------------------------------------------ */
    /*  4. Round state                                                    */
    /* ------------------------------------------------------------------ */

    let mode = 'daily';
    let answer = null;
    let wrong = 0;
    let done = false;
    let hintPool = [];

    function setBlur(stage) {
        const step = REVEAL[Math.min(stage, REVEAL.length - 1)];
        if (stage >= REVEAL.length) {
            img.style.filter = 'blur(0px)';
            img.style.transform = 'scale(1)';
            return;
        }
        img.style.filter = 'blur(' + step.blur + 'px)';
        img.style.transform = 'scale(' + step.scale + ')';
    }

    function addHint() {
        while (hintPool.length) {
            const text = hintPool.shift()(answer);
            if (!text) continue;
            const li = document.createElement('li');
            li.textContent = text;
            if (hintsEl) hintsEl.appendChild(li);
            return;
        }
    }

    function showResult(text, kind) {
        if (!resultEl) return;
        resultEl.textContent = text;
        resultEl.classList.toggle('is-win', kind === 'win');
        resultEl.classList.toggle('is-lose', kind === 'lose');
        resultEl.hidden = !text;
    }

    // Names in _data end on an initial with a full stop ("Max C."), so a
    // sentence closing on a name must not add a second one.
    function sentence(text) {
        return /[.!?]$/.test(text) ? text : text + '.';
    }

    function renderLeft() {
        if (leftEl) leftEl.textContent = Math.max(REVEAL.length - wrong, 0);
    }

    // `replay` means the round is being restored from storage, not played, so
    // the saved streak is left as it is.
    function finish(won, replay) {
        done = true;
        setBlur(REVEAL.length);          // full reveal, whatever the outcome
        img.alt = 'Photo of ' + answer.name;
        answer.btn.classList.add('is-answer');
        if (promptEl) promptEl.textContent = answer.name + ', ' + answer.role;

        options.forEach(function (btn) {
            btn.disabled = true;
            if (!btn.classList.contains('is-answer') && !btn.classList.contains('is-wrong')) {
                btn.classList.add('is-spent');
            }
        });

        if (mode === 'daily' && !replay) {
            const day = today();
            const continued = store.day === day - 1 && store.result === 'win';
            const streak = won ? (continued ? (store.streak || 0) + 1 : 1) : 0;
            store = {
                day: day,
                result: won ? 'win' : 'lose',
                streak: streak,
                best: Math.max(store.best || 0, streak),
                wrong: options.filter(function (b) { return b.classList.contains('is-wrong'); })
                              .map(function (b) { return b.dataset.name; }),
            };
            save(store);
        }
        renderStats();

        if (won) {
            const used = wrong + 1;
            showResult(sentence('Got it in ' + used + (used === 1 ? ' guess' : ' guesses')) +
                       (mode === 'daily' ? ' Back tomorrow for another' : ''), 'win');
        } else {
            showResult(sentence('Out of guesses. It was ' + answer.name) +
                       (mode === 'daily' ? ' Back tomorrow for another' : ''), 'lose');
        }

        if (nextBtn) nextBtn.hidden = mode !== 'random';
    }

    function guess(person) {
        if (done || person.btn.disabled) return;

        if (person === answer) {
            finish(true);
            return;
        }

        person.btn.classList.add('is-wrong');
        person.btn.disabled = true;
        wrong++;
        renderLeft();
        setBlur(wrong);
        addHint();

        if (wrong >= REVEAL.length) finish(false);
    }

    function startRound(person) {
        answer = person;
        wrong = 0;
        done = false;
        hintPool = HINTS.slice();

        img.alt = '';
        img.src = answer.photo;
        setBlur(0);

        if (hintsEl) hintsEl.textContent = '';
        if (promptEl) promptEl.textContent = 'Who is this?';
        showResult('', null);
        renderLeft();
        renderStats();

        options.forEach(function (btn) {
            btn.disabled = false;
            btn.classList.remove('is-wrong', 'is-answer', 'is-spent');
        });

        if (nextBtn) nextBtn.hidden = true;
    }

    // Today's daily was already played, so show how it went instead of letting
    // it be played again. A shared daily is no use if everyone can retry it.
    function restoreDaily() {
        const played = store.wrong || [];
        played.forEach(function (name) {
            const person = roster.find(function (p) { return p.name === name; });
            if (person) {
                person.btn.classList.add('is-wrong');
                wrong++;
            }
        });
        renderLeft();
        finish(store.result === 'win', true);
    }

    /* ------------------------------------------------------------------ */
    /*  5. Wiring                                                         */
    /* ------------------------------------------------------------------ */

    roster.forEach(function (person) {
        person.btn.addEventListener('click', function () { guess(person); });
    });

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            if (mode !== 'random') return;
            startRound(randomPick(answer));
        });
    }

    // A missing photo leaves a round no one can solve, so say so and give the
    // answer instead of sitting on a blank square.
    img.addEventListener('error', function () {
        if (!answer || done) return;
        finish(false, true);   // not the player's loss, so leave the streak alone
        showResult(sentence('That photo is missing. It was ' + answer.name), 'lose');
    });

    function setMode(next) {
        mode = next === 'random' ? 'random' : 'daily';

        document.querySelectorAll('[data-mode]').forEach(function (btn) {
            const active = btn.dataset.mode === mode;
            btn.classList.toggle('is-active', active);
            btn.setAttribute('aria-pressed', active);
        });

        if (mode === 'daily') {
            startRound(dailyPick(today()));
            if (store.day === today() && store.result) restoreDaily();
        } else {
            startRound(randomPick(null));
        }
    }

    document.querySelectorAll('[data-mode]').forEach(function (btn) {
        btn.addEventListener('click', function () { setMode(btn.dataset.mode); });
    });

    window.GUESS_THE_EXEC = {
        roster: roster,
        dailyPick: dailyPick,
        today: today,
        setMode: setMode,
        state: function () {
            return { mode: mode, answer: answer && answer.name, wrong: wrong, done: done };
        },
    };

    setMode('daily');

})();
