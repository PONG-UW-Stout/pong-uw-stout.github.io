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
    const ballEl = court.querySelector('.ball');
    const brickBox = document.getElementById('bricks');
    const livesEl = document.getElementById('lives');
    const messageEl = document.getElementById('breakout-message');
    if (!paddleEl || !ballEl || !brickBox) return;

    const COLS = 10;
    const ROWS = 5;

    // The wall, in % of the court. gapX/gapY are the mortar between bricks.
    const FIELD = { top: 15, left: 3, right: 97, rowHeight: 6.6, gapX: 0.7, gapY: 1.1 };

    // Top of the wall pays best, in the order the sponsor tiers are listed in
    // variables.scss. Row colours come from .brick--<name>.
    const TIERS = [
        { name: 'diamond', points: 50 },
        { name: 'platinum', points: 40 },
        { name: 'gold', points: 30 },
        { name: 'exec', points: 20 },
        { name: 'staff', points: 10 },
    ];

    // The last wall in the cycle is the club's logo, drawn rather than worked
    // out: a letterform is not a formula. '#' is a brick, '2' an armoured one
    // and '.' a gap, on a grid twice as wide as every other wall, because four
    // letters will not fit in ten bricks.
    //
    // PONG with the O knocked out for the ball-and-paddle mark, the way it sits
    // in the banner at the top of every page. The centre of the mark is the
    // armoured part, so what the logo makes its own is also what costs two hits
    // and pays double.
    //
    //      ####..###..#..#..###
    //      #..#.#.2.#.##.#.#...
    //      ####.#222#.#.##.#.##
    //      #....#.2.#.#..#.#..#
    //      #.....###..#..#..###
    const LOGO = [
        '####..###..#..#..###',
        '#..#.#.2.#.##.#.#...',
        '####.#222#.#.##.#.##',
        '#....#.2.#.#..#.#..#',
        '#.....###..#..#..###',
    ];

    // One wall per level, cycled in order, so a run of twenty-one levels is
    // twenty-one different shapes before anything repeats. `brick` returns how many hits
    // the brick at that spot takes, or 0 for a gap, so a pattern can vary shape
    // and toughness together: 2 comes out armoured and pays double.
    //
    // Two rules every pattern here keeps. It leaves at least one brick, since
    // nothing calls nextLevel but a brick breaking and an empty wall would hang
    // the level forever. And it leaves the ball a way up the court, whether
    // that is a lane through the middle, a gap at the sides or a row it can
    // clear from below, so no wall can be ground down only from the bottom.
    //
    // A wall is drawn on the ten-column grid unless it names a `cols` of its
    // own, which only the logo does.
    //
    // The first six are the ones the game shipped with and stay at the front,
    // so the early levels a player already knows are unchanged.
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
        {
            // The pyramid upside down: two bricks at the top widening to a full
            // row at the bottom, so the paying rows are the hard ones to reach.
            name: 'funnel',
            brick: function (col, row) {
                const inset = ROWS - 1 - row;
                return col >= inset && col < COLS - inset ? 1 : 0;
            },
        },
        {
            // Full across the top and bottom, pinched to a waist in the middle,
            // so the quickest way up is along the sides.
            name: 'hourglass',
            brick: function (col, row) {
                const inset = 2 - Math.abs(row - 2);
                return col >= inset && col < COLS - inset ? 1 : 0;
            },
        },
        {
            // A rhombus on the middle row. Named for the shape and not the tier,
            // so a message about the wall can't be read as one about the bricks.
            name: 'lozenge',
            brick: function (col, row) {
                return Math.abs(col - 4.5) <= 4.5 - Math.abs(row - 2) * 1.5 ? 1 : 0;
            },
        },
        {
            // A V opening upward: solid along the bottom, open in the middle at
            // the top, which is a clear shot at the diamond row for anyone who
            // can thread it.
            name: 'chevron',
            brick: function (col, row) {
                return Math.abs(col - 4.5) + 0.5 >= 4 - row ? 1 : 0;
            },
        },
        {
            // Steps down to the right, leaving the left of the court open all
            // the way to the top row.
            name: 'staircase',
            brick: function (col, row) { return col >= row * 2 ? 1 : 0; },
        },
        {
            // Full rows for rungs with a rail down each side, so the gaps are
            // boxed in rather than open to the walls.
            name: 'ladder',
            brick: function (col, row) {
                return row % 2 === 0 || col === 0 || col === COLS - 1 ? 1 : 0;
            },
        },
        {
            // The ladder with posts through the gaps, which breaks the long
            // horizontal runs the ball can otherwise rattle along.
            name: 'lattice',
            brick: function (col, row) {
                return row % 2 === 0 || col % 3 === 0 ? 1 : 0;
            },
        },
        {
            // Three full rows with nothing between them. The most open wall
            // here, and the one where a loose ball travels furthest.
            name: 'shelves',
            brick: function (col, row) { return row % 2 === 0 ? 1 : 0; },
        },
        {
            // Two blocks with a two-column lane between them, straight up the
            // middle of the court.
            name: 'canyon',
            brick: function (col) { return col < 4 || col > 5 ? 1 : 0; },
        },
        {
            // Diagonals running the other way to zigzag, and the thinnest wall
            // of the twenty: a quick level between two heavy ones.
            name: 'stripes',
            brick: function (col, row) { return (col + row) % 3 === 0 ? 1 : 0; },
        },
        {
            // Armour down the outside columns, where a ball coming off the wall
            // meets it at the worst angle for getting two hits in.
            name: 'steel rails',
            brick: function (col) { return col === 0 || col === COLS - 1 ? 2 : 1; },
        },
        {
            // A soft shell around an armoured core, so the middle of the wall
            // costs twice what the edges do.
            name: 'strongroom',
            brick: function (col, row) {
                return row > 0 && row < 4 && col > 2 && col < 7 ? 2 : 1;
            },
        },
        {
            // Every other brick armoured, across a full wall. The longest level
            // in the cycle and the best paying.
            name: 'chainmail',
            brick: function (col, row) { return (col + row) % 2 === 0 ? 2 : 1; },
        },
        {
            // Armoured spikes standing on a solid base. Clearing the base is
            // easy and leaves four tough columns with open court around them.
            name: 'crown',
            brick: function (col, row) {
                return row >= 3 ? 1 : (col % 3 === 0 ? 2 : 0);
            },
        },
        {
            name: 'logo',
            cols: LOGO[0].length,
            brick: function (col, row) {
                const line = LOGO[row];
                if (!line) return 0;
                // charAt past the end gives '', which is a gap and not a
                // brick. '#' is not a number either, so anything that isn't a
                // digit but is something reads as one hit.
                const cell = line.charAt(col);
                if (cell === '' || cell === '.') return 0;
                return Number(cell) || 1;
            },
        },
    ];

    const MODES = {
        classic: { lives: 3, speed: 0.90, paddle: 16 },
        casual: { lives: 5, speed: 0.72, paddle: 22 },
    };

    // What the leaderboard calls each mode, since a casual run and a classic
    // run keep separate tables and the table has to say which one it is.
    const MODE_LABELS = { classic: 'Classic', casual: 'Casual' };

    const PADDLE_SPEED = 85;    // % of court width per second
    const MAX_ANGLE = 62;    // degrees off vertical the paddle can throw the ball
    const LAUNCH_SPREAD = 25;    // degrees off vertical a launch can start at
    const BRICK_SPEEDUP = 1.015; // per brick broken
    const LEVEL_SPEEDUP = 1.08;  // per wall cleared
    const MAX_SPEED = 1.9;
    const SUBSTEP = 0.9;   // max % the ball may move per collision step
    const DEG = Math.PI / 180;

    let mode = 'classic';
    let cfg = MODES[mode];
    let score = 0;
    let lives = cfg.lives;
    let level = 1;
    let paused = false;
    let over = false;

    // The local top-score table under the court, mounted at the bottom of this
    // file. Null if leaderboard.js didn't load, which the game plays on without.
    let records = null;

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

    // Widen and shrink capsules move the paddle along these steps rather than
    // multiplying its width each time, so a run of capsules can't shrink it to
    // nothing or grow it wider than the court. 0 is the width the mode asked
    // for; the step resets with every new wall.
    const WIDTH_STEPS = [0.62, 0.8, 1, 1.3, 1.6];
    const WIDTH_BASE = 2;   // index of the untouched width
    let widthStep = WIDTH_BASE;

    // Vertical placement comes from CSS, so read it back instead of keeping a
    // second copy of the numbers here. The width can't be read back: .paddle
    // animates it over 0.15s, so offsetWidth straight after applyPaddleWidth
    // writes it still reports the width the paddle is leaving. Measured there,
    // a widened paddle would go on blocking at its old size and the ball would
    // pass clean through the ends the player can see. The game writes that
    // width itself, so work it out from the same numbers instead.
    function measurePaddle() {
        const height = court.clientHeight;
        if (!court.clientWidth || !height) return;
        paddle.halfW = (cfg.paddle * WIDTH_STEPS[widthStep]) / 2;
        paddle.top = (paddleEl.offsetTop / height) * 100;
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

    // The mode's width times the current step, written to the element to draw
    // it and worked out again by measurePaddle() for the collision box, since
    // the element is mid-transition at this point and can't be asked.
    function applyPaddleWidth() {
        paddleEl.style.width = (cfg.paddle * WIDTH_STEPS[widthStep]).toFixed(3) + '%';
        paddleEl.classList.toggle('is-wide', widthStep > WIDTH_BASE);
        paddleEl.classList.toggle('is-narrow', widthStep < WIDTH_BASE);
        measurePaddle();
        renderPaddle();
        if (held) stickBall(held);
    }

    function resizePaddle(delta) {
        const next = Math.min(Math.max(widthStep + delta, 0), WIDTH_STEPS.length - 1);
        if (next === widthStep) return;
        widthStep = next;
        applyPaddleWidth();
    }

    function stepPaddle(dt) {
        if (!paddle.dir) return;
        paddle.x += paddle.dir * PADDLE_SPEED * dt;
        clampPaddle();
        renderPaddle();
        if (held) stickBall(held);
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
        // Every wall but the logo is drawn on the shared ten-column grid. The
        // bricks get narrower as the count goes up; the rows don't move, so a
        // wider wall is no taller and still clears the paddle by the same gap.
        const cols = wall.cols || COLS;
        const colWidth = (FIELD.right - FIELD.left) / cols;
        const width = colWidth - FIELD.gapX;
        const height = FIELD.rowHeight - FIELD.gapY;

        for (let row = 0; row < ROWS; row++) {
            const tier = TIERS[row % TIERS.length];
            for (let col = 0; col < cols; col++) {
                const hits = wall.brick(col, row);
                if (!hits) continue;

                const left = FIELD.left + col * colWidth;
                const top = FIELD.top + row * FIELD.rowHeight;

                const el = document.createElement('div');
                el.className = 'brick brick--' + tier.name + (hits > 1 ? ' brick--tough' : '');
                el.style.left = left.toFixed(3) + '%';
                el.style.top = top.toFixed(3) + '%';
                el.style.width = width.toFixed(3) + '%';
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

    // Every hit speeds that ball up, but only the last one scores. An armoured
    // brick pays double, since it cost two hits to get there.
    function hitBrick(brick, ball) {
        scaleBall(ball, BRICK_SPEEDUP);
        brick.hits--;

        if (brick.hits > 0) {
            brick.el.classList.add('is-cracked');
            return;
        }

        brick.alive = false;
        brick.el.classList.add('is-broken');
        brick.el.classList.remove('is-cracked');

        standing--;
        score += brick.points * level * (brick.tough ? 2 : 1);
        renderScore();

        if (!standing) nextLevel();
        else maybeDrop(brick);
    }

    /* ------------------------------------------------------------------ */
    /*  3. Balls                                                          */
    /* ------------------------------------------------------------------ */

    // Every ball is the same size, and all of them share the court's aspect
    // ratio, so those live here rather than once per ball. serveSpeed is the
    // speed a fresh ball launches at on the current level.
    let aspect = 1.5;   // court width / height, per the CSS aspect-ratio
    let ballHalfW = 1.25;  // in % of the court's width
    let ballHalfH = 2.5;   // in % of the court's height
    let serveSpeed = 0.9;   // court heights per second

    const MAX_BALLS = 8;
    const EXTRA_BALLS = 3;   // what a three-ball capsule adds
    const SPLIT_SPREAD = 36;  // degrees between the balls a capsule spawns
    const SPLIT_SKEW = 6;   // nudge off centre, so none of them goes dead vertical

    const balls = [];

    // The ball parked on the paddle waiting to be launched, or null while the
    // rally is live. Nothing else is ever on the court beside it, since every
    // path to a parked ball clears the balls and the capsules both.
    let held = null;

    // The ball in the markup is the template every other ball is cloned from,
    // and also doubles as ball one, so the court is never empty of a .ball to
    // measure. Elements are pooled: a lost ball hands its element back rather
    // than churning the DOM on every multiball.
    const pool = [ballEl];
    ballEl.dataset.idle = 'true';

    function takeEl() {
        for (let i = 0; i < pool.length; i++) {
            if (pool[i].dataset.idle === 'true') {
                pool[i].dataset.idle = 'false';
                pool[i].style.display = '';
                return pool[i];
            }
        }
        const el = ballEl.cloneNode(false);
        el.dataset.idle = 'false';
        court.appendChild(el);
        pool.push(el);
        return el;
    }

    function freeEl(el) {
        el.dataset.idle = 'true';
        el.style.display = 'none';
    }

    // Skips a hidden element: its size reads as zero, and keeping the last
    // known figures beats measuring the ball as a point.
    function measureBall() {
        const width = court.clientWidth;
        const height = court.clientHeight;
        if (!width || !height || !ballEl.offsetWidth) return;
        aspect = width / height;
        ballHalfW = (ballEl.offsetWidth / width) * 50;
        ballHalfH = (ballEl.offsetHeight / height) * 50;
    }

    function addBall(x, y, vx, vy) {
        if (balls.length >= MAX_BALLS) return null;
        const ball = { el: takeEl(), alive: true, x: x, y: y, vx: vx, vy: vy };
        balls.push(ball);
        renderBall(ball);
        return ball;
    }

    function dropBall(ball) {
        ball.alive = false;
        const at = balls.indexOf(ball);
        if (at !== -1) balls.splice(at, 1);
        if (held === ball) held = null;
        freeEl(ball.el);
    }

    function clearBalls() {
        while (balls.length) dropBall(balls[balls.length - 1]);
    }

    function renderBall(ball) {
        ball.el.style.left = ball.x.toFixed(3) + '%';
        ball.el.style.top = ball.y.toFixed(3) + '%';
    }

    function scaleBall(ball, factor) {
        const speed = Math.hypot(ball.vx, ball.vy);
        if (!speed) return;
        const capped = Math.min(speed * factor, MAX_SPEED) / speed;
        ball.vx *= capped;
        ball.vy *= capped;
    }

    // Park a ball on the paddle until the player launches it.
    function stickBall(ball) {
        ball.vx = 0;
        ball.vy = 0;
        ball.x = paddle.x;
        ball.y = paddle.top - ballHalfH;
        renderBall(ball);
    }

    // Clear the court of balls and set one back on the paddle.
    function serve() {
        clearBalls();
        // Take the ball before measuring: an element handed back to the pool is
        // display:none and would measure as a point.
        held = addBall(paddle.x, paddle.top, 0, 0);
        measureBall();
        if (held) stickBall(held);
    }

    function launch() {
        if (over || paused || !held) return;
        const ball = held;
        held = null;
        const angle = (Math.random() * 2 - 1) * LAUNCH_SPREAD * DEG;
        ball.vx = Math.sin(angle) * serveSpeed;
        ball.vy = -Math.cos(angle) * serveSpeed;
        message('');
    }

    // A three-ball capsule splits the whole rally, not one ball of it: every
    // ball in play fans new balls out of its own position, so they arrive
    // somewhere the player is looking and a busy court pays better than a bare
    // one. Each clutch matches the pace of the ball it came from but is aimed
    // upward rather than along it, so a ball on its way down can't spray three
    // more after itself. MAX_BALLS caps the total, and sources is a snapshot so
    // the balls this capsule spawns don't go on to split in turn. A ball still
    // parked on the paddle is no source: splitting it would send live balls
    // into a wall the player hasn't launched at yet.
    function splitBalls(count) {
        const sources = balls.filter(function (b) { return b !== held; });

        for (let s = 0; s < sources.length; s++) {
            const source = sources[s];
            const speed = Math.hypot(source.vx, source.vy) || serveSpeed;

            for (let i = 0; i < count; i++) {
                const angle = ((i - (count - 1) / 2) * SPLIT_SPREAD + SPLIT_SKEW) * DEG;
                // Null once the court is full; nothing left for later sources.
                if (!addBall(source.x, source.y, Math.sin(angle) * speed, -Math.cos(angle) * speed)) return;
            }
        }
    }

    // Classic Breakout control: where the ball met the paddle decides the angle
    // it leaves at, not the angle it arrived at. Capping that at MAX_ANGLE off
    // vertical keeps some upward speed in reserve too, so the ball can't settle
    // into a flat rally along the walls that no one can win.
    function hitPaddle(ball) {
        if (ball.vy <= 0) return false;
        if (ball.y + ballHalfH < paddle.top) return false;
        if (ball.y - ballHalfH > paddle.bottom) return false;
        if (ball.x + ballHalfW < paddle.x - paddle.halfW) return false;
        if (ball.x - ballHalfW > paddle.x + paddle.halfW) return false;

        const offset = Math.min(Math.max((ball.x - paddle.x) / paddle.halfW, -1), 1);
        const angle = offset * MAX_ANGLE * DEG;
        const speed = Math.hypot(ball.vx, ball.vy) || serveSpeed;

        ball.vx = Math.sin(angle) * speed;
        ball.vy = -Math.cos(angle) * speed;
        ball.y = paddle.top - ballHalfH;
        return true;
    }

    function hitBricks(ball) {
        for (let i = 0; i < bricks.length; i++) {
            const brick = bricks[i];
            if (!brick.alive) continue;
            if (ball.x + ballHalfW < brick.left || ball.x - ballHalfW > brick.right) continue;
            if (ball.y + ballHalfH < brick.top || ball.y - ballHalfH > brick.bottom) continue;

            // Bounce off whichever face the ball is least far through. The two
            // axes are measured in different units (% of width vs % of height),
            // so scale x by the aspect ratio before comparing them.
            const intoLeft = (ball.x + ballHalfW) - brick.left;
            const intoRight = brick.right - (ball.x - ballHalfW);
            const intoTop = (ball.y + ballHalfH) - brick.top;
            const intoBottom = brick.bottom - (ball.y - ballHalfH);
            const acrossX = Math.min(intoLeft, intoRight) * aspect;
            const acrossY = Math.min(intoTop, intoBottom);

            if (acrossX < acrossY) {
                ball.vx = intoLeft < intoRight ? -Math.abs(ball.vx) : Math.abs(ball.vx);
            } else {
                ball.vy = intoTop < intoBottom ? -Math.abs(ball.vy) : Math.abs(ball.vy);
            }

            hitBrick(brick, ball);
            return true;
        }
        return false;
    }

    // Move one ball and resolve what it ran into. Returns false when this ball
    // has nothing more to do this frame, so the caller stops stepping it.
    function advance(ball, dt) {
        ball.x += ball.vx * dt * (100 / aspect);
        ball.y += ball.vy * dt * 100;

        if (ball.x - ballHalfW < 0) {
            ball.x = ballHalfW;
            ball.vx = Math.abs(ball.vx);
        } else if (ball.x + ballHalfW > 100) {
            ball.x = 100 - ballHalfW;
            ball.vx = -Math.abs(ball.vx);
        }
        if (ball.y - ballHalfH < 0) {
            ball.y = ballHalfH;
            ball.vy = Math.abs(ball.vy);
        }

        // Out of play. The life only goes when the last ball goes, so a
        // multiball rally can afford to lose most of itself.
        if (ball.y - ballHalfH > 100) {
            dropBall(ball);
            if (!balls.length) loseLife();
            return false;
        }

        if (!hitPaddle(ball)) hitBricks(ball);
        // hitBricks can clear the wall, which serves a fresh ball and retires
        // this one; alive says whether it is still ours to move.
        return ball.alive && ball !== held && !over;
    }

    function stepBall(ball, dt) {
        // Split fast frames up. The paddle is 2.5% of the court tall, so one big
        // step could put the ball past it without ever overlapping.
        const alongX = Math.abs(ball.vx) * dt * (100 / aspect);
        const alongY = Math.abs(ball.vy) * dt * 100;
        const steps = Math.max(1, Math.ceil(Math.max(alongX, alongY) / SUBSTEP));
        const slice = dt / steps;
        for (let i = 0; i < steps; i++) {
            if (!advance(ball, slice)) break;
        }
        if (ball.alive) renderBall(ball);
    }

    function stepBalls(dt) {
        // A copy, because a brick break can clear the wall and rebuild the list
        // part way through.
        const inPlay = balls.slice();
        for (let i = 0; i < inPlay.length; i++) {
            const ball = inPlay[i];
            if (!ball.alive || ball === held) continue;
            stepBall(ball, dt);
        }
    }

    /* ------------------------------------------------------------------ */
    /*  4. Capsules                                                       */
    /* ------------------------------------------------------------------ */

    // What a broken brick might leave behind. A capsule falls straight down
    // from where its brick stood and only counts if the paddle runs into it, so
    // a drop is an offer and not a reward. Weights are relative rather than
    // percentages: pickDrop sums them, so adding a kind here needs no other
    // number changed. The extra life is the one worth chasing, hence the gap.
    const DROP_CHANCE = 0.2;
    const DROPS = [
        { name: 'multi', weight: 26, glyph: '3' },
        { name: 'widen', weight: 26, glyph: 'W' },
        { name: 'shrink', weight: 26, glyph: 'S' },
        { name: 'life', weight: 5, glyph: '+' },
    ];

    // Half extents in % of the court, matching .capsule in the stylesheet, and
    // a fall speed in % of the court's height per second.
    const CAPSULE = { halfW: 2.2, halfH: 2.6, speed: 30 };

    const DROP_TOTAL = DROPS.reduce(function (sum, drop) { return sum + drop.weight; }, 0);

    function pickDrop() {
        let roll = Math.random() * DROP_TOTAL;
        for (let i = 0; i < DROPS.length; i++) {
            roll -= DROPS[i].weight;
            if (roll < 0) return DROPS[i];
        }
        return DROPS[0];
    }

    const capsules = [];

    function maybeDrop(brick) {
        if (Math.random() >= DROP_CHANCE) return;
        const drop = pickDrop();

        const el = document.createElement('div');
        el.className = 'capsule capsule--' + drop.name;
        el.textContent = drop.glyph;

        const capsule = {
            el: el,
            kind: drop.name,
            x: (brick.left + brick.right) / 2,
            y: (brick.top + brick.bottom) / 2,
        };
        el.style.left = capsule.x.toFixed(3) + '%';
        el.style.top = capsule.y.toFixed(3) + '%';
        court.appendChild(el);
        capsules.push(capsule);
    }

    function clearCapsules() {
        while (capsules.length) capsules.pop().el.remove();
    }

    // Every path to a parked ball clears the court first, so a capsule only
    // ever falls mid-rally and there is always something for it to act on.
    function stepCapsules(dt) {
        for (let i = capsules.length - 1; i >= 0; i--) {
            const capsule = capsules[i];
            capsule.y += CAPSULE.speed * dt;

            const caught = capsule.y + CAPSULE.halfH >= paddle.top &&
                capsule.y - CAPSULE.halfH <= paddle.bottom &&
                Math.abs(capsule.x - paddle.x) <= paddle.halfW + CAPSULE.halfW;

            if (caught || capsule.y - CAPSULE.halfH > 100) {
                capsule.el.remove();
                capsules.splice(i, 1);
                if (caught) collect(capsule.kind);
                continue;
            }
            capsule.el.style.top = capsule.y.toFixed(3) + '%';
        }
    }

    function collect(kind) {
        if (kind === 'multi') {
            splitBalls(EXTRA_BALLS);
        } else if (kind === 'widen') {
            resizePaddle(1);
        } else if (kind === 'shrink') {
            resizePaddle(-1);
        } else if (kind === 'life') {
            lives++;
            renderLives();
        }
    }

    /* ------------------------------------------------------------------ */
    /*  5. Score, lives, match state                                      */
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

    // A death takes the whole court with it. Anything still falling was dropped
    // by the rally that just ended, and a capsule caught while the next ball is
    // parked would land its effect before the player had even launched.
    function loseLife() {
        lives--;
        renderLives();
        clearCapsules();
        if (lives <= 0) {
            over = true;
            clearBalls();
            const place = records ? records.submit(score) : 0;
            message('Game over. ' + score + ' points' +
                (place ? ', your number ' + place : '') +
                '. Press space to play again');
            return;
        }
        serve();
        message('Press space to launch');
    }

    // A new wall is a clean slate: the paddle goes back to the width the mode
    // asked for, and anything still falling belonged to the wall that just went.
    function nextLevel() {
        level++;
        serveSpeed = Math.min(serveSpeed * LEVEL_SPEEDUP, MAX_SPEED);
        widthStep = WIDTH_BASE;
        applyPaddleWidth();
        clearCapsules();
        buildBricks();
        serve();
        message('Wall ' + level + ': ' + currentWall().name + '. Press space to launch');
    }

    function setPaused(next) {
        if (over || held) return;
        paused = next;
        message(paused ? 'Paused. Press space to resume' : '');
    }

    function resetGame() {
        score = 0;
        level = 1;
        lives = cfg.lives;
        serveSpeed = cfg.speed;
        over = false;
        paused = false;
        paddle.dir = 0;
        pressed.clear();
        paddle.x = 50;
        widthStep = WIDTH_BASE;
        applyPaddleWidth();
        clearCapsules();
        buildBricks();
        renderScore();
        renderLives();
        serve();
        message('Press space to launch');
    }

    /* ------------------------------------------------------------------ */
    /*  6. Controls                                                       */
    /* ------------------------------------------------------------------ */

    const LEFT_KEYS = ['arrowleft', 'a'];
    const RIGHT_KEYS = ['arrowright', 'd'];
    const SCROLL_KEYS = ['arrowleft', 'arrowright'];

    const pressed = new Set();

    function refreshDirection() {
        const left = LEFT_KEYS.some(function (k) { return pressed.has(k); }) ? 1 : 0;
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
            else if (held) launch();
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
        if (held) stickBall(held);
    }

    court.addEventListener('pointerdown', function (e) {
        dragId = e.pointerId;
        if (court.setPointerCapture) court.setPointerCapture(e.pointerId);
        paddleFromX(e.clientX);
        // A tap is the touch equivalent of space: restart, or serve.
        if (over) resetGame();
        else if (held) launch();
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
    /*  7. Modes                                                          */
    /* ------------------------------------------------------------------ */

    function setMode(next) {
        mode = MODES[next] ? next : 'classic';
        cfg = MODES[mode];
        window.BREAKOUT.mode = mode;

        document.querySelectorAll('[data-mode]').forEach(function (btn) {
            const active = btn.dataset.mode === mode;
            btn.classList.toggle('is-active', active);
            btn.setAttribute('aria-pressed', active);
        });

        // resetGame writes the paddle width the new mode asked for.
        resetGame();
        if (records) records.refresh();
    }

    document.querySelectorAll('[data-mode]').forEach(function (btn) {
        btn.addEventListener('click', function () { setMode(btn.dataset.mode); });
    });

    /* ------------------------------------------------------------------ */
    /*  8. Loop                                                           */
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
            stepCapsules(dt);
            stepBalls(dt);
        }
        requestAnimationFrame(frame);
    }

    /* ------------------------------------------------------------------ */
    /*  Boot                                                              */
    /* ------------------------------------------------------------------ */

    window.BREAKOUT = {
        balls: balls,
        capsules: capsules,
        paddle: paddle,
        bricks: bricks,
        setMode: setMode,
        reset: resetGame,
        pause: setPaused,
        launch: launch,
        skip: nextLevel,
        wall: currentWall,
        split: splitBalls,
        resize: resizePaddle,
        drops: DROPS,
        collect: collect,
        state: function () {
            return {
                score: score,
                lives: lives,
                level: level,
                standing: standing,
                balls: balls.length,
                capsules: capsules.length,
                width: WIDTH_STEPS[widthStep],
                over: over,
            };
        },
    };

    function remeasure() {
        measurePaddle();
        renderPaddle();
        measureBall();
        if (held) stickBall(held);
    }

    if ('ResizeObserver' in window) {
        new ResizeObserver(remeasure).observe(court);
    } else {
        window.addEventListener('resize', remeasure);
    }

    if (window.PONG_SCORES) {
        records = window.PONG_SCORES.mount({
            game: 'breakout',
            el: document.getElementById('breakout-scores'),
            variant: function () {
                return { key: mode, label: MODE_LABELS[mode] || mode };
            },
        });
    }

    setMode(mode);
    requestAnimationFrame(frame);

})();
