// ===========================================================================
//  Breakout.
//  Loaded by _games/breakout.html, so it only runs on /games/breakout/.
//
//  Same coordinate system as the Pong page: positions are percentages of the
//  court, x of its width and y of its height, while ball velocity is in court
//  heights per second and converted to those percentages when the ball moves.
//  On a 3:2 court, raw percentages on both axes would make horizontal motion
//  look faster than vertical.
//
//  The brick grid lives here, not in the stylesheet: collision needs every
//  brick's box anyway, so this file owns the geometry and writes each brick's
//  position inline. _sass/pong/games/breakout.scss only colours them.
// ===========================================================================

(function () {
    'use strict';

    const court = document.querySelector('.court');
    if (!court) return;

    const paddleEl = document.getElementById('paddle');
    const ballEl   = court.querySelector('.ball');
    const brickBox = document.getElementById('bricks');
    const livesEl  = document.getElementById('lives');
    const messageEl = document.getElementById('breakout-message');
    if (!paddleEl || !ballEl || !brickBox) return;

    const COLS = 10;
    const ROWS = 5;

    // The wall, in % of the court. gapX/gapY are the mortar between bricks.
    const FIELD = { top: 15, left: 3, right: 97, rowHeight: 6.6, gapX: 0.7, gapY: 1.1 };

    // Top of the wall pays best, in the order the sponsor tiers are listed in
    // variables.scss. Row colours come from .brick--<name>.
    const TIERS = [
        { name: 'diamond',  points: 50 },
        { name: 'platinum', points: 40 },
        { name: 'gold',     points: 30 },
        { name: 'exec',     points: 20 },
        { name: 'staff',    points: 10 },
    ];

    // One wall per level, cycled in order. `brick` returns how many hits the
    // brick at that spot takes, or 0 for a gap, so a pattern can vary shape and
    // toughness together. Shapes are built to leave the ball somewhere to go:
    // none of them seals the court off across its full width.
    const WALLS = [
        {
            name: 'full wall',
            brick: function () { return 1; },
        },
        {
            name: 'checkers',
            brick: function (col, row) { return (col + row) % 2 === 0 ? 1 : 0; },
        },
        {
            // Widest along the top, narrowing to a pair of bricks at the bottom.
            name: 'pyramid',
            brick: function (col, row) { return col >= row && col < COLS - row ? 1 : 0; },
        },
        {
            // Full-height columns with lanes between them for the ball to climb.
            name: 'picket',
            brick: function (col) { return col % 2 === 0 ? 1 : 0; },
        },
        {
            // The top row is armoured, so the best-paying bricks cost two hits.
            name: 'armoured',
            brick: function (col, row) { return row === 0 ? 2 : 1; },
        },
        {
            name: 'zigzag',
            brick: function (col, row) { return (col + row) % 4 < 2 ? 1 : 0; },
        },
    ];

    const MODES = {
        classic: { lives: 3, speed: 0.90, paddle: 16 },
        casual:  { lives: 5, speed: 0.72, paddle: 22 },
    };

    const PADDLE_SPEED  = 85;    // % of court width per second
    const MAX_ANGLE     = 62;    // degrees off vertical the paddle can throw the ball
    const LAUNCH_SPREAD = 25;    // degrees off vertical a launch can start at
    const BRICK_SPEEDUP = 1.015; // per brick broken
    const LEVEL_SPEEDUP = 1.08;  // per wall cleared
    const MAX_SPEED     = 1.9;
    const SUBSTEP       = 0.9;   // max % the ball may move per collision step
    const DEG = Math.PI / 180;

    let mode   = 'classic';
    let cfg    = MODES[mode];
    let score  = 0;
    let lives  = cfg.lives;
    let level  = 1;
    let stuck  = true;   // ball parked on the paddle, waiting to launch
    let paused = false;
    let over   = false;

    /* ------------------------------------------------------------------ */
    /*  1. Paddle                                                         */
    /* ------------------------------------------------------------------ */

    const paddle = {
        x: 50,        // centre, in % of the court's width
        halfW: 8,     // in % of the court's width
        top: 91,      // in % of the court's height
        bottom: 93.5,
        dir: 0,       // -1 left, 0 still, 1 right
    };

    // Width and vertical placement come from CSS, so read them back instead of
    // keeping a second copy of the numbers here.
    function measurePaddle() {
        const width  = court.clientWidth;
        const height = court.clientHeight;
        if (!width || !height) return;
        paddle.halfW  = (paddleEl.offsetWidth / width) * 50;
        paddle.top    = (paddleEl.offsetTop / height) * 100;
        paddle.bottom = paddle.top + (paddleEl.offsetHeight / height) * 100;
        clampPaddle();
    }

    function clampPaddle() {
        const limit = 100 - paddle.halfW;
        paddle.x = Math.min(Math.max(paddle.x, paddle.halfW), limit);
    }

    function renderPaddle() {
        paddleEl.style.left = paddle.x.toFixed(3) + '%';
    }

    function stepPaddle(dt) {
        if (!paddle.dir) return;
        paddle.x += paddle.dir * PADDLE_SPEED * dt;
        clampPaddle();
        renderPaddle();
        if (stuck) stickBall();
    }

    /* ------------------------------------------------------------------ */
    /*  2. Bricks                                                         */
    /* ------------------------------------------------------------------ */

    const bricks = [];
    let standing = 0;

    function currentWall() {
        return WALLS[(level - 1) % WALLS.length];
    }

    function buildBricks() {
        brickBox.textContent = '';
        bricks.length = 0;

        const wall = currentWall();
        const colWidth = (FIELD.right - FIELD.left) / COLS;
        const width  = colWidth - FIELD.gapX;
        const height = FIELD.rowHeight - FIELD.gapY;

        for (let row = 0; row < ROWS; row++) {
            const tier = TIERS[row % TIERS.length];
            for (let col = 0; col < COLS; col++) {
                const hits = wall.brick(col, row);
                if (!hits) continue;

                const left = FIELD.left + col * colWidth;
                const top  = FIELD.top + row * FIELD.rowHeight;

                const el = document.createElement('div');
                el.className = 'brick brick--' + tier.name + (hits > 1 ? ' brick--tough' : '');
                el.style.left   = left.toFixed(3) + '%';
                el.style.top    = top.toFixed(3) + '%';
                el.style.width  = width.toFixed(3) + '%';
                el.style.height = height.toFixed(3) + '%';
                brickBox.appendChild(el);

                bricks.push({
                    el: el,
                    alive: true,
                    hits: hits,
                    tough: hits > 1,
                    points: tier.points,
                    left: left,
                    right: left + width,
                    top: top,
                    bottom: top + height,
                });
            }
        }
        standing = bricks.length;
    }

    // Every hit speeds the ball up, but only the last one scores. An armoured
    // brick pays double, since it cost two hits to get there.
    function hitBrick(brick) {
        scaleBall(BRICK_SPEEDUP);
        brick.hits--;

        if (brick.hits > 0) {
            brick.el.classList.add('is-cracked');
            return;
        }



        brick.alive = false;
        brick.el.classList.add('is-broken');
        
        if (brick.el.classList.contains('is-cracked')) {
            brick.el.classList.remove('is-cracked');
        }
        
        standing--;
        score += brick.points * level * (brick.tough ? 2 : 1);
        renderScore();
        if (!standing) nextLevel();
    }

    /* ------------------------------------------------------------------ */
    /*  3. Ball                                                           */
    /* ------------------------------------------------------------------ */

    const ball = {
        x: 50,        // centre, in % of the court's width
        y: 80,        // centre, in % of the court's height
        vx: 0,        // court heights per second
        vy: 0,
        halfW: 1.25,  // in % of the court's width
        halfH: 2.5,   // in % of the court's height
        aspect: 1.5,  // court width / height, per the CSS aspect-ratio
        speed: 0.9,   // launch speed for the current level
    };

    function measureBall() {
        const width  = court.clientWidth;
        const height = court.clientHeight;
        if (!width || !height) return;
        ball.aspect = width / height;
        ball.halfW  = (ballEl.offsetWidth  / width)  * 50;
        ball.halfH  = (ballEl.offsetHeight / height) * 50;
    }

    function renderBall() {
        ballEl.style.left = ball.x.toFixed(3) + '%';
        ballEl.style.top  = ball.y.toFixed(3) + '%';
    }

    function scaleBall(factor) {
        const speed = Math.hypot(ball.vx, ball.vy);
        if (!speed) return;
        const capped = Math.min(speed * factor, MAX_SPEED) / speed;
        ball.vx *= capped;
        ball.vy *= capped;
    }

    // Park the ball on the paddle until the player launches it.
    function stickBall() {
        stuck = true;
        ball.vx = 0;
        ball.vy = 0;
        ball.x = paddle.x;
        ball.y = paddle.top - ball.halfH;
        renderBall();
    }

    function launch() {
        if (over || paused || !stuck) return;
        stuck = false;
        const angle = (Math.random() * 2 - 1) * LAUNCH_SPREAD * DEG;
        ball.vx = Math.sin(angle) * ball.speed;
        ball.vy = -Math.cos(angle) * ball.speed;
        message('');
    }

    // Classic Breakout control: where the ball met the paddle decides the angle
    // it leaves at, not the angle it arrived at. Capping that at MAX_ANGLE off
    // vertical keeps some upward speed in reserve too, so the ball can't settle
    // into a flat rally along the walls that no one can win.
    function hitPaddle() {
        if (ball.vy <= 0) return false;
        if (ball.y + ball.halfH < paddle.top) return false;
        if (ball.y - ball.halfH > paddle.bottom) return false;
        if (ball.x + ball.halfW < paddle.x - paddle.halfW) return false;
        if (ball.x - ball.halfW > paddle.x + paddle.halfW) return false;

        const offset = Math.min(Math.max((ball.x - paddle.x) / paddle.halfW, -1), 1);
        const angle = offset * MAX_ANGLE * DEG;
        const speed = Math.hypot(ball.vx, ball.vy) || ball.speed;

        ball.vx = Math.sin(angle) * speed;
        ball.vy = -Math.cos(angle) * speed;
        ball.y = paddle.top - ball.halfH;
        return true;
    }

    function hitBricks() {
        for (let i = 0; i < bricks.length; i++) {
            const brick = bricks[i];
            if (!brick.alive) continue;
            if (ball.x + ball.halfW < brick.left || ball.x - ball.halfW > brick.right) continue;
            if (ball.y + ball.halfH < brick.top || ball.y - ball.halfH > brick.bottom) continue;

            // Bounce off whichever face the ball is least far through. The two
            // axes are measured in different units (% of width vs % of height),
            // so scale x by the aspect ratio before comparing them.
            const intoLeft   = (ball.x + ball.halfW) - brick.left;
            const intoRight  = brick.right - (ball.x - ball.halfW);
            const intoTop    = (ball.y + ball.halfH) - brick.top;
            const intoBottom = brick.bottom - (ball.y - ball.halfH);
            const acrossX = Math.min(intoLeft, intoRight) * ball.aspect;
            const acrossY = Math.min(intoTop, intoBottom);

            if (acrossX < acrossY) {
                ball.vx = intoLeft < intoRight ? -Math.abs(ball.vx) : Math.abs(ball.vx);
            } else {
                ball.vy = intoTop < intoBottom ? -Math.abs(ball.vy) : Math.abs(ball.vy);
            }

            hitBrick(brick);
            return true;
        }
        return false;
    }

    // Move the ball once and resolve what it ran into. Returns false when play
    // stopped, so the caller stops stepping.
    function advance(dt) {
        ball.x += ball.vx * dt * (100 / ball.aspect);
        ball.y += ball.vy * dt * 100;

        if (ball.x - ball.halfW < 0) {
            ball.x = ball.halfW;
            ball.vx = Math.abs(ball.vx);
        } else if (ball.x + ball.halfW > 100) {
            ball.x = 100 - ball.halfW;
            ball.vx = -Math.abs(ball.vx);
        }
        if (ball.y - ball.halfH < 0) {
            ball.y = ball.halfH;
            ball.vy = Math.abs(ball.vy);
        }

        if (ball.y - ball.halfH > 100) {
            loseLife();
            return false;
        }

        if (!hitPaddle()) hitBricks();
        return !stuck && !over;
    }

    function stepBall(dt) {
        // Split fast frames up. The paddle is 2.5% of the court tall, so one big
        // step could put the ball past it without ever overlapping.
        const alongX = Math.abs(ball.vx) * dt * (100 / ball.aspect);
        const alongY = Math.abs(ball.vy) * dt * 100;
        const steps = Math.max(1, Math.ceil(Math.max(alongX, alongY) / SUBSTEP));
        const slice = dt / steps;
        for (let i = 0; i < steps; i++) {
            if (!advance(slice)) break;
        }
        renderBall();
    }

    /* ------------------------------------------------------------------ */
    /*  4. Score, lives, match state                                      */
    /* ------------------------------------------------------------------ */

    const scoreEl = document.querySelector('[data-score="points"]');

    function renderScore() {
        if (scoreEl) scoreEl.textContent = score;
    }

    // Lives are drawn as miniature paddles, so the court doesn't need a label
    // explaining what the number means.
    function renderLives() {
        if (!livesEl) return;
        livesEl.textContent = '';
        for (let i = 0; i < lives; i++) {
            const life = document.createElement('span');
            life.className = 'life';
            livesEl.appendChild(life);
        }
    }

    function message(text) {
        if (!messageEl) return;
        messageEl.textContent = text || '';
        messageEl.hidden = !text;
    }

    function loseLife() {
        lives--;
        renderLives();
        if (lives <= 0) {
            over = true;
            ball.vx = 0;
            ball.vy = 0;
            message('Game over. ' + score + ' points. Press space to play again');
            return;
        }
        stickBall();
        message('Press space to launch');
    }

    function nextLevel() {
        level++;
        ball.speed = Math.min(ball.speed * LEVEL_SPEEDUP, MAX_SPEED);
        buildBricks();
        stickBall();
        message('Wall ' + level + ': ' + currentWall().name + '. Press space to launch');
    }

    function setPaused(next) {
        if (over || stuck) return;
        paused = next;
        message(paused ? 'Paused. Press space to resume' : '');
    }

    function resetGame() {
        score = 0;
        level = 1;
        lives = cfg.lives;
        ball.speed = cfg.speed;
        over = false;
        paused = false;
        paddle.dir = 0;
        pressed.clear();
        paddle.x = 50;
        measurePaddle();
        renderPaddle();
        measureBall();
        buildBricks();
        renderScore();
        renderLives();
        stickBall();
        message('Press space to launch');
    }

    /* ------------------------------------------------------------------ */
    /*  5. Controls                                                       */
    /* ------------------------------------------------------------------ */

    const LEFT_KEYS  = ['arrowleft', 'a'];
    const RIGHT_KEYS = ['arrowright', 'd'];
    const SCROLL_KEYS = ['arrowleft', 'arrowright'];

    const pressed = new Set();

    function refreshDirection() {
        const left  = LEFT_KEYS.some(function (k) { return pressed.has(k); }) ? 1 : 0;
        const right = RIGHT_KEYS.some(function (k) { return pressed.has(k); }) ? 1 : 0;
        paddle.dir = right - left;
    }

    document.addEventListener('keydown', function (e) {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        const key = e.key.toLowerCase();

        if (key === ' ' || key === 'spacebar') {
            const tag = document.activeElement && document.activeElement.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
            e.preventDefault();
            if (e.repeat) return;
            if (over) resetGame();
            else if (stuck) launch();
            else setPaused(!paused);
            return;
        }

        if (LEFT_KEYS.indexOf(key) === -1 && RIGHT_KEYS.indexOf(key) === -1) return;
        if (SCROLL_KEYS.indexOf(key) !== -1) e.preventDefault();
        if (e.repeat) return;
        pressed.add(key);
        refreshDirection();
    });

    document.addEventListener('keyup', function (e) {
        if (!pressed.delete(e.key.toLowerCase())) return;
        refreshDirection();
    });

    // A lost window keeps no keys held down, otherwise the paddle drifts away.
    window.addEventListener('blur', function () {
        pressed.clear();
        refreshDirection();
    });

    let dragId = null;

    function paddleFromX(clientX) {
        const box = court.getBoundingClientRect();
        if (!box.width) return;
        paddle.x = ((clientX - box.left) / box.width) * 100;
        clampPaddle();
        renderPaddle();
        if (stuck) stickBall();
    }

    court.addEventListener('pointerdown', function (e) {
        dragId = e.pointerId;
        if (court.setPointerCapture) court.setPointerCapture(e.pointerId);
        paddleFromX(e.clientX);
        // A tap is the touch equivalent of space: restart, or serve.
        if (over) resetGame();
        else if (stuck) launch();
        e.preventDefault();
    });

    court.addEventListener('pointermove', function (e) {
        if (e.pointerId !== dragId) return;
        paddleFromX(e.clientX);
        e.preventDefault();
    });

    function endDrag(e) {
        if (e.pointerId === dragId) dragId = null;
    }

    court.addEventListener('pointerup', endDrag);
    court.addEventListener('pointercancel', endDrag);

    /* ------------------------------------------------------------------ */
    /*  6. Modes                                                          */
    /* ------------------------------------------------------------------ */

    function setMode(next) {
        mode = MODES[next] ? next : 'classic';
        cfg = MODES[mode];
        // The only geometry a mode changes is the paddle width. Write it to the
        // element so measurePaddle() still has a single source to read.
        paddleEl.style.width = cfg.paddle + '%';
        window.BREAKOUT.mode = mode;

        document.querySelectorAll('[data-mode]').forEach(function (btn) {
            const active = btn.dataset.mode === mode;
            btn.classList.toggle('is-active', active);
            btn.setAttribute('aria-pressed', active);
        });

        resetGame();
    }

    document.querySelectorAll('[data-mode]').forEach(function (btn) {
        btn.addEventListener('click', function () { setMode(btn.dataset.mode); });
    });

    /* ------------------------------------------------------------------ */
    /*  7. Loop                                                           */
    /* ------------------------------------------------------------------ */

    let last = 0;

    function frame(now) {
        // Zero on the first frame. Capped so a tab that sat hidden can't send
        // the ball through the wall, and floored at 0 because a frame timestamp
        // that went backwards would run the game in reverse.
        const dt = last ? Math.min(Math.max((now - last) / 1000, 0), 0.05) : 0;
        last = now;

        if (dt && !paused && !over) {
            stepPaddle(dt);
            if (!stuck) stepBall(dt);
        }
        requestAnimationFrame(frame);
    }

    /* ------------------------------------------------------------------ */
    /*  Boot                                                              */
    /* ------------------------------------------------------------------ */

    window.BREAKOUT = {
        ball: ball,
        paddle: paddle,
        bricks: bricks,
        setMode: setMode,
        reset: resetGame,
        pause: setPaused,
        launch: launch,
        skip: nextLevel,
        wall: currentWall,
        state: function () {
            return { score: score, lives: lives, level: level, standing: standing, over: over };
        },
    };

    function remeasure() {
        measurePaddle();
        renderPaddle();
        measureBall();
        if (stuck) stickBall();
    }

    if ('ResizeObserver' in window) {
        new ResizeObserver(remeasure).observe(court);
    } else {
        window.addEventListener('resize', remeasure);
    }

    setMode(mode);
    requestAnimationFrame(frame);

})();
