// ===========================================================================
//  PONG: paddles, ball, scoring.
//  Loaded by _games/pong.html, so it only runs on /games/pong/.
//
//  Positions are percentages of the court, matching the layout in
//  _sass/pong/games/pong.scss: paddle tops and the ball's y as a % of the
//  court's height, the ball's x as a % of its width. Nothing needs recalculating
//  when the court resizes, and the only thing read from the DOM is the size of
//  each piece.
//
//  Ball velocity is in court heights per second, converted to those percentages
//  when the ball moves. The court is twice as wide as it is tall, so raw
//  percentages on both axes would send the ball sideways at twice the speed.
// ===========================================================================

(function () {
    'use strict';

    const court = document.querySelector('.court');
    if (!court) return;

    const SPEED         = 95;   // human paddle travel, in % of court height per second
    const CPU_SPEED     = 70;   // the computer is a touch slower, so it can be beaten
    const CPU_DEADZONE  = 1.5;  // % of court the CPU tolerates before correcting

    const SERVE_SPEED   = 0.75; // ball speed off a serve, in court heights per second
    const MAX_SPEED     = 1.9;  // ...and the ceiling it rallies up to
    const SPEEDUP       = 1.05; // speed multiplier per paddle hit
    const MAX_BOUNCE    = 60;   // degrees off the horizontal at the very edge of a paddle
    const SERVE_SPREAD  = 25;   // degrees of random spread on a serve
    const SERVE_DELAY   = 0.9;  // seconds the ball sits at centre before launching
    const SUBSTEP       = 0.9;  // max % of court width the ball moves per collision step
    const WIN_SCORE     = 11;

    const DEG = Math.PI / 180;

    // [up key, down key] per paddle, compared against a lowercased event.key.
    // yaoi is the left paddle, yuri the right one.
    const KEYS = {
        yaoi: ['w', 's'],
        yuri: ['arrowup', 'arrowdown'],
    };

    // What the scoreboard calls each side, matching the hint text on the page.
    const LABELS = { yaoi: 'Left', yuri: 'Right' };

    // Named on the start notice: the highlighted button is easy to miss, and
    // walking up to a court without knowing whether the right paddle is yours
    // is a bad way to find out.
    const MODE_NOTES = {
        'two-player': 'Two player',
        'one-player': 'One player, you have the left paddle',
    };

    // Arrow keys would otherwise scroll the page out from under the court.
    const SCROLL_KEYS = ['arrowup', 'arrowdown'];

    /* ------------------------------------------------------------------ */
    /*  1. Paddles                                                        */
    /* ------------------------------------------------------------------ */

    function makePaddle(id, keys) {
        const el = document.getElementById('paddle-' + id);
        if (!el) return null;

        const paddle = {
            id: id,
            el: el,
            keys: keys,
            size: 26,     // height, in % of the court; re-read from the DOM by measure()
            pos: 37,      // top edge, in % of the court
            dir: 0,       // -1 up, 0 still, 1 down
            cpu: false,   // true while the computer drives this paddle
            target: null, // centre the CPU is steering toward, in % of the court
        };

        // The height is set in CSS as a % of the court. Read it back so the
        // number is only written down in one place.
        paddle.measure = function () {
            const height = court.clientHeight;
            if (!height) return;
            const size = (el.offsetHeight / height) * 100;
            if (size > 0) paddle.size = size;
            paddle.clamp();
            paddle.render();
        };

        paddle.clamp = function () {
            const max = Math.max(100 - paddle.size, 0);
            paddle.pos = Math.min(Math.max(paddle.pos, 0), max);
        };

        paddle.centre = function () {
            return paddle.pos + paddle.size / 2;
        };

        paddle.render = function () {
            el.style.top = paddle.pos.toFixed(3) + '%';
        };

        // Move the top edge to an absolute position, in % of the court.
        paddle.moveTo = function (top) {
            paddle.pos = top;
            paddle.clamp();
            paddle.render();
        };

        // Same, but positioned by the paddle's middle, which is how the ball
        // code and pointer dragging both work.
        paddle.centreOn = function (centre) {
            paddle.moveTo(centre - paddle.size / 2);
        };

        // Where the CPU should steer. Pass null to leave it parked.
        paddle.aim = function (centre) {
            paddle.target = centre;
        };

        paddle.reset = function () {
            paddle.dir = 0;
            paddle.target = null;
            paddle.measure();
            paddle.moveTo((100 - paddle.size) / 2);
        };

        // The paddle's hitbox. x values are % of the court's width, y values %
        // of its height. offsetLeft is relative to the court, which is the
        // offset parent thanks to its position: relative.
        paddle.box = function () {
            const width = court.clientWidth;
            const span = width ? (el.offsetWidth / width) * 100 : 2.5;
            const left = width ? (el.offsetLeft / width) * 100 : 0;
            return {
                left: left,
                right: left + span,
                top: paddle.pos,
                bottom: paddle.pos + paddle.size,
            };
        };

        // One frame of movement. dt is in seconds.
        paddle.step = function (dt) {
            if (paddle.cpu) {
                if (paddle.target === null) return;
                const gap = paddle.target - paddle.centre();
                if (Math.abs(gap) <= CPU_DEADZONE) return;
                // Cap the step at the remaining gap so the CPU never jitters
                // back and forth across its target.
                const travel = Math.min(CPU_SPEED * dt, Math.abs(gap));
                paddle.pos += gap > 0 ? travel : -travel;
            } else {
                if (!paddle.dir) return;
                paddle.pos += paddle.dir * SPEED * dt;
            }
            paddle.clamp();
            paddle.render();
        };

        return paddle;
    }

    const paddles = {};
    Object.keys(KEYS).forEach(function (id) {
        const paddle = makePaddle(id, KEYS[id]);
        if (paddle) paddles[id] = paddle;
    });

    const list = Object.keys(paddles).map(function (id) { return paddles[id]; });
    if (!list.length) return;

    /* ------------------------------------------------------------------ */
    /*  2. Keyboard                                                       */
    /* ------------------------------------------------------------------ */

    const pressed = new Set();

    // Recomputed on every key event, so holding both keys at once, or releasing
    // one of them, still leaves the paddle going the right way.
    function refreshDirections() {
        list.forEach(function (paddle) {
            if (paddle.cpu) {
                paddle.dir = 0;
                return;
            }
            const up   = pressed.has(paddle.keys[0]) ? 1 : 0;
            const down = pressed.has(paddle.keys[1]) ? 1 : 0;
            paddle.dir = down - up;
        });
    }

    function isPaddleKey(key) {
        return list.some(function (paddle) {
            return paddle.keys.indexOf(key) !== -1;
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        const key = e.key.toLowerCase();

        // Space restarts the match once someone has won, otherwise it pauses.
        // Ignored while a form field has focus.
        if (key === ' ' || key === 'spacebar') {
            const tag = document.activeElement && document.activeElement.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
            e.preventDefault();
            if (e.repeat) return;
            if (over) {
                resetMatch();
                start();
            } else if (!started) {
                start();
            } else {
                setPaused(!paused);
            }
            return;
        }

        if (!isPaddleKey(key)) return;
        if (SCROLL_KEYS.indexOf(key) !== -1) e.preventDefault();
        if (e.repeat) return;
        pressed.add(key);
        refreshDirections();
    });

    document.addEventListener('keyup', function (e) {
        const key = e.key.toLowerCase();
        if (!pressed.delete(key)) return;
        refreshDirections();
    });

    // Losing focus drops held keys, or a paddle carries on drifting.
    window.addEventListener('blur', function () {
        pressed.clear();
        refreshDirections();
    });

    /* ------------------------------------------------------------------ */
    /*  3. Pointer / touch dragging                                       */
    /* ------------------------------------------------------------------ */

    // Dragging in a half of the court moves that half's paddle straight to the
    // pointer. No easing: the pointer already says where the paddle goes.
    const dragging = {};

    function paddleForX(clientX) {
        const box = court.getBoundingClientRect();
        const id = clientX < box.left + box.width / 2 ? 'yaoi' : 'yuri';
        const paddle = paddles[id];
        return paddle && !paddle.cpu ? paddle : null;
    }

    function centreFromY(clientY) {
        const box = court.getBoundingClientRect();
        if (!box.height) return null;
        return ((clientY - box.top) / box.height) * 100;
    }

    court.addEventListener('pointerdown', function (e) {
        if (over) {
            resetMatch();
            start();
        } else {
            start();
        }

        const paddle = paddleForX(e.clientX);
        if (!paddle) return;
        const centre = centreFromY(e.clientY);
        if (centre === null) return;
        dragging[e.pointerId] = paddle;
        paddle.centreOn(centre);
        if (court.setPointerCapture) court.setPointerCapture(e.pointerId);
        e.preventDefault();
    });

    court.addEventListener('pointermove', function (e) {
        const paddle = dragging[e.pointerId];
        if (!paddle) return;
        const centre = centreFromY(e.clientY);
        if (centre !== null) paddle.centreOn(centre);
        e.preventDefault();
    });

    function endDrag(e) {
        delete dragging[e.pointerId];
    }

    court.addEventListener('pointerup', endDrag);
    court.addEventListener('pointercancel', endDrag);

    /* ------------------------------------------------------------------ */
    /*  4. Ball                                                           */
    /* ------------------------------------------------------------------ */

    const ballEl = court.querySelector('.ball');

    const ball = {
        x: 50,        // centre, in % of the court's width
        y: 50,        // centre, in % of the court's height
        vx: 0,        // court heights per second, positive = toward yuri (right)
        vy: 0,        // court heights per second, positive = downward
        halfW: 1.25,  // half the ball's width, in % of the court's width
        halfH: 2.5,   // half its height, in % of the court's height
        aspect: 2,    // court width / height, per the CSS aspect-ratio
        wait: 0,      // seconds left before the next serve launches
        toward: null, // side the pending serve is heading for
    };

    function measureBall() {
        const width  = court.clientWidth;
        const height = court.clientHeight;
        if (!width || !height || !ballEl) return;
        ball.aspect = width / height;
        ball.halfW  = (ballEl.offsetWidth  / width)  * 50;
        ball.halfH  = (ballEl.offsetHeight / height) * 50;
    }

    function renderBall() {
        if (!ballEl) return;
        ballEl.style.left = ball.x.toFixed(3) + '%';
        ballEl.style.top  = ball.y.toFixed(3) + '%';
    }

    // Park the ball at centre, pointed at whoever is about to receive.
    function serve(toward) {
        ball.toward = toward || (Math.random() < 0.5 ? 'yaoi' : 'yuri');
        ball.x = 50;
        ball.y = 50;
        ball.vx = 0;
        ball.vy = 0;
        ball.wait = SERVE_DELAY;
        renderBall();
    }

    function launch() {
        const angle = (Math.random() * 2 - 1) * SERVE_SPREAD * DEG;
        const dir = ball.toward === 'yaoi' ? -1 : 1;
        ball.vx = Math.cos(angle) * SERVE_SPEED * dir;
        ball.vy = Math.sin(angle) * SERVE_SPEED;
    }

    // Where the ball met the paddle sets the angle it leaves at: the edges send
    // it out steep, the middle sends it back flat. Each hit speeds the rally up
    // a little, to a ceiling of MAX_SPEED.
    function bounce(paddle, box) {
        const reach = (box.bottom - box.top) / 2;
        const offset = reach ? (ball.y - (box.top + reach)) / reach : 0;
        const angle = Math.min(Math.max(offset, -1), 1) * MAX_BOUNCE * DEG;
        const speed = Math.min(Math.hypot(ball.vx, ball.vy) * SPEEDUP, MAX_SPEED);
        const dir = paddle.id === 'yaoi' ? 1 : -1;

        ball.vx = Math.cos(angle) * speed * dir;
        ball.vy = Math.sin(angle) * speed;
        // Sit the ball against the face it hit, so the next frame doesn't read
        // the same overlap as a second hit.
        ball.x = dir > 0 ? box.right + ball.halfW : box.left - ball.halfW;
    }

    function hitTest(paddle) {
        // Only the paddle the ball is heading for can return it. One already
        // moving away has been dealt with.
        if (paddle.id === 'yaoi' ? ball.vx >= 0 : ball.vx <= 0) return false;

        const box = paddle.box();
        if (ball.x - ball.halfW > box.right) return false;
        if (ball.x + ball.halfW < box.left) return false;
        if (ball.y + ball.halfH < box.top) return false;
        if (ball.y - ball.halfH > box.bottom) return false;

        bounce(paddle, box);
        return true;
    }

    // Move the ball once and resolve what it ran into. Returns false when the
    // point ended, so the caller stops stepping.
    function advance(dt) {
        ball.x += ball.vx * dt * (100 / ball.aspect);
        ball.y += ball.vy * dt * 100;

        if (ball.y - ball.halfH < 0) {
            ball.y = ball.halfH;
            ball.vy = Math.abs(ball.vy);
        } else if (ball.y + ball.halfH > 100) {
            ball.y = 100 - ball.halfH;
            ball.vy = -Math.abs(ball.vy);
        }

        for (let i = 0; i < list.length; i++) {
            if (hitTest(list[i])) break;
        }

        if (ball.x + ball.halfW < 0) {
            point('yuri');
            return false;
        }
        if (ball.x - ball.halfW > 100) {
            point('yaoi');
            return false;
        }
        return true;
    }

    function stepBall(dt) {
        // Parked at centre until someone starts the match, so the ball isn't
        // already in play before anyone has hold of a paddle.
        if (!started) return;

        if (ball.wait > 0) {
            ball.wait -= dt;
            if (ball.wait > 0) return;
            ball.wait = 0;
            launch();
        }

        // Split fast frames up. A paddle is 2.5% of the court wide, so one big
        // step could put the ball past it without ever overlapping.
        const travel = Math.abs(ball.vx) * dt * (100 / ball.aspect);
        const steps = Math.max(1, Math.ceil(travel / SUBSTEP));
        const slice = dt / steps;
        for (let i = 0; i < steps; i++) {
            if (!advance(slice)) break;
        }
        renderBall();
    }

    // In one player mode the CPU tracks the ball while it is coming toward it
    // and drifts back to the middle otherwise, so it waits for the return
    // instead of mirroring the ball up and down the court.
    function steerCpu() {
        list.forEach(function (paddle) {
            if (!paddle.cpu) return;
            const incoming = paddle.id === 'yuri' ? ball.vx > 0 : ball.vx < 0;
            paddle.aim(incoming && !ball.wait ? ball.y : 50);
        });
    }

    /* ------------------------------------------------------------------ */
    /*  5. Score, serve, match state                                      */
    /* ------------------------------------------------------------------ */

    const scores = { yaoi: 0, yuri: 0 };
    const scoreEls = {};
    document.querySelectorAll('[data-score]').forEach(function (el) {
        scoreEls[el.dataset.score] = el;
    });

    const messageEl = document.getElementById('pong-message');

    let started = false;   // false until the first serve is asked for
    let paused = false;
    let over = false;

    function renderScore() {
        Object.keys(scores).forEach(function (id) {
            if (scoreEls[id]) scoreEls[id].textContent = scores[id];
        });
    }

    function message(text) {
        if (!messageEl) return;
        messageEl.textContent = text || '';
        messageEl.hidden = !text;
    }

    function point(scorer) {
        scores[scorer] = (scores[scorer] || 0) + 1;
        renderScore();

        if (scores[scorer] >= WIN_SCORE) {
            over = true;
            ball.vx = 0;
            ball.vy = 0;
            ball.wait = 0;
            message(LABELS[scorer] + ' wins ' + scores.yaoi + '-' + scores.yuri +
                    '. Press space to play again');
            return;
        }

        // The player who just conceded receives the next serve.
        serve(scorer === 'yaoi' ? 'yaoi' : 'yuri');
    }

    function start() {
        if (started || over) return;
        started = true;
        message('');
    }

    function setPaused(next) {
        if (over || !started) return;
        paused = next;
        message(paused ? 'Paused. Press space to resume' : '');
    }

    function resetMatch() {
        scores.yaoi = 0;
        scores.yuri = 0;
        renderScore();
        started = false;
        over = false;
        paused = false;
        pressed.clear();
        list.forEach(function (paddle) { paddle.reset(); });
        refreshDirections();
        measureBall();
        serve();
        message(MODE_NOTES[mode] + '. Press space or tap to start');
    }

    /* ------------------------------------------------------------------ */
    /*  6. One player / two player                                        */
    /* ------------------------------------------------------------------ */

    let mode = 'two-player';

    function setMode(next) {
        mode = next === 'one-player' ? 'one-player' : 'two-player';
        // In one player mode the human keeps the left paddle and the computer
        // takes the right one.
        if (paddles.yuri) paddles.yuri.cpu = mode === 'one-player';
        window.PONG.mode = mode;

        document.querySelectorAll('[data-mode]').forEach(function (btn) {
            const active = btn.dataset.mode === mode;
            btn.classList.toggle('is-active', active);
            btn.setAttribute('aria-pressed', active);
        });

        resetMatch();
    }

    document.querySelectorAll('[data-mode]').forEach(function (btn) {
        btn.addEventListener('click', function () { setMode(btn.dataset.mode); });
    });

    /* ------------------------------------------------------------------ */
    /*  7. Loop                                                           */
    /* ------------------------------------------------------------------ */

    let last = 0;

    function frame(now) {
        // Zero on the first frame. Capped so a tab that sat hidden can't
        // teleport anything across the court, and floored at 0 because a frame
        // timestamp that went backwards would run the game in reverse.
        const dt = last ? Math.min(Math.max((now - last) / 1000, 0), 0.05) : 0;
        last = now;

        if (dt && !paused && !over) {
            steerCpu();
            list.forEach(function (paddle) { paddle.step(dt); });
            stepBall(dt);
        }
        requestAnimationFrame(frame);
    }

    /* ------------------------------------------------------------------ */
    /*  Boot                                                              */
    /* ------------------------------------------------------------------ */

    window.PONG = window.PONG || {};
    window.PONG.paddles = paddles;
    window.PONG.ball    = ball;
    window.PONG.scores  = scores;
    window.PONG.setMode = setMode;
    window.PONG.reset   = resetMatch;
    window.PONG.start   = start;
    window.PONG.pause   = setPaused;
    window.PONG.speeds  = { human: SPEED, cpu: CPU_SPEED };

    function remeasure() {
        list.forEach(function (paddle) { paddle.measure(); });
        measureBall();
        renderBall();
    }

    if ('ResizeObserver' in window) {
        new ResizeObserver(remeasure).observe(court);
    } else {
        window.addEventListener('resize', remeasure);
    }

    measureBall();
    setMode(mode);
    requestAnimationFrame(frame);

})();
