// ===========================================================================
//  LAN-Prix Dodger.
//  Loaded by _games/lan-prix-dodger.html, so it only runs on
//  /games/lan-prix-dodger/.
//
//  Same coordinate system as the other games in _games/: x is a percentage of
//  the road's width, y a percentage of its height. Speeds are in % of road
//  width per second, and distance travelled is measured in those same units,
//  which the scoreboard calls metres.
//
//  The road scrolls by moving the lane dashes, not the cars. The player holds a
//  fixed x and the field drifts backwards past them.
// ===========================================================================

(function () {
    'use strict';

    const court = document.querySelector('.court--road');
    if (!court) return;

    const linesEl   = document.getElementById('road-lines');
    const trafficEl = document.getElementById('traffic');
    const playerEl  = document.getElementById('player');
    const messageEl = document.getElementById('road-message');
    const distEl    = document.querySelector('[data-score="distance"]');
    const bestEl    = document.querySelector('[data-score="best"]');
    if (!linesEl || !trafficEl || !playerEl) return;

    const LANES = 4;
    const STORE_KEY = 'pong:lan-prix-dodger';

    // speed -> top is where the field starts and where it tops out; spacing ->
    // tight is how far apart the cars arrive, start of run to full pace.
    const MODES = {
        pro:    { speed: 62, top: 130, spacing: 58, tight: 40 },
        rookie: { speed: 46, top: 95,  spacing: 72, tight: 52 },
    };

    // How long the field takes to reach full difficulty, in distance units.
    const RAMP_DISTANCE = 2600;
    const PLAYER_X      = 14;   // the player's fixed place on the road, in % of width
    const LANE_SPEED    = 210;  // lane changes, in % of road height per second
    const RIVAL_MIN     = 0.25; // slowest rival, as a fraction of the player's speed
    const RIVAL_MAX     = 0.6;
    const FORGIVENESS   = 0.78; // hitboxes are smaller than the artwork's box: the
                                // car's nose and wings leave a lot of it empty

    let mode = 'pro';
    let cfg  = MODES[mode];

    let running  = false;
    let over     = false;
    let paused   = false;
    let distance = 0;
    let speed    = cfg.speed;
    let sinceSpawn = 0;
    let lastLane = -1;

    /* ------------------------------------------------------------------ */
    /*  1. Road furniture                                                 */
    /* ------------------------------------------------------------------ */

    const scrollers = [];

    // Lane count lives here, so the lines are built from it instead of being
    // kept in step by hand in the stylesheet.
    function buildRoad() {
        linesEl.textContent = '';
        scrollers.length = 0;

        ['top', 'bottom'].forEach(function (side) {
            const kerb = document.createElement('div');
            kerb.className = 'kerb kerb--' + side;
            linesEl.appendChild(kerb);
            scrollers.push(kerb);
        });

        for (let i = 1; i < LANES; i++) {
            const line = document.createElement('div');
            line.className = 'lane-line';
            line.style.top = ((i * 100) / LANES).toFixed(3) + '%';
            linesEl.appendChild(line);
            scrollers.push(line);
        }
    }

    function laneCentre(lane) {
        return (lane + 0.5) * (100 / LANES);
    }

    // The dashes are a repeating background, so scrolling them means sliding
    // that background by the distance covered, wrapped to one tile.
    function scrollRoad() {
        const width = court.clientWidth;
        if (!width) return;
        const tile = width * 0.07;   // widest background-size in the stylesheet
        const offset = ((distance / 100) * width) % tile;
        for (let i = 0; i < scrollers.length; i++) {
            scrollers[i].style.backgroundPositionX = (-offset).toFixed(2) + 'px';
        }
    }

    /* ------------------------------------------------------------------ */
    /*  2. Cars                                                           */
    /* ------------------------------------------------------------------ */

    // Every car is the same artwork at the same size, so one measurement covers
    // the player and the whole field.
    const carSize = { halfW: 8, halfH: 6 };

    function measureCars() {
        const width  = court.clientWidth;
        const height = court.clientHeight;
        if (!width || !height) return;
        carSize.halfW = (playerEl.offsetWidth / width) * 50;
        carSize.halfH = (playerEl.offsetHeight / height) * 50;
    }

    const player = { lane: 1, y: laneCentre(1) };

    function renderPlayer() {
        playerEl.style.left = PLAYER_X.toFixed(3) + '%';
        playerEl.style.top  = player.y.toFixed(3) + '%';
    }

    const rivals = [];

    function spawnRival(lane, drift) {
        const el = document.createElement('div');
        el.className = 'car car--rival';
        el.innerHTML = '<svg viewBox="0 0 260 80" aria-hidden="true" focusable="false">' +
                       '<use href="#gp-car"></use></svg>';
        trafficEl.appendChild(el);

        const rival = { el: el, lane: lane, x: 108, drift: drift };
        rival.el.style.top = laneCentre(lane).toFixed(3) + '%';
        rival.el.style.left = rival.x.toFixed(3) + '%';
        rivals.push(rival);
    }

    function clearRivals() {
        trafficEl.textContent = '';
        rivals.length = 0;
    }

    // 0 at the start of a run, 1 once the field is up to full pace.
    function difficulty() {
        return Math.min(distance / RAMP_DISTANCE, 1);
    }

    function spawn() {
        const hard = difficulty();

        let lane = Math.floor(Math.random() * LANES);
        if (lane === lastLane) lane = (lane + 1 + Math.floor(Math.random() * (LANES - 1))) % LANES;
        lastLane = lane;

        spawnRival(lane, RIVAL_MIN + Math.random() * (RIVAL_MAX - RIVAL_MIN));

        // Once the field is quick, cars start arriving two abreast. Never more
        // than two: with four lanes there is always somewhere to go.
        if (hard > 0.55 && Math.random() < 0.3 * hard) {
            const others = [];
            for (let i = 0; i < LANES; i++) {
                if (i !== lane) others.push(i);
            }
            const second = others[Math.floor(Math.random() * others.length)];
            spawnRival(second, RIVAL_MIN + Math.random() * (RIVAL_MAX - RIVAL_MIN));
        }
    }

    // Box overlap against the player's actual y, not their lane index: half way
    // through a lane change the car is in both lanes.
    function hits(rival) {
        const gapX = Math.abs(rival.x - PLAYER_X);
        if (gapX > carSize.halfW * 2 * FORGIVENESS) return false;
        const gapY = Math.abs(laneCentre(rival.lane) - player.y);
        return gapY <= carSize.halfH * 2 * FORGIVENESS;
    }

    function stepRivals(dt) {
        for (let i = rivals.length - 1; i >= 0; i--) {
            const rival = rivals[i];
            // Closing speed is the difference between the two cars, so a slow
            // car sweeps past and a quick one hangs alongside.
            rival.x -= speed * (1 - rival.drift) * dt;
            rival.el.style.left = rival.x.toFixed(3) + '%';

            if (rival.x < -25) {
                rival.el.remove();
                rivals.splice(i, 1);
                continue;
            }
            if (hits(rival)) {
                crash();
                return;
            }
        }
    }

    /* ------------------------------------------------------------------ */
    /*  3. Run state                                                      */
    /* ------------------------------------------------------------------ */

    let best = { rookie: 0, pro: 0 };

    // Guarded on both sides: private windows and blocked site data make
    // localStorage throw, and a personal best should not break the game.
    function loadBest() {
        try {
            const raw = window.localStorage.getItem(STORE_KEY);
            const saved = raw ? JSON.parse(raw) : null;
            if (saved && typeof saved === 'object') {
                best.rookie = Number(saved.rookie) || 0;
                best.pro = Number(saved.pro) || 0;
            }
        } catch (err) { /* no stored best available */ }
    }

    function saveBest() {
        try {
            window.localStorage.setItem(STORE_KEY, JSON.stringify(best));
        } catch (err) { /* the run still counts for this session */ }
    }

    function renderScore() {
        if (distEl) distEl.textContent = Math.floor(distance) + ' m';
        if (bestEl) bestEl.textContent = 'BEST ' + Math.floor(best[mode]) + ' m';
    }

    function message(text) {
        if (!messageEl) return;
        messageEl.textContent = text || '';
        messageEl.hidden = !text;
    }

    function crash() {
        running = false;
        over = true;
        court.classList.add('is-crashed');

        const run = Math.floor(distance);
        const record = run > Math.floor(best[mode]);
        if (record) {
            best[mode] = run;
            saveBest();
        }
        renderScore();
        message((record ? 'New best, ' : 'Into the wall at ') + run +
                ' m. Press space to go again');
    }

    function resetRun() {
        running = false;
        over = false;
        paused = false;
        distance = 0;
        speed = cfg.speed;
        sinceSpawn = 0;
        lastLane = -1;
        court.classList.remove('is-crashed');
        clearRivals();
        player.lane = Math.floor(LANES / 2);
        player.y = laneCentre(player.lane);
        measureCars();
        renderPlayer();
        scrollRoad();
        renderScore();
        message('Press space or tap to start');
    }

    function startRun() {
        if (running) return;
        if (over) {
            resetRun();
        }
        running = true;
        paused = false;
        message('');
    }

    function setPaused(next) {
        if (!running || over) return;
        paused = next;
        message(paused ? 'Paused. Press space to resume' : '');
    }

    /* ------------------------------------------------------------------ */
    /*  4. Controls                                                       */
    /* ------------------------------------------------------------------ */

    const UP_KEYS   = ['arrowup', 'w'];
    const DOWN_KEYS = ['arrowdown', 's'];

    function moveLane(step) {
        const next = Math.min(Math.max(player.lane + step, 0), LANES - 1);
        if (next === player.lane) return;
        player.lane = next;
    }

    document.addEventListener('keydown', function (e) {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        const key = e.key.toLowerCase();

        if (key === ' ' || key === 'spacebar') {
            const tag = document.activeElement && document.activeElement.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
            e.preventDefault();
            if (e.repeat) return;
            if (!running || over) startRun();
            else setPaused(!paused);
            return;
        }

        const up = UP_KEYS.indexOf(key) !== -1;
        const down = DOWN_KEYS.indexOf(key) !== -1;
        if (!up && !down) return;
        e.preventDefault();          // the arrows would scroll the page instead
        if (e.repeat) return;
        if (!running && !over) startRun();
        moveLane(up ? -1 : 1);
    });

    // Tap or drag to the lane you want. On a phone that reads more directly
    // than a pair of on-screen arrows.
    function laneFromClientY(clientY) {
        const box = court.getBoundingClientRect();
        if (!box.height) return null;
        const y = ((clientY - box.top) / box.height) * 100;
        return Math.min(Math.max(Math.floor((y / 100) * LANES), 0), LANES - 1);
    }

    let dragId = null;

    court.addEventListener('pointerdown', function (e) {
        dragId = e.pointerId;
        const lane = laneFromClientY(e.clientY);
        if (lane !== null) player.lane = lane;
        if (!running || over) startRun();
        if (court.setPointerCapture) court.setPointerCapture(e.pointerId);
        e.preventDefault();
    });

    court.addEventListener('pointermove', function (e) {
        if (e.pointerId !== dragId) return;
        const lane = laneFromClientY(e.clientY);
        if (lane !== null) player.lane = lane;
    });

    function endDrag(e) {
        if (e.pointerId === dragId) dragId = null;
    }

    court.addEventListener('pointerup', endDrag);
    court.addEventListener('pointercancel', endDrag);

    /* ------------------------------------------------------------------ */
    /*  5. Modes                                                          */
    /* ------------------------------------------------------------------ */

    function setMode(next) {
        mode = MODES[next] ? next : 'pro';
        cfg = MODES[mode];
        window.LAN_PRIX_DODGER.mode = mode;

        document.querySelectorAll('[data-mode]').forEach(function (btn) {
            const active = btn.dataset.mode === mode;
            btn.classList.toggle('is-active', active);
            btn.setAttribute('aria-pressed', active);
        });

        resetRun();
    }

    document.querySelectorAll('[data-mode]').forEach(function (btn) {
        btn.addEventListener('click', function () { setMode(btn.dataset.mode); });
    });

    /* ------------------------------------------------------------------ */
    /*  6. Loop                                                           */
    /* ------------------------------------------------------------------ */

    let last = 0;

    function frame(now) {
        // Zero on the first frame. Capped so a tab that sat hidden can't drive
        // the player straight through a car, and floored at 0 because a frame
        // timestamp that went backwards would run the game in reverse.
        const dt = last ? Math.min(Math.max((now - last) / 1000, 0), 0.05) : 0;
        last = now;

        if (dt) {
            // Lane changes are eased even when the run is stopped, so the car
            // still slides into place on the grid.
            const target = laneCentre(player.lane);
            const gap = target - player.y;
            if (gap) {
                const travel = Math.min(LANE_SPEED * dt, Math.abs(gap));
                player.y += gap > 0 ? travel : -travel;
                renderPlayer();
            }
        }

        if (dt && running && !paused && !over) {
            speed = cfg.speed + (cfg.top - cfg.speed) * difficulty();
            distance += speed * dt;
            sinceSpawn += speed * dt;

            const spacing = cfg.spacing - (cfg.spacing - cfg.tight) * difficulty();
            if (sinceSpawn >= spacing) {
                sinceSpawn = 0;
                spawn();
            }

            stepRivals(dt);
            scrollRoad();
            renderScore();
        }

        requestAnimationFrame(frame);
    }

    /* ------------------------------------------------------------------ */
    /*  Boot                                                              */
    /* ------------------------------------------------------------------ */

    window.LAN_PRIX_DODGER = {
        player: player,
        rivals: rivals,
        setMode: setMode,
        start: startRun,
        reset: resetRun,
        pause: setPaused,
        lane: moveLane,
        state: function () {
            return {
                mode: mode, running: running, over: over, paused: paused,
                distance: distance, speed: speed, cars: rivals.length,
                best: best[mode], lanes: LANES,
            };
        },
    };

    function remeasure() {
        measureCars();
        renderPlayer();
        scrollRoad();
    }

    if ('ResizeObserver' in window) {
        new ResizeObserver(remeasure).observe(court);
    } else {
        window.addEventListener('resize', remeasure);
    }

    loadBest();
    buildRoad();
    setMode(mode);
    requestAnimationFrame(frame);

})();
