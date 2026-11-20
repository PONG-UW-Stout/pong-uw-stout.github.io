(function () {
    "use strict";

    const TIME_BASE = 1000;
    const MAX_TIME = 999;

    const LEVELS = {
        beginner:     { cols: 9,  rows: 9,  mines: 10, label: "Beginner" },
        intermediate: { cols: 16, rows: 16, mines: 40, label: "Intermediate" },
        expert:       { cols: 30, rows: 16, mines: 99, label: "Expert" }
    };

    const boardEl = document.getElementById("ms-board");
    if (!boardEl) return;

    const minesEl = document.getElementById("ms-mines");
    const timeEl = document.getElementById("ms-time");
    const faceEl = document.getElementById("ms-face");
    const statusEl = document.getElementById("ms-status");
    const modeButtons = Array.prototype.slice.call(
        document.querySelectorAll("[data-ms-level]")
    );

    let level = LEVELS.beginner;
    let cells = [];          // flat array of cell state
    let laid = false;        // mines placed yet?
    let over = false;
    let won = false;
    let revealedCount = 0;
    let flags = 0;
    let seconds = 0;
    let ticker = null;
    let cursor = 0;          // keyboard focus index

    const records = window.PONG_SCORES ? window.PONG_SCORES.mount({
        game: "minesweeper",
        el: document.getElementById("minesweeper-scores"),
        variant: function () {
            return { key: level.label.toLowerCase(), label: level.label };
        },
        format: function (value) { return clock(TIME_BASE - value); }
    }) : null;

    function clock(s) {
        const m = Math.floor(s / 60);
        const r = s % 60;
        return m + ":" + (r < 10 ? "0" : "") + r;
    }

    function pad3(n) {
        const sign = n < 0;
        const v = Math.min(999, Math.abs(n));
        return (sign ? "-" : "") + String(v).padStart(sign ? 2 : 3, "0");
    }

    function idx(c, r) { return r * level.cols + c; }
    function inBounds(c, r) { return c >= 0 && c < level.cols && r >= 0 && r < level.rows; }

    function neighbours(i) {
        const c = i % level.cols;
        const r = Math.floor(i / level.cols);
        const out = [];
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (!dc && !dr) continue;
                if (inBounds(c + dc, r + dr)) out.push(idx(c + dc, r + dr));
            }
        }
        return out;
    }

    /* --------------------------------------------------------------- setup */

    function build() {
        stopTimer();
        laid = false; over = false; won = false;
        revealedCount = 0; flags = 0; seconds = 0; cursor = 0;

        cells = [];
        for (let i = 0; i < level.cols * level.rows; i++) {
            cells.push({ mine: false, near: 0, open: false, flag: false });
        }

        boardEl.style.setProperty("--ms-cols", level.cols);
        boardEl.textContent = "";
        boardEl.setAttribute("aria-rowcount", level.rows);
        boardEl.setAttribute("aria-colcount", level.cols);

        const frag = document.createDocumentFragment();
        for (let i = 0; i < cells.length; i++) {
            const b = document.createElement("button");
            b.type = "button";
            b.className = "ms-cell";
            b.dataset.i = i;
            b.setAttribute("tabindex", i === 0 ? "0" : "-1");
            frag.appendChild(b);
        }
        boardEl.appendChild(frag);

        face("smile");
        paint();
        say(level.label + ". " + level.mines + " mines. Use the arrow keys to move, Enter to open, F to flag.");
    }

    function lay(safe) {
        const banned = {};
        banned[safe] = true;
        neighbours(safe).forEach(function (n) { banned[n] = true; });

        const pool = [];
        for (let i = 0; i < cells.length; i++) if (!banned[i]) pool.push(i);

        const count = Math.min(level.mines, pool.length);
        for (let k = 0; k < count; k++) {
            const j = k + Math.floor(Math.random() * (pool.length - k));
            const t = pool[k]; pool[k] = pool[j]; pool[j] = t;
            cells[pool[k]].mine = true;
        }

        for (let i = 0; i < cells.length; i++) {
            if (cells[i].mine) continue;
            cells[i].near = neighbours(i).filter(function (n) { return cells[n].mine; }).length;
        }
        laid = true;
    }

    /* ---------------------------------------------------------------- play */

    function open(i) {
        const cell = cells[i];
        if (over || cell.open || cell.flag) return;

        if (!laid) { lay(i); startTimer(); }

        if (cell.mine) { lose(i); return; }

        const stack = [i];
        while (stack.length) {
            const j = stack.pop();
            const c = cells[j];
            if (c.open || c.flag) continue;
            c.open = true;
            revealedCount++;
            if (c.near === 0) neighbours(j).forEach(function (n) {
                if (!cells[n].open && !cells[n].flag) stack.push(n);
            });
        }

        paint();
        checkWin();
    }

    function flag(i) {
        const cell = cells[i];
        if (over || cell.open) return;
        cell.flag = !cell.flag;
        flags += cell.flag ? 1 : -1;
        paint();
        checkWin();
    }

    function chord(i) {
        const cell = cells[i];
        if (over || !cell.open || cell.near === 0) return;
        const ns = neighbours(i);
        const flagged = ns.filter(function (n) { return cells[n].flag; }).length;
        if (flagged !== cell.near) return;
        ns.forEach(function (n) { if (!cells[n].flag && !cells[n].open) open(n); });
    }

    function checkWin() {
        if (over) return;
        if (revealedCount === cells.length - level.mines) {
            over = true; won = true;
            stopTimer();
            face("cool");
            for (let i = 0; i < cells.length; i++) {
                if (cells[i].mine && !cells[i].flag) { cells[i].flag = true; flags++; }
            }
            paint();

            let place = 0;
            if (records && seconds <= MAX_TIME) {
                place = records.submit(TIME_BASE - seconds);
            }
            say("Swept in " + clock(seconds) + "." +
                (place ? " That is number " + place + " on your " + level.label + " board." : ""));
        }
    }

    function lose(hit) {
        over = true;
        stopTimer();
        face("dead");
        cells[hit].hit = true;
        for (let i = 0; i < cells.length; i++) {
            if (cells[i].mine) cells[i].open = true;
        }
        paint();
        say("Mine. " + clock(seconds) + " on the clock. Press the face to try again.");
    }

    /* --------------------------------------------------------------- paint */

    function paint() {
        const nodes = boardEl.children;
        for (let i = 0; i < cells.length; i++) {
            const c = cells[i];
            const b = nodes[i];
            b.className = "ms-cell";
            b.textContent = "";
            b.removeAttribute("data-near");

            if (c.flag) {
                b.classList.add("is-flag");
                b.setAttribute("aria-label", "Flagged");
            } else if (!c.open) {
                b.setAttribute("aria-label", "Covered");
            } else if (c.mine) {
                b.classList.add("is-open", "is-mine");
                if (c.hit) b.classList.add("is-hit");
                b.setAttribute("aria-label", "Mine");
            } else {
                b.classList.add("is-open");
                if (c.near) {
                    b.textContent = c.near;
                    b.dataset.near = c.near;
                }
                b.setAttribute("aria-label", c.near ? c.near + " nearby" : "Empty");
            }
        }
        if (minesEl) minesEl.textContent = pad3(level.mines - flags);
        if (timeEl) timeEl.textContent = pad3(seconds);
    }

    function face(state) {
        if (!faceEl) return;
        faceEl.dataset.face = state;
        faceEl.setAttribute("aria-label",
            state === "dead" ? "Game over. Start a new game"
                : state === "cool" ? "Swept. Start a new game"
                    : "Start a new game");
    }

    function say(text) { if (statusEl) statusEl.textContent = text; }

    /* --------------------------------------------------------------- timer */

    function startTimer() {
        stopTimer();
        ticker = window.setInterval(function () {
            if (seconds >= MAX_TIME) { stopTimer(); return; }
            seconds++;
            if (timeEl) timeEl.textContent = pad3(seconds);
        }, 1000);
    }

    function stopTimer() {
        if (ticker) { window.clearInterval(ticker); ticker = null; }
    }

    /* --------------------------------------------------------------- input */

    boardEl.addEventListener("contextmenu", function (e) {
        const b = e.target.closest(".ms-cell");
        if (!b) return;
        e.preventDefault();
        flag(Number(b.dataset.i));
    });

    boardEl.addEventListener("click", function (e) {
        const b = e.target.closest(".ms-cell");
        if (!b) return;
        const i = Number(b.dataset.i);
        focusCell(i);
        if (cells[i].open) chord(i); else open(i);
    });

    let touchTimer = null;
    boardEl.addEventListener("touchstart", function (e) {
        const b = e.target.closest(".ms-cell");
        if (!b) return;
        const i = Number(b.dataset.i);
        touchTimer = window.setTimeout(function () {
            touchTimer = null;
            flag(i);
            if (window.navigator.vibrate) window.navigator.vibrate(15);
        }, 400);
    }, { passive: true });

    function cancelTouch() {
        if (touchTimer) { window.clearTimeout(touchTimer); touchTimer = null; }
    }
    boardEl.addEventListener("touchend", cancelTouch);
    boardEl.addEventListener("touchmove", cancelTouch);
    boardEl.addEventListener("touchcancel", cancelTouch);

    function focusCell(i) {
        const nodes = boardEl.children;
        if (!nodes[i]) return;
        if (nodes[cursor]) nodes[cursor].setAttribute("tabindex", "-1");
        cursor = i;
        nodes[i].setAttribute("tabindex", "0");
    }

    boardEl.addEventListener("keydown", function (e) {
        const b = e.target.closest(".ms-cell");
        if (!b) return;
        const i = Number(b.dataset.i);
        const c = i % level.cols;
        const r = Math.floor(i / level.cols);
        let to = null;

        if (e.key === "ArrowLeft" && c > 0) to = idx(c - 1, r);
        else if (e.key === "ArrowRight" && c < level.cols - 1) to = idx(c + 1, r);
        else if (e.key === "ArrowUp" && r > 0) to = idx(c, r - 1);
        else if (e.key === "ArrowDown" && r < level.rows - 1) to = idx(c, r + 1);
        else if (e.key === "f" || e.key === "F") { e.preventDefault(); flag(i); return; }
        else return;

        e.preventDefault();
        focusCell(to);
        boardEl.children[to].focus();
    });

    if (faceEl) faceEl.addEventListener("click", build);

    modeButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const next = LEVELS[btn.dataset.msLevel];
            if (!next) return;
            level = next;
            modeButtons.forEach(function (b) {
                b.setAttribute("aria-pressed", String(b === btn));
            });
            build();
        });
    });

    build();
})();
