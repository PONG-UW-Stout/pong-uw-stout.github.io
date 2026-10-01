// ===========================================================================
//  Frogger.
//  Loaded by _games/frogger.html, so it only runs on /games/frogger/.
//
//  Same coordinate system as the other games in _games/: x is a percentage of
//  the court's width, y a percentage of its height. On top of that the board is
//  a grid, so lane speeds and vehicle lengths are counted in cells per second
//  and in cells, which is how a board actually reads.
//
//  The frog's row is a whole number, but its x is not: riding a log carries it
//  along by fractions of a cell, and a hop moves it by exactly one.
//
//  No row layout is hardcoded here. A board is a list of rows, each one home,
//  bank, road or river, in any order, and everything else is derived from it:
//  the boards come from _data/frogger_boards.yml, or from a ?lanes= string.
// ===========================================================================

(function () {
    'use strict';

    const court = document.querySelector('.court--pond');
    if (!court) return;

    const rowsEl    = document.getElementById('rows');
    const trafficEl = document.getElementById('traffic');
    const frogEl    = document.getElementById('frog');
    const messageEl = document.getElementById('frog-message');
    const livesEl   = document.getElementById('lives');
    const scoreEl   = document.querySelector('[data-score="points"]');
    const baysEl    = document.querySelector('[data-score="bays"]');
    const bayGoalEl = document.querySelector('[data-score="bay-goal"]');
    const boardEl   = document.querySelector('[data-score="board"]');
    const timerEl   = document.getElementById('timer-fill');
    const boardsEl  = document.getElementById('frogger-boards');
    if (!rowsEl || !trafficEl || !frogEl) return;

    const STORE_KEY = 'pong:frogger';
    const KINDS = ['home', 'bank', 'road', 'river'];

    // Used when the data file is missing, empty or unreadable, so the page is
    // never a dead board.
    const FALLBACK = {
        name: 'Classic',
        slug: 'classic',
        cols: 13,
        bays: 5,
        rows: [
            { kind: 'home' },
            { kind: 'river', dir:  1, speed: 1.3, len: 3, gap: 3 },
            { kind: 'river', dir: -1, speed: 1.9, len: 2, gap: 3 },
            { kind: 'river', dir:  1, speed: 1.0, len: 4, gap: 4 },
            { kind: 'river', dir: -1, speed: 2.4, len: 2, gap: 4 },
            { kind: 'river', dir:  1, speed: 1.6, len: 3, gap: 3 },
            { kind: 'bank' },
            { kind: 'road',  dir: -1, speed: 2.6, len: 1, gap: 4 },
            { kind: 'road',  dir:  1, speed: 1.8, len: 1, gap: 5 },
            { kind: 'road',  dir: -1, speed: 3.2, len: 1, gap: 6 },
            { kind: 'road',  dir:  1, speed: 2.2, len: 2, gap: 5 },
            { kind: 'road',  dir: -1, speed: 1.4, len: 1, gap: 4 },
            { kind: 'bank' },
        ],
    };

    const MODES = {
        classic: { lives: 3, time: 30, pace: 1 },
        chill:   { lives: 5, time: 45, pace: 0.75 },
    };

    const LEVEL_PACE = 1.12;  // lane speed multiplier per level cleared
    const ROW_POINTS = 10;    // for each new row of ground gained
    const BAY_POINTS = 50;
    const TIME_POINTS = 2;    // per whole second left on the clock
    const SQUEEZE = 0.8;      // hitboxes are a little kinder than the artwork

    let mode = 'classic';
    let cfg = MODES[mode];

    let started = false;
    let paused  = false;
    let over    = false;
    let score   = 0;
    let lives   = cfg.lives;
    let level   = 1;
    let time    = cfg.time;
    let best    = 0;

    /* ------------------------------------------------------------------ */
    /*  1. Boards                                                         */
    /* ------------------------------------------------------------------ */

    function clamp(value, low, high) {
        return Math.min(Math.max(value, low), high);
    }

    // Boards are hand-written in a data file, so nothing here trusts them.
    // Anything missing gets a default, anything out of range gets clamped, and
    // the two rows the game depends on are forced into place.
    function sanitise(raw) {
        if (!raw || !Array.isArray(raw.rows) || raw.rows.length < 3) return null;

        const cols = clamp(Math.round(Number(raw.cols) || 13), 7, 25);

        const rows = raw.rows.map(function (row) {
            const kind = row && KINDS.indexOf(row.kind) !== -1 ? row.kind : 'bank';
            if (kind !== 'road' && kind !== 'river') return { kind: kind };
            return {
                kind: kind,
                dir: Number(row.dir) < 0 ? -1 : 1,
                speed: clamp(Number(row.speed) || 1.5, 0.4, 6),
                len: clamp(Math.round(Number(row.len) || 1), 1, cols - 2),
                gap: clamp(Math.round(Number(row.gap) || 3), 1, cols),
                look: typeof row.look === 'string' ? row.look.replace(/[^a-z0-9-]/gi, '') : '',
            };
        });

        // The top row holds the bays and the bottom row has to be somewhere safe
        // to start from, whatever the data says.
        rows[0] = { kind: 'home' };
        rows[rows.length - 1] = { kind: 'bank' };

        return {
            name: String(raw.name || 'Board'),
            slug: String(raw.slug || 'board'),
            cols: cols,
            bays: clamp(Math.round(Number(raw.bays) || 5), 2, Math.min(5, cols)),
            rows: rows,
        };
    }

    function loadBoards() {
        let parsed = null;
        if (boardsEl) {
            try {
                parsed = JSON.parse(boardsEl.textContent);
            } catch (err) { /* fall through to the built-in board */ }
        }
        const list = (Array.isArray(parsed) ? parsed : [])
            .map(sanitise)
            .filter(Boolean);
        return list.length ? list : [sanitise(FALLBACK)];
    }

    // A board can also arrive in the query string, which is how someone shares
    // one without adding it to the data file: ?lanes=HWWRWRB, top row first.
    //   H home   B bank   R road   W river
    // Direction alternates and the shapes cycle, so the string stays short
    // enough to type out or read over someone's shoulder.
    const LANE_CHARS = { h: 'home', b: 'bank', r: 'road', w: 'river' };
    const AUTO_SPEED = [1.4, 2.2, 1.7, 2.8, 1.1, 2.4];
    const AUTO_LOG   = [{ len: 3, gap: 3 }, { len: 2, gap: 3 }, { len: 4, gap: 4 }, { len: 2, gap: 4 }];
    const AUTO_CAR   = [{ len: 1, gap: 4 }, { len: 1, gap: 5 }, { len: 2, gap: 5 }, { len: 1, gap: 6 }];

    function boardFromString(text, cols) {
        const chars = String(text).toLowerCase().replace(/[^hbrw]/g, '').split('');
        if (chars.length < 3) return null;

        let lane = 0;
        const rows = chars.map(function (ch) {
            const kind = LANE_CHARS[ch];
            if (kind !== 'road' && kind !== 'river') return { kind: kind };

            const shape = (kind === 'road' ? AUTO_CAR : AUTO_LOG)[lane % AUTO_CAR.length];
            const row = {
                kind: kind,
                dir: lane % 2 === 0 ? 1 : -1,
                speed: AUTO_SPEED[lane % AUTO_SPEED.length],
                len: shape.len,
                gap: shape.gap,
                look: 'car' + ((lane % 4) + 1),
            };
            lane++;
            return row;
        });

        return sanitise({ name: 'Custom', slug: 'custom', cols: cols, bays: 5, rows: rows });
    }

    // The reverse, so the board in play can be handed to someone else.
    function boardString(target) {
        const chars = { home: 'H', bank: 'B', road: 'R', river: 'W' };
        return (target || board).rows.map(function (row) { return chars[row.kind]; }).join('');
    }

    // The whole board including every lane's numbers, as one line of URL-safe
    // text. This is what the share link carries, so a board someone tuned by
    // hand arrives the way they left it.
    function boardCode(target) {
        const b = target || board;
        const rows = b.rows.map(function (row) {
            if (row.kind === 'home') return 'H';
            if (row.kind === 'bank') return 'B';
            return (row.kind === 'road' ? 'R' : 'W') +
                   (row.dir < 0 ? 'l' : 'r') +
                   String(Number(row.speed.toFixed(2))) +
                   'c' + row.len + 'g' + row.gap;
        });
        return b.cols + 'x' + b.bays + '_' + rows.join('_');
    }

    function boardFromCode(text, name) {
        const parts = String(text).split('_');
        const head = /^(\d+)x(\d+)$/.exec(parts.shift() || '');
        if (!head || parts.length < 3) return null;

        let bad = false;
        const rows = parts.map(function (part) {
            if (/^h$/i.test(part)) return { kind: 'home' };
            if (/^b$/i.test(part)) return { kind: 'bank' };
            const lane = /^([rw])([lr])([0-9.]+)c([0-9]+)g([0-9]+)$/i.exec(part);
            if (!lane) {
                bad = true;
                return { kind: 'bank' };
            }
            return {
                kind: lane[1].toLowerCase() === 'r' ? 'road' : 'river',
                dir: lane[2].toLowerCase() === 'l' ? -1 : 1,
                speed: Number(lane[3]),
                len: Number(lane[4]),
                gap: Number(lane[5]),
            };
        });
        if (bad) return null;

        return sanitise({
            name: name || 'Shared board',
            slug: 'shared',
            cols: Number(head[1]),
            bays: Number(head[2]),
            rows: rows,
        });
    }

    const boards = loadBoards();
    let board = boards[0];

    // Everything below is derived from the board in play.
    let COLS = board.cols;
    let ROWS = board.rows.length;
    let cellW = 100 / COLS;
    let cellH = 100 / ROWS;
    let homeRow = 0;
    let startRow = ROWS - 1;

    function rowKind(row) {
        const spec = board.rows[row];
        return spec ? spec.kind : 'bank';
    }

    function rowTop(row)    { return row * cellH; }
    function rowCentre(row) { return (row + 0.5) * cellH; }
    function colCentre(col) { return (col + 0.5) * cellW; }

    /* ------------------------------------------------------------------ */
    /*  2. The board on screen                                            */
    /* ------------------------------------------------------------------ */

    const bays = [];

    function bayColumns() {
        const out = [];
        for (let i = 0; i < board.bays; i++) {
            out.push(Math.round((i * (COLS - 1)) / (board.bays - 1)));
        }
        return out;
    }

    function buildBoard() {
        COLS = board.cols;
        ROWS = board.rows.length;
        cellW = 100 / COLS;
        cellH = 100 / ROWS;
        startRow = ROWS - 1;

        // Square cells whatever the board's shape, so a tall board gets a tall
        // court instead of stretched rows. The stylesheet's ratio is the default
        // for the moment before this runs.
        court.style.aspectRatio = COLS + ' / ' + ROWS;

        rowsEl.textContent = '';
        bays.length = 0;

        for (let row = 0; row < ROWS; row++) {
            const el = document.createElement('div');
            el.className = 'row row--' + rowKind(row);
            el.style.top = rowTop(row).toFixed(3) + '%';
            el.style.height = cellH.toFixed(3) + '%';
            rowsEl.appendChild(el);
        }

        bayColumns().forEach(function (col) {
            const el = document.createElement('div');
            el.className = 'bay';
            el.style.left   = (col * cellW).toFixed(3) + '%';
            el.style.top    = (rowTop(homeRow) + cellH * 0.12).toFixed(3) + '%';
            el.style.width  = cellW.toFixed(3) + '%';
            el.style.height = (cellH * 0.76).toFixed(3) + '%';
            rowsEl.appendChild(el);
            bays.push({ el: el, col: col, filled: false });
        });
    }

    function bayAt(col) {
        for (let i = 0; i < bays.length; i++) {
            if (bays[i].col === col) return bays[i];
        }
        return null;
    }

    function filledBays() {
        return bays.filter(function (bay) { return bay.filled; }).length;
    }

    /* ------------------------------------------------------------------ */
    /*  3. Traffic and logs                                               */
    /* ------------------------------------------------------------------ */

    const movers = [];

    // Each moving row is filled with evenly spaced movers and wrapped by the
    // total spacing, so a lane never opens up a gap it did not start with
    // however long it runs.
    function buildTraffic() {
        trafficEl.textContent = '';
        movers.length = 0;

        let carLane = 0;
        board.rows.forEach(function (lane, row) {
            if (lane.kind !== 'road' && lane.kind !== 'river') return;

            const spacing = lane.len + lane.gap;
            const count = Math.ceil((COLS + lane.len) / spacing) + 1;
            const period = count * spacing;
            const look = lane.kind === 'river' ? 'log'
                : (lane.look || 'car' + ((carLane++ % 4) + 1));

            for (let i = 0; i < count; i++) {
                const el = document.createElement('div');
                el.className = 'mover mover--' + look;
                el.style.top    = rowCentre(row).toFixed(3) + '%';
                el.style.width  = (lane.len * cellW).toFixed(3) + '%';
                el.style.height = (cellH * (lane.kind === 'river' ? 0.66 : 0.6)).toFixed(3) + '%';
                trafficEl.appendChild(el);

                movers.push({
                    el: el,
                    lane: lane,
                    row: row,
                    kind: lane.kind === 'river' ? 'log' : 'car',
                    len: lane.len,
                    x: i * spacing - lane.len,   // in cells, left edge
                    period: period,
                });
            }
        });
        renderMovers();
    }

    function renderMovers() {
        for (let i = 0; i < movers.length; i++) {
            movers[i].el.style.left = (movers[i].x * cellW).toFixed(3) + '%';
        }
    }

    function pace() {
        return cfg.pace * Math.pow(LEVEL_PACE, level - 1);
    }

    function stepMovers(dt) {
        const rate = pace();

        for (let i = 0; i < movers.length; i++) {
            const mover = movers[i];
            mover.x += mover.lane.dir * mover.lane.speed * rate * dt;

            if (mover.lane.dir > 0 && mover.x > COLS) mover.x -= mover.period;
            else if (mover.lane.dir < 0 && mover.x + mover.len < 0) mover.x += mover.period;
        }
        renderMovers();
    }

    function laneSpeedOf(mover) {
        return mover.lane.dir * mover.lane.speed * pace();
    }

    /* ------------------------------------------------------------------ */
    /*  4. The frog                                                       */
    /* ------------------------------------------------------------------ */

    const frog = {
        row: 0,
        x: 50,        // centre, in % of the court's width
        best: 0,      // furthest row reached this attempt
        riding: null,
    };

    function measureFrog() {
        frogEl.style.width  = (cellW * 0.78).toFixed(3) + '%';
        frogEl.style.height = (cellH * 0.78).toFixed(3) + '%';
    }

    function renderFrog() {
        frogEl.style.left = frog.x.toFixed(3) + '%';
        frogEl.style.top  = rowCentre(frog.row).toFixed(3) + '%';
    }

    function placeFrog() {
        frog.row = startRow;
        frog.x = colCentre(Math.floor(COLS / 2));
        frog.best = startRow;
        frog.riding = null;
        time = cfg.time;
        renderFrog();
        renderTimer();
    }

    // Columns are only meaningful when the frog is on solid ground, which is the
    // only time a hop needs to land on one.
    function frogCol() {
        return Math.round(frog.x / cellW - 0.5);
    }

    function hop(dx, dy) {
        if (!started || paused || over) return;

        const row = clamp(frog.row + dy, 0, ROWS - 1);
        let x = frog.x + dx * cellW;

        // The far bank is wall except for the bays, and a filled bay is no
        // longer a place to land, so refuse the hop instead of killing for it.
        if (rowKind(row) === 'home') {
            const col = Math.round(x / cellW - 0.5);
            const bay = bayAt(col);
            if (!bay || bay.filled) return;
            x = colCentre(col);
        }

        if (x < 0 || x > 100) return;

        frog.row = row;
        frog.x = x;

        if (row < frog.best) {
            score += ROW_POINTS * (frog.best - row);
            frog.best = row;
            renderScore();
        }

        renderFrog();

        if (rowKind(row) === 'home') reachHome();
        else checkFrog(0);
    }

    /* ------------------------------------------------------------------ */
    /*  5. What the frog is standing on                                   */
    /* ------------------------------------------------------------------ */

    // Carried by whatever log it landed on, then checked against the row it is
    // in. Order matters: riding has to be resolved before drowning.
    function checkFrog(dt) {
        const kind = rowKind(frog.row);

        if (kind === 'river') {
            const log = logUnderFrog();
            frog.riding = log;
            if (!log) {
                die();
                return;
            }
            if (dt) {
                frog.x += laneSpeedOf(log) * cellW * dt;
                renderFrog();
                if (frog.x < 0 || frog.x > 100) die();
            }
            return;
        }

        frog.riding = null;

        if (kind === 'road' && carUnderFrog()) die();
    }

    function logUnderFrog() {
        for (let i = 0; i < movers.length; i++) {
            const mover = movers[i];
            if (mover.kind !== 'log' || mover.row !== frog.row) continue;
            const left = mover.x * cellW;
            const right = left + mover.len * cellW;
            if (frog.x >= left && frog.x <= right) return mover;
        }
        return null;
    }

    function carUnderFrog() {
        const reach = cellW * 0.39 * SQUEEZE;
        for (let i = 0; i < movers.length; i++) {
            const mover = movers[i];
            if (mover.kind !== 'car' || mover.row !== frog.row) continue;
            const left = mover.x * cellW;
            const right = left + mover.len * cellW;
            if (frog.x + reach > left && frog.x - reach < right) return mover;
        }
        return null;
    }

    /* ------------------------------------------------------------------ */
    /*  6. Score, lives, clock, state                                     */
    /* ------------------------------------------------------------------ */

    function bestKey() {
        return STORE_KEY + ':' + board.slug;
    }

    function loadBest() {
        best = 0;
        try {
            best = Number(window.localStorage.getItem(bestKey())) || 0;
        } catch (err) { /* no stored best available */ }
    }

    function saveBest() {
        try {
            window.localStorage.setItem(bestKey(), String(best));
        } catch (err) { /* the run still counts for this session */ }
    }

    function renderScore() {
        if (scoreEl) scoreEl.textContent = score;
        if (baysEl) baysEl.textContent = filledBays();
        if (bayGoalEl) bayGoalEl.textContent = bays.length;
        if (boardEl) boardEl.textContent = board.name;
    }

    function renderLives() {
        if (!livesEl) return;
        livesEl.textContent = '';
        for (let i = 0; i < lives; i++) {
            const life = document.createElement('span');
            life.className = 'life';
            livesEl.appendChild(life);
        }
    }

    function renderTimer() {
        if (!timerEl) return;
        const left = Math.max(time / cfg.time, 0);
        timerEl.style.width = (left * 100).toFixed(2) + '%';
        timerEl.classList.toggle('is-low', left < 0.25);
    }

    function message(text) {
        if (!messageEl) return;
        messageEl.textContent = text || '';
        messageEl.hidden = !text;
    }

    function flash() {
        court.classList.remove('is-hit');
        // Reading offsetWidth restarts the animation, which otherwise only plays
        // the first time the class goes on.
        void court.offsetWidth;
        court.classList.add('is-hit');
    }

    function die() {
        lives--;
        renderLives();
        flash();

        if (lives <= 0) {
            over = true;
            started = false;
            if (score > best) {
                best = score;
                saveBest();
            }
            message('Game over. ' + score + ' points, best ' + best +
                    ' on ' + board.name + '. Press space to play again');
            return;
        }
        placeFrog();
    }

    function reachHome() {
        const bay = bayAt(frogCol());
        if (bay) {
            bay.filled = true;
            bay.el.classList.add('is-filled');
        }

        score += BAY_POINTS + Math.floor(time) * TIME_POINTS;
        renderScore();

        if (filledBays() >= bays.length) {
            level++;
            bays.forEach(function (b) {
                b.filled = false;
                b.el.classList.remove('is-filled');
            });
            renderScore();
            placeFrog();
            message('Level ' + level + '. Press space to carry on');
            started = false;
            return;
        }
        placeFrog();
    }

    function start() {
        if (started || over) return;
        started = true;
        paused = false;
        message('');
    }

    function setPaused(next) {
        if (over || !started) return;
        paused = next;
        message(paused ? 'Paused. Press space to resume' : '');
    }

    function resetGame() {
        started = false;
        paused = false;
        over = false;
        score = 0;
        level = 1;
        lives = cfg.lives;
        bays.forEach(function (bay) {
            bay.filled = false;
            bay.el.classList.remove('is-filled');
        });
        buildTraffic();
        measureFrog();
        placeFrog();
        renderScore();
        renderLives();
        message(board.name + '. Hop to a bay across the board. Press space to start');
    }

    /* ------------------------------------------------------------------ */
    /*  7. Controls                                                       */
    /* ------------------------------------------------------------------ */

    const HOPS = {
        arrowleft:  [-1, 0],
        a:          [-1, 0],
        arrowright: [1, 0],
        d:          [1, 0],
        arrowup:    [0, -1],
        w:          [0, -1],
        arrowdown:  [0, 1],
        s:          [0, 1],
    };

    document.addEventListener('keydown', function (e) {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        const key = e.key.toLowerCase();

        if (key === ' ' || key === 'spacebar') {
            const tag = document.activeElement && document.activeElement.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
            e.preventDefault();
            if (e.repeat) return;
            if (over) {
                resetGame();
                start();
            } else if (!started) {
                start();
            } else {
                setPaused(!paused);
            }
            return;
        }

        const move = HOPS[key];
        if (!move) return;
        e.preventDefault();   // the arrows would scroll the page instead
        if (e.repeat) return; // one hop per press, however long it is held
        if (!started) {
            start();
            return;
        }
        hop(move[0], move[1]);
    });

    // A tap hops one step toward wherever it landed, taking the bigger of the
    // two distances, so a thumb gets the same four moves as the keys.
    court.addEventListener('pointerdown', function (e) {
        e.preventDefault();

        if (over) {
            resetGame();
            start();
            return;
        }
        if (!started) {
            start();
            return;
        }

        const box = court.getBoundingClientRect();
        if (!box.width || !box.height) return;
        const x = ((e.clientX - box.left) / box.width) * 100;
        const y = ((e.clientY - box.top) / box.height) * 100;
        const dx = x - frog.x;
        const dy = y - rowCentre(frog.row);

        if (Math.abs(dx) > Math.abs(dy)) hop(dx > 0 ? 1 : -1, 0);
        else hop(0, dy > 0 ? 1 : -1);
    });

    /* ------------------------------------------------------------------ */
    /*  8. Board and mode pickers                                         */
    /* ------------------------------------------------------------------ */

    function markButtons(attr, value) {
        document.querySelectorAll('[' + attr + ']').forEach(function (btn) {
            const active = btn.getAttribute(attr) === value;
            btn.classList.toggle('is-active', active);
            btn.setAttribute('aria-pressed', active);
        });
    }

    function setBoard(next) {
        let found = typeof next === 'string'
            ? boards.filter(function (b) { return b.slug === next; })[0]
            : sanitise(next);
        if (!found) return;

        // A board handed in whole, from the builder or a link, joins the list
        // under its own slug so the buttons can come back to it.
        if (typeof next !== 'string') {
            const at = boards.map(function (b) { return b.slug; }).indexOf(found.slug);
            if (at === -1) boards.push(found);
            else boards[at] = found;
        }

        board = found;
        window.FROGGER.board = board;
        markButtons('data-board', board.slug);
        loadBest();
        buildBoard();
        resetGame();
    }

    function setMode(next) {
        mode = MODES[next] ? next : 'classic';
        cfg = MODES[mode];
        window.FROGGER.mode = mode;
        markButtons('data-mode', mode);
        resetGame();
    }

    document.querySelectorAll('[data-board]').forEach(function (btn) {
        btn.addEventListener('click', function () { setBoard(btn.dataset.board); });
    });

    document.querySelectorAll('[data-mode]').forEach(function (btn) {
        btn.addEventListener('click', function () { setMode(btn.dataset.mode); });
    });

    // A shared board gets its own button, so it can be switched back to after a
    // go on one of the others.
    function addCustomButton(custom) {
        const row = document.querySelector('[data-board]');
        if (!row || !row.parentNode) return;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'mode-button';
        btn.dataset.board = custom.slug;
        btn.textContent = custom.name;
        btn.addEventListener('click', function () { setBoard(custom.slug); });
        row.parentNode.appendChild(btn);
    }

    function boardFromQuery() {
        if (!window.location || !window.location.search) return null;
        let params;
        try {
            params = new URLSearchParams(window.location.search);
        } catch (err) {
            return null;
        }
        const code = params.get('board');
        if (code) return boardFromCode(code);

        const lanes = params.get('lanes');
        if (!lanes) return null;
        return boardFromString(lanes, Math.round(Number(params.get('cols')) || 13));
    }

    /* ------------------------------------------------------------------ */
    /*  9. Loop                                                           */
    /* ------------------------------------------------------------------ */

    let last = 0;

    function frame(now) {
        // Zero on the first frame. Capped so a tab that sat hidden can't sweep
        // the traffic across the board, and floored at 0 because a frame
        // timestamp that went backwards would run the game in reverse.
        const dt = last ? Math.min(Math.max((now - last) / 1000, 0), 0.05) : 0;
        last = now;

        if (dt && started && !paused && !over) {
            stepMovers(dt);
            checkFrog(dt);

            time -= dt;
            renderTimer();
            if (time <= 0) die();
        }
        requestAnimationFrame(frame);
    }

    /* ------------------------------------------------------------------ */
    /*  Boot                                                              */
    /* ------------------------------------------------------------------ */

    window.FROGGER = {
        frog: frog,
        movers: movers,
        bays: bays,
        boards: boards,
        board: board,
        hop: hop,
        setBoard: setBoard,
        setMode: setMode,
        boardString: boardString,
        boardFromString: boardFromString,
        boardCode: boardCode,
        boardFromCode: boardFromCode,
        sanitise: sanitise,
        start: start,
        reset: resetGame,
        pause: setPaused,
        state: function () {
            return {
                board: board.slug, mode: mode, started: started, paused: paused,
                over: over, score: score, lives: lives, level: level, time: time,
                row: frog.row, rows: ROWS, cols: COLS,
                bays: filledBays(), goal: bays.length, best: best,
            };
        },
    };

    const shared = boardFromQuery();
    if (shared) {
        setBoard(shared);
        addCustomButton(shared);
    } else {
        setBoard(boards[0].slug);
    }
    requestAnimationFrame(frame);

})();
