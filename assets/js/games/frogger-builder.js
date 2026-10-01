// ===========================================================================
//  Frogger board builder.
//  Loaded by _games/frogger.html after the game, and talks to it only through
//  window.FROGGER, so the game runs perfectly well without this file.
//
//  Everything a board needs is on the page as form controls: pick a type per
//  row, set how fast and how often, press Play. Boards are kept in this
//  browser, and the share button turns one into a link.
// ===========================================================================

(function () {
    'use strict';

    const game = window.FROGGER;
    const panel = document.getElementById('builder');
    if (!game || !panel) return;

    const nameEl  = document.getElementById('builder-name');
    const colsEl  = document.getElementById('builder-cols');
    const baysEl  = document.getElementById('builder-bays');
    const quickEl = document.getElementById('builder-quick');
    const rowsEl  = document.getElementById('builder-rows');
    const savedEl = document.getElementById('builder-saved');
    const linkEl  = document.getElementById('builder-link');
    const noteEl  = document.getElementById('builder-note');

    const addBtn   = document.getElementById('builder-add');
    const playBtn  = document.getElementById('builder-play');
    const saveBtn  = document.getElementById('builder-save');
    const shareBtn = document.getElementById('builder-share');
    const copyBtn  = document.getElementById('builder-copy');

    if (!rowsEl) return;

    const STORE_KEY = 'pong:frogger:my-boards';

    const KIND_LABELS = [
        ['home',  'Bays'],
        ['bank',  'Bank'],
        ['road',  'Road'],
        ['river', 'River'],
    ];

    // What a freshly added lane starts as, so a new row is playable before it is
    // touched.
    const LANE_DEFAULTS = {
        road:  { dir: 1, speed: 2.2, len: 1, gap: 5 },
        river: { dir: 1, speed: 1.5, len: 3, gap: 3 },
    };

    const LETTERS = { h: 'home', b: 'bank', r: 'road', w: 'river' };

    /* ------------------------------------------------------------------ */
    /*  1. The board being edited                                         */
    /* ------------------------------------------------------------------ */

    let draft = copyBoard(game.board);

    function copyBoard(board) {
        return {
            name: 'My board',
            cols: board.cols,
            bays: board.bays,
            rows: board.rows.map(function (row) {
                if (row.kind !== 'road' && row.kind !== 'river') return { kind: row.kind };
                return {
                    kind: row.kind, dir: row.dir, speed: row.speed,
                    len: row.len, gap: row.gap,
                };
            }),
        };
    }

    function slugOf(name) {
        const slug = String(name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        return 'mine-' + (slug || 'board');
    }

    function asBoard() {
        return {
            name: nameEl && nameEl.value.trim() ? nameEl.value.trim() : 'My board',
            slug: slugOf(nameEl && nameEl.value ? nameEl.value : 'My board'),
            cols: draft.cols,
            bays: draft.bays,
            rows: draft.rows,
        };
    }

    // Notes are built out of parts rather than one string, because the body
    // font has no usable digits: a part handed over as a number is wrapped in a
    // .number span, the way a number is anywhere else on the site. Strings stay
    // text nodes, since a board name is whatever was typed into the field.
    function note() {
        if (!noteEl) return;
        noteEl.textContent = '';
        Array.prototype.forEach.call(arguments, function (part) {
            if (part === '' || part === null || part === undefined) return;
            if (typeof part === 'number') {
                const num = document.createElement('span');
                num.className = 'number';
                num.textContent = part;
                noteEl.appendChild(num);
                return;
            }
            noteEl.appendChild(document.createTextNode(part));
        });
    }

    /* ------------------------------------------------------------------ */
    /*  2. Drawing the form                                               */
    /* ------------------------------------------------------------------ */

    function laneRow(row) {
        return row.kind === 'road' || row.kind === 'river';
    }

    function makeSelect(options, value, label) {
        const el = document.createElement('select');
        el.setAttribute('aria-label', label);
        options.forEach(function (pair) {
            const opt = document.createElement('option');
            opt.value = pair[0];
            opt.textContent = pair[1];
            if (String(pair[0]) === String(value)) opt.selected = true;
            el.appendChild(opt);
        });
        return el;
    }

    function makeNumber(value, min, max, step, label, klass) {
        const el = document.createElement('input');
        el.type = 'number';
        el.className = klass;
        el.value = value;
        el.min = min;
        el.max = max;
        el.step = step;
        el.setAttribute('aria-label', label);
        return el;
    }

    function makeButton(text, label, klass) {
        const el = document.createElement('button');
        el.type = 'button';
        el.className = 'builder_icon ' + klass;
        el.textContent = text;
        el.setAttribute('aria-label', label);
        el.title = label;
        return el;
    }

    function drawRows() {
        rowsEl.textContent = '';

        draft.rows.forEach(function (row, index) {
            const first = index === 0;
            const last = index === draft.rows.length - 1;
            const line = document.createElement('div');
            line.className = 'builder_row';

            const num = document.createElement('span');
            num.className = 'builder_cell builder_cell--num';
            num.textContent = index + 1;
            line.appendChild(num);

            // The top row holds the bays and the bottom row is where the frog
            // starts, so those two are shown fixed rather than silently changed
            // out from under whatever was picked.
            const kind = makeSelect(KIND_LABELS, row.kind, 'Row ' + (index + 1) + ' type');
            kind.className = 'builder_cell builder_kind';
            kind.disabled = first || last;
            kind.addEventListener('change', function () {
                const next = kind.value;
                draft.rows[index] = laneRow({ kind: next })
                    ? Object.assign({ kind: next }, LANE_DEFAULTS[next])
                    : { kind: next };
                drawRows();
                syncQuick();
            });
            line.appendChild(kind);

            if (!laneRow(row)) {
                const rest = document.createElement('span');
                rest.className = 'builder_cell builder_cell--wide';
                rest.textContent = first ? 'the bays to fill'
                    : last ? 'where the frog starts' : 'safe ground';
                line.appendChild(rest);
            } else {
                const dir = makeSelect([['1', 'Right'], ['-1', 'Left']], row.dir,
                                       'Row ' + (index + 1) + ' direction');
                dir.className = 'builder_cell builder_dir';
                dir.addEventListener('change', function () {
                    row.dir = Number(dir.value);
                    syncQuick();
                });
                line.appendChild(dir);

                const speed = makeNumber(row.speed, 0.4, 6, 0.1,
                    'Row ' + (index + 1) + ' speed in cells per second', 'builder_cell builder_num');
                speed.addEventListener('input', function () { row.speed = Number(speed.value); });
                line.appendChild(speed);

                const len = makeNumber(row.len, 1, 8, 1,
                    'Row ' + (index + 1) + ' length in cells', 'builder_cell builder_num');
                len.addEventListener('input', function () { row.len = Number(len.value); });
                line.appendChild(len);

                const gap = makeNumber(row.gap, 1, 12, 1,
                    'Row ' + (index + 1) + ' gap in cells', 'builder_cell builder_num');
                gap.addEventListener('input', function () { row.gap = Number(gap.value); });
                line.appendChild(gap);
            }

            const tools = document.createElement('span');
            tools.className = 'builder_cell builder_tools';

            const up = makeButton('↑', 'Move row ' + (index + 1) + ' up', 'builder_up');
            up.disabled = index <= 1;
            up.addEventListener('click', function () { swap(index, index - 1); });
            tools.appendChild(up);

            const down = makeButton('↓', 'Move row ' + (index + 1) + ' down', 'builder_down');
            down.disabled = index === 0 || index >= draft.rows.length - 2;
            down.addEventListener('click', function () { swap(index, index + 1); });
            tools.appendChild(down);

            const cut = makeButton('×', 'Remove row ' + (index + 1), 'builder_cut');
            cut.disabled = first || last || draft.rows.length <= 3;
            cut.addEventListener('click', function () {
                draft.rows.splice(index, 1);
                drawRows();
                syncQuick();
            });
            tools.appendChild(cut);

            line.appendChild(tools);
            rowsEl.appendChild(line);
        });
    }

    function swap(a, b) {
        if (a < 1 || b < 1 || a > draft.rows.length - 2 || b > draft.rows.length - 2) return;
        const held = draft.rows[a];
        draft.rows[a] = draft.rows[b];
        draft.rows[b] = held;
        drawRows();
        syncQuick();
    }

    /* ------------------------------------------------------------------ */
    /*  3. The quick layout box                                           */
    /* ------------------------------------------------------------------ */

    // Typing letters is faster than filling in a dozen dropdowns, so the box and
    // the rows below it are two views of the same board.
    function syncQuick() {
        if (!quickEl) return;
        quickEl.value = draft.rows.map(function (row) {
            return { home: 'H', bank: 'B', road: 'R', river: 'W' }[row.kind];
        }).join('');
    }

    function rowsFromQuick() {
        if (!quickEl) return;
        const chars = quickEl.value.toLowerCase().replace(/[^hbrw]/g, '').split('');
        if (chars.length < 3) {
            note('A board needs at least three rows.');
            return;
        }

        // Keep the numbers already set on any row whose type has not changed, so
        // retyping the layout does not throw away tuning.
        const old = draft.rows;
        draft.rows = chars.map(function (ch, i) {
            const kind = LETTERS[ch];
            if (kind !== 'road' && kind !== 'river') return { kind: kind };
            const was = old[i];
            if (was && was.kind === kind) return was;
            return Object.assign({ kind: kind }, LANE_DEFAULTS[kind]);
        });
        note('');
        drawRows();
    }

    /* ------------------------------------------------------------------ */
    /*  4. Playing, saving, sharing                                       */
    /* ------------------------------------------------------------------ */

    function play() {
        const raw = asBoard();
        const checked = game.sanitise(raw);
        if (!checked) {
            note('That board could not be read. Try adding a row.');
            return;
        }
        game.setBoard(raw);
        note('Playing ' + checked.name + '. ', checked.cols, ' wide, ',
             checked.rows.length, ' rows.');
        // Straight to the board, since that is the point of pressing Play.
        const court = document.querySelector('.court--pond');
        if (court && court.scrollIntoView) court.scrollIntoView({ block: 'center' });
    }

    function loadSaved() {
        try {
            const raw = window.localStorage.getItem(STORE_KEY);
            const list = raw ? JSON.parse(raw) : [];
            return Array.isArray(list) ? list : [];
        } catch (err) {
            return [];
        }
    }

    function writeSaved(list) {
        try {
            window.localStorage.setItem(STORE_KEY, JSON.stringify(list));
            return true;
        } catch (err) {
            return false;
        }
    }

    function drawSaved() {
        if (!savedEl) return;
        const list = loadSaved();
        savedEl.textContent = '';

        if (!list.length) {
            const empty = document.createElement('span');
            empty.className = 'builder_empty';
            empty.textContent = 'Nothing saved yet.';
            savedEl.appendChild(empty);
            return;
        }

        list.forEach(function (raw, index) {
            const wrap = document.createElement('span');
            wrap.className = 'builder_saved_item';

            const open = document.createElement('button');
            open.type = 'button';
            open.className = 'mode-button';
            open.textContent = raw.name || 'Board';
            open.addEventListener('click', function () {
                draft = copyBoard(game.sanitise(raw) || game.board);
                if (nameEl) nameEl.value = raw.name || 'My board';
                if (colsEl) colsEl.value = draft.cols;
                if (baysEl) baysEl.value = draft.bays;
                drawRows();
                syncQuick();
                game.setBoard(raw);
                note('Playing ' + (raw.name || 'board') + ', and loaded it for editing.');
            });
            wrap.appendChild(open);

            const cut = makeButton('×', 'Delete ' + (raw.name || 'board'), 'builder_cut');
            cut.addEventListener('click', function () {
                const next = loadSaved();
                next.splice(index, 1);
                writeSaved(next);
                drawSaved();
                note('Deleted ' + (raw.name || 'board') + '.');
            });
            wrap.appendChild(cut);

            savedEl.appendChild(wrap);
        });
    }

    function save() {
        const raw = asBoard();
        if (!game.sanitise(raw)) {
            note('That board could not be read, so it was not saved.');
            return;
        }

        const list = loadSaved();
        const at = list.map(function (b) { return slugOf(b.name); }).indexOf(slugOf(raw.name));
        if (at === -1) list.push(raw);
        else list[at] = raw;

        if (writeSaved(list)) {
            drawSaved();
            note('Saved ' + raw.name + ' to this browser.');
        } else {
            note('This browser will not let the page store anything, so the board ' +
                 'could not be saved. The share link still works.');
        }
    }

    function share() {
        const raw = asBoard();
        const checked = game.sanitise(raw);
        if (!checked) {
            note('That board could not be read, so there is no link for it.');
            return;
        }

        const base = window.location.origin + window.location.pathname;
        const url = base + '?board=' + encodeURIComponent(game.boardCode(checked));

        if (linkEl) {
            linkEl.value = url;
            linkEl.hidden = false;
        }
        if (copyBtn) copyBtn.hidden = false;
        note('Anyone who opens this link gets your board, lane speeds and all.');
    }

    function copy() {
        if (!linkEl || !linkEl.value) return;
        linkEl.select();
        // Clipboard access is refused in plenty of places, and the link is
        // selected either way, so nothing here is load bearing.
        if (window.navigator && window.navigator.clipboard) {
            window.navigator.clipboard.writeText(linkEl.value).then(function () {
                note('Link copied.');
            }, function () {
                note('Could not reach the clipboard. The link is selected, so copy it.');
            });
            return;
        }
        note('The link is selected, so copy it.');
    }

    /* ------------------------------------------------------------------ */
    /*  5. Wiring                                                         */
    /* ------------------------------------------------------------------ */

    if (nameEl) nameEl.value = 'My board';
    if (colsEl) {
        colsEl.value = draft.cols;
        colsEl.addEventListener('input', function () {
            draft.cols = Number(colsEl.value);
        });
    }
    if (baysEl) {
        baysEl.value = draft.bays;
        baysEl.addEventListener('input', function () {
            draft.bays = Number(baysEl.value);
        });
    }
    if (quickEl) {
        quickEl.addEventListener('input', rowsFromQuick);
    }
    if (addBtn) {
        addBtn.addEventListener('click', function () {
            // New rows land above the starting bank, which is where the board
            // grows from the frog's point of view.
            draft.rows.splice(draft.rows.length - 1, 0,
                              Object.assign({ kind: 'road' }, LANE_DEFAULTS.road));
            drawRows();
            syncQuick();
            note('');
        });
    }
    if (playBtn) playBtn.addEventListener('click', play);
    if (saveBtn) saveBtn.addEventListener('click', save);
    if (shareBtn) shareBtn.addEventListener('click', share);
    if (copyBtn) copyBtn.addEventListener('click', copy);

    // Boards saved in this browser are offered next to the built-in ones.
    loadSaved().forEach(function (raw) {
        const checked = game.sanitise(raw);
        if (checked) game.boards.push(checked);
    });

    drawRows();
    syncQuick();
    drawSaved();

    window.FROGGER_BUILDER = {
        draft: function () { return draft; },
        play: play,
        save: save,
        share: share,
        saved: loadSaved,
        fromQuick: rowsFromQuick,
    };

})();
