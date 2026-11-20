(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /*  1. Dial-up intro                                                    */
  /* ------------------------------------------------------------------ */

  var MODEM_LOG = [
    { at: 0,    text: 'ATZ' },
    { at: 300,  text: 'OK' },
    { at: 520,  text: 'ATDT18007664526' },
    { at: 900,  text: 'RINGING...' },
    { at: 1500, text: 'CARRIER 56000' },
    { at: 1850, text: 'PROTOCOL: LAP-M' },
    { at: 2150, text: 'COMPRESSION: V.42BIS' },
    { at: 2500, text: 'CONNECT 56000/ARQ/V90/LAPM/V42BIS' },
    { at: 2900, text: 'Verifying username and password...' },
    { at: 3350, text: 'Logged in to PONGNET.' },
    { at: 3650, text: 'Resolving www.ponglan.net ...' },
    { at: 3900, text: 'GET /lans/LAN-iversary/ HTTP/1.0' },
    { at: 4150, text: '200 OK  (14.4 KB, est. 8 sec)' }
  ];

  var DIAL_TOTAL = 4500;

  var SVG_NS = 'http://www.w3.org/2000/svg';

  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function spriteIcon(ref, className) {
    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('class', className || 'y2k-icon');
    svg.setAttribute('viewBox', '0 0 32 32');
    svg.setAttribute('aria-hidden', 'true');
    var use = document.createElementNS(SVG_NS, 'use');
    use.setAttribute('href', ref);
    svg.appendChild(use);
    return svg;
  }

  var ANIM_COOKIE = 'lan-iversary-anim';
  var ANIM_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // one year

  // The inline script in _lans/LAN-iversary.md reads this cookie before first
  // paint. Keep the names in sync.
  function introAlreadySeen() {
    return new RegExp('(?:^|;\\s*)' + ANIM_COOKIE + '=1(?:;|$)').test(document.cookie);
  }

  function rememberIntroSeen() {
    document.cookie =
      ANIM_COOKIE + '=1; path=/; max-age=' + ANIM_COOKIE_MAX_AGE + '; SameSite=Lax';
  }

  function revealHero() {
    var hero = document.querySelector('.y2k-hero-content');
    if (hero) hero.classList.remove('is-pending');
  }

  function dismissDialup(dialog) {
    if (!dialog) return;
    document.body.style.overflow = '';
    dialog.classList.add('is-done');
    revealHero();
    window.setTimeout(throwConfetti, 420);
    window.setTimeout(function () {
      if (dialog.parentNode) dialog.parentNode.removeChild(dialog);
    }, 700);
  }

  function runDialup() {
    var dialog = document.getElementById('y2k-dialup');
    if (!dialog) { revealHero(); return; }

    var log  = document.getElementById('y2k-dial-log');
    var bar  = document.getElementById('y2k-dial-bar');
    var head = document.getElementById('y2k-dial-head');
    var sub  = document.getElementById('y2k-dial-sub');
    var ok   = document.getElementById('y2k-dial-ok');
    var skip = document.getElementById('y2k-dial-skip');

    var timers = [];
    var finished = false;

    function clearTimers() {
      timers.forEach(window.clearTimeout);
      timers = [];
    }

    function finish() {
      if (finished) return;
      finished = true;
      clearTimers();
      if (bar) bar.style.width = '100%';
      if (head) head.textContent = 'Connected at 56.6 Kbps';
      if (sub) sub.textContent = 'You may now pick up the phone.';
      if (ok) {
        ok.disabled = false;
        ok.focus();
      }
      timers.push(window.setTimeout(function () { dismissDialup(dialog); }, 900));
    }

    if (skip) {
      skip.addEventListener('click', function () {
        clearTimers();
        finished = true;
        dismissDialup(dialog);
      });
    }
    if (ok) {
      ok.addEventListener('click', function () { dismissDialup(dialog); });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && dialog.parentNode) {
        clearTimers();
        finished = true;
        dismissDialup(dialog);
      }
    });

    // Under reduced motion the log is written all at once.
    if (prefersReducedMotion()) {
      if (log) {
        log.textContent = MODEM_LOG.map(function (l) { return l.text; }).join('\n');
      }
      finish();
      return;
    }

    document.body.style.overflow = 'hidden';

    MODEM_LOG.forEach(function (line) {
      timers.push(window.setTimeout(function () {
        if (!log) return;
        log.textContent += (log.textContent ? '\n' : '') + line.text;
        log.scrollTop = log.scrollHeight;
        if (bar) bar.style.width = Math.min(100, (line.at / DIAL_TOTAL) * 100) + '%';
      }, line.at));
    });

    timers.push(window.setTimeout(finish, DIAL_TOTAL));
  }

  /* ------------------------------------------------------------------ */
  /*  2. Countdown timer                                                  */
  /* ------------------------------------------------------------------ */

  // Month is zero-based: 1 is February.
  var LAN_START = new Date(2027, 1, 19, 0, 0, 0);

  function updateCountdown() {
    var container = document.getElementById('y2k-countdown');
    if (!container) return;

    var diff = LAN_START - new Date();

    if (diff <= 0) {
      container.classList.add('y2k-countdown--done');
      container.querySelectorAll('.y2k-countdown-num').forEach(function (el) {
        el.textContent = '00';
      });
      return;
    }

    var map = {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000)
    };

    Object.keys(map).forEach(function (unit) {
      var el = container.querySelector('.y2k-countdown-num[data-unit="' + unit + '"]');
      if (el) el.textContent = String(map[unit]).padStart(2, '0');
    });
  }

  /* ------------------------------------------------------------------ */
  /*  3. Visitor counter                                                  */
  /* ------------------------------------------------------------------ */

  // Visitor count from GoatCounter's counter endpoint,
  // https://<site>.goatcounter.com/counter/<path>.json. The site already loads
  // GoatCounter.
  var GOATCOUNTER_SITE = 'https://uwstout-pong.goatcounter.com';

  var COUNTER_FIELD = 'count';

  function counterUrl() {
    return GOATCOUNTER_SITE + '/counter/' + encodeURIComponent(window.location.pathname) + '.json';
  }

  function paintCounter(digits, n) {
    var text = String(n).padStart(digits.length, '0').slice(-digits.length);
    var still = prefersReducedMotion();

    digits.forEach(function (el, i) {
      if (still) {
        el.textContent = text.charAt(i);
        return;
      }
      window.setTimeout(function () {
        el.textContent = text.charAt(i);
      }, i * 70);
    });
  }

  // Fallback when the count cannot be fetched: this browser's own visits from
  // localStorage. Nothing is sent.
  function localCounter(digits) {
    try {
      var stored = window.localStorage.getItem('lan-iversary-hits');
      var n = (stored ? parseInt(stored, 10) : 0) + 1;
      if (!isFinite(n) || n < 1) n = 1;
      window.localStorage.setItem('lan-iversary-hits', String(n));
      paintCounter(digits, n);
    } catch (e) {
    }
  }

  function initCounter() {
    var box = document.getElementById('y2k-counter');
    if (!box) return;

    var digits = box.querySelectorAll('.y2k-counter-digit');
    if (!digits.length) return;

    if (!window.fetch) { localCounter(digits); return; }

    window.fetch(counterUrl(), { mode: 'cors' })
      .then(function (res) {
        if (!res.ok) throw new Error('counter ' + res.status);
        return res.json();
      })
      .then(function (data) {
        // GoatCounter returns a formatted number, so strip it to digits.
        var raw = String(data && data[COUNTER_FIELD] !== undefined ? data[COUNTER_FIELD] : '');
        var n = parseInt(raw.replace(/[^0-9]/g, ''), 10);
        if (!isFinite(n)) throw new Error('counter unparseable');
        paintCounter(digits, n);
      })
      .catch(function () {
        localCounter(digits);
      });
  }

  /* ------------------------------------------------------------------ */
  /*  4. Scroll reveal                                                    */
  /* ------------------------------------------------------------------ */

  function initReveal() {
    var els = document.querySelectorAll('.y2k-reveal');
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function (el) { obs.observe(el); });
  }

  /* ------------------------------------------------------------------ */
  /*  5. Day tabs on the running order                                    */
  /* ------------------------------------------------------------------ */

  function injectTabStyles() {
    var style = document.createElement('style');
    style.textContent = [
      '.y2k-day-tabs{display:flex;flex-wrap:wrap;gap:3px;margin:0 0 16px;',
      'border-bottom:2px solid #ffd700;padding-bottom:0;}',
      '.y2k-day-tab{',
      'padding:7px 16px;margin-bottom:-2px;',
      'font-family:"MS Sans Serif",Tahoma,Verdana,sans-serif;',
      'font-size:12px;font-weight:bold;',
      'color:#000;background:#c0c0c0;border:none;cursor:pointer;',
      'box-shadow:inset 1px 1px 0 #fff, inset -1px -1px 0 #808080;',
      '}',
      '.y2k-day-tab:hover{background:#d4d0c8;}',
      '.y2k-day-tab.is-active{',
      'background:#150a30;color:#ffd700;',
      'box-shadow:inset 1px 1px 0 #ffd700, inset -1px 0 0 #ffd700;',
      '}'
    ].join('');
    document.head.appendChild(style);
  }

  function initDayTabs() {
    var container = document.querySelector('.y2k-days');
    if (!container) return;

    var days = container.querySelectorAll('.y2k-day');
    if (days.length < 2) return;

    injectTabStyles();

    var bar = document.createElement('div');
    bar.className = 'y2k-day-tabs';

    var all = document.createElement('button');
    all.type = 'button';
    all.className = 'y2k-day-tab is-active';
    all.textContent = 'All';
    all.dataset.target = 'all';
    bar.appendChild(all);

    days.forEach(function (day, i) {
      var nameEl = day.querySelector('.y2k-day-name');
      if (!nameEl) return;
      var tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'y2k-day-tab';
      tab.textContent = nameEl.textContent.trim();
      tab.dataset.target = String(i);
      bar.appendChild(tab);
    });

    container.parentNode.insertBefore(bar, container);

    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('.y2k-day-tab');
      if (!btn) return;
      bar.querySelectorAll('.y2k-day-tab').forEach(function (t) {
        t.classList.remove('is-active');
      });
      btn.classList.add('is-active');
      var target = btn.dataset.target;
      days.forEach(function (d, i) {
        d.style.display = (target === 'all' || target === String(i)) ? '' : 'none';
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /*  6. Schedule image fallback                                          */
  /* ------------------------------------------------------------------ */

  function markScheduleMissing() {
    var screen = document.querySelector('.y2k-screen');
    if (screen) {
      screen.classList.add('is-missing');
      if (screen.tagName === 'A') {
        var block = document.createElement('div');
        block.className = screen.className;
        while (screen.firstChild) block.appendChild(screen.firstChild);
        screen.parentNode.replaceChild(block, screen);
      }
    }
    var meta = document.querySelector('.y2k-screen-meta');
    if (meta) meta.remove();

    var overlay = document.getElementById('schedule-zoom');
    if (overlay) overlay.remove();
  }

  function initScheduleFallback() {
    var img = document.querySelector('.y2k-schedule-img');
    if (!img) return;
    if (img.complete) {
      if (!img.naturalWidth) markScheduleMissing();
      return;
    }
    img.addEventListener('error', markScheduleMissing);
  }

  /* ------------------------------------------------------------------ */
  /*  7. Sparkle cursor trail                                             */
  /* ------------------------------------------------------------------ */

  // Sparkle trail: throttled, capped, self-removing, and not installed under
  // reduced motion or on touch.
  function initSparkles() {
    if (prefersReducedMotion()) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    var last = 0;

    document.addEventListener('mousemove', function (e) {
      var now = Date.now();
      if (now - last < 60) return;
      last = now;

      var s = document.createElement('div');
      s.className = 'y2k-spark';
      s.style.left = e.clientX + 'px';
      s.style.top = e.clientY + 'px';
      s.style.background = (Math.random() < 0.35) ? '#ff2fb9' : '#ffd700';
      document.body.appendChild(s);

      window.setTimeout(function () {
        if (s.parentNode) s.parentNode.removeChild(s);
      }, 700);
    }, { passive: true });
  }

  /* ------------------------------------------------------------------ */
  /*  8. Smooth scroll for in-page anchors                                */
  /* ------------------------------------------------------------------ */

  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!a) return;
      var id = a.getAttribute('href').slice(1);
      if (!id) return;
      // Don't intercept the zoom-overlay :target links.
      if (id === 'schedule-zoom' || id === 'schedule-view') return;
      var el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* ------------------------------------------------------------------ */
  /*  9. Confetti                                                         */
  /* ------------------------------------------------------------------ */

  var CONFETTI_COLOURS = [
    '#ffd700', '#fff3b0', '#ff2fb9', '#00e5ff',
    '#39ff14', '#a349ff', '#ff4136', '#4a9dff'
  ];

  var CONFETTI_SHAPES = ['', '', 'is-round', 'is-strip', 'is-star'];

  var CONFETTI_PER_THROW = 90;
  var CONFETTI_CEILING = 300;

  function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function spawnConfetto(layer, still) {
    var el = document.createElement('div');
    var shape = pick(CONFETTI_SHAPES);

    el.className = 'y2k-confetto' + (shape ? ' ' + shape : '');
    el.style.background = pick(CONFETTI_COLOURS);
    el.style.left = (Math.random() * 100).toFixed(2) + 'vw';

    if (still) {
      // Under reduced motion, pieces start in view and fade in place.
      el.style.top = (5 + Math.random() * 80).toFixed(2) + 'vh';
    } else {
      el.style.setProperty('--y2k-fall', (2.4 + Math.random() * 2.3).toFixed(2) + 's');
      el.style.setProperty('--y2k-drift', (Math.random() * 300 - 150).toFixed(0) + 'px');
      el.style.setProperty(
        '--y2k-spin',
        ((Math.random() * 4 + 1) * (Math.random() < 0.5 ? -360 : 360)).toFixed(0) + 'deg'
      );
      el.style.animationDelay = (Math.random() * 0.45).toFixed(2) + 's';
    }

    el.addEventListener('animationend', function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    });

    layer.appendChild(el);
  }

  function throwConfetti() {
    var layer = document.getElementById('y2k-confetti');
    if (!layer) return;
    if (layer.childElementCount >= CONFETTI_CEILING) return;

    var still = prefersReducedMotion();
    layer.classList.toggle('is-still', still);

    var n = still ? 45 : CONFETTI_PER_THROW;
    for (var i = 0; i < n; i++) spawnConfetto(layer, still);
  }

  function initParty() {
    document.querySelectorAll('[data-y2k-confetti]').forEach(function (btn) {
      btn.addEventListener('click', throwConfetti);
    });

    var seal = document.getElementById('y2k-seal');
    if (seal) seal.addEventListener('click', throwConfetti);
  }

  /* ------------------------------------------------------------------ */
  /*  10. Taskbar                                                         */
  /* ------------------------------------------------------------------ */

  function initClock() {
    var el = document.getElementById('y2k-clock');
    if (!el) return;

    function tick() {
      var d = new Date();
      var h = d.getHours();
      var suffix = h < 12 ? 'AM' : 'PM';
      h = h % 12;
      if (h === 0) h = 12;
      el.textContent = h + ':' + String(d.getMinutes()).padStart(2, '0') + ' ' + suffix;
    }

    tick();
    window.setInterval(tick, 20000);
  }

  function initStartMenu() {
    var btn = document.getElementById('y2k-start');
    var menu = document.getElementById('y2k-startmenu');
    if (!btn || !menu) return;

    function openMenu() {
      menu.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      var first = menu.querySelector('a, button');
      if (first) first.focus();
    }

    function closeMenu(refocus) {
      if (menu.hidden) return;
      menu.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      if (refocus) btn.focus();
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (menu.hidden) openMenu(); else closeMenu(true);
    });

    document.addEventListener('click', function (e) {
      if (menu.hidden) return;
      if (menu.contains(e.target)) return;
      closeMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu(true);
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a, button')) closeMenu(false);
    });
  }

  function initTaskButtons() {
    var strip = document.getElementById('y2k-tasks');
    if (!strip) return;

    var wins = Array.prototype.slice.call(document.querySelectorAll('.y2k-win[id]'));
    if (!wins.length) return;

    var buttons = wins.map(function (win) {
      var nameEl = win.querySelector('.y2k-win-name');
      var iconEl = win.querySelector('.y2k-win-icon use');

      var a = document.createElement('a');
      a.className = 'y2k-task';
      a.href = '#' + win.id;

      if (iconEl) {
        a.appendChild(spriteIcon(iconEl.getAttribute('href')));
      }

      var label = document.createElement('span');
      label.textContent = nameEl ? nameEl.textContent.trim() : win.id;
      a.appendChild(label);

      strip.appendChild(a);
      return a;
    });

    if (!('IntersectionObserver' in window)) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var i = wins.indexOf(e.target);
        if (i < 0) return;

        buttons.forEach(function (b) { b.classList.remove('is-active'); });
        buttons[i].classList.add('is-active');

        var target = buttons[i].offsetLeft - (strip.clientWidth - buttons[i].offsetWidth) / 2;
        strip.scrollLeft = Math.max(0, target);
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    wins.forEach(function (win) { obs.observe(win); });
  }

  function initTaskbar() {
    if (!document.getElementById('y2k-taskbar')) return;
    initClock();
    initStartMenu();
    initTaskButtons();
  }

  /* ------------------------------------------------------------------ */
  /*  11. Tray balloon tip                                                */
  /* ------------------------------------------------------------------ */

  var TIP_KEY = 'lan-iversary-tip';
  var TIP_LIFE = 9000;

  function initTip(delay) {
    var tip = document.getElementById('y2k-tip');
    if (!tip) return false;

    try {
      if (window.sessionStorage.getItem(TIP_KEY) === '1') return false;
    } catch (e) {
    }

    var life = null;
    var close = document.getElementById('y2k-tip-close');

    function hide() {
      tip.hidden = true;
      if (life) window.clearTimeout(life);
    }

    if (close) close.addEventListener('click', hide);

    window.setTimeout(function () {
      tip.hidden = false;
      try {
        window.sessionStorage.setItem(TIP_KEY, '1');
      } catch (e) { /* see above */ }
      life = window.setTimeout(hide, TIP_LIFE);
    }, delay);

    return true;
  }

  /* ------------------------------------------------------------------ */
  /*  12. The assistant                                                   */
  /* ------------------------------------------------------------------ */

  var CLIPPY_TIPS = [
    {
      id: 'hello',
      line: "It looks like you're trying to attend a LAN party.",
      options: [
        { label: 'Show me what to bring', go: 'kit' },
        { label: 'What is actually on?',  tip: 'schedule' },
        { label: 'Just let me read the page', close: true }
      ]
    },
    {
      id: 'schedule',
      line: 'The running order is not up yet. I have checked four times. It is still not up.',
      options: [
        { label: 'Take me there anyway', go: 'running-order' },
        { label: 'Who would know?',      tip: 'discord' },
        { label: 'Fine',                 close: true }
      ]
    },
    {
      id: 'discord',
      line: 'Everything gets announced in the Discord first. I am a paperclip. I find out last.',
      options: [
        { label: 'Sign the guestbook', go: 'guestbook' },
        { label: 'Tell me something else', tip: 'trivia' },
        { label: 'Dismiss', close: true }
      ]
    },
    {
      id: 'trivia',
      line: 'This page is best viewed at 800x600, which was also true at the first LAN.',
      options: [
        { label: 'Read the questions', go: 'faq' },
        { label: 'Tell me something else', tip: 'kit' },
        { label: 'Dismiss', close: true }
      ]
    },
    {
      id: 'kit',
      line: 'Power and network are provided. The computer is not. This catches somebody out every single year.',
      options: [
        { label: 'Show me the full list', go: 'kit' },
        { label: 'Start again',           tip: 'hello' },
        { label: 'Dismiss',               close: true }
      ]
    }
  ];

  var CLIPPY_KEY = 'lan-iversary-clippy';

  var clippyAt = 0;

  function clippyTip(id) {
    for (var i = 0; i < CLIPPY_TIPS.length; i++) {
      if (CLIPPY_TIPS[i].id === id) return CLIPPY_TIPS[i];
    }
    return CLIPPY_TIPS[0];
  }

  function clippyHide(remember) {
    var box = document.getElementById('y2k-clippy');
    if (!box) return;
    box.hidden = true;
    if (!remember) return;
    try {
      window.sessionStorage.setItem(CLIPPY_KEY, '1');
    } catch (e) {
    }
  }

  function clippyRender(id) {
    var tip = clippyTip(id);
    var line = document.getElementById('y2k-clippy-line');
    var list = document.getElementById('y2k-clippy-options');
    if (!line || !list) return;

    line.textContent = tip.line;
    while (list.firstChild) list.removeChild(list.firstChild);

    tip.options.forEach(function (opt) {
      var li = document.createElement('li');
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = opt.label;

      btn.addEventListener('click', function () {
        if (opt.close) { clippyHide(true); return; }
        if (opt.go) {
          var target = document.getElementById(opt.go);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (opt.tip) clippyRender(opt.tip);
      });

      li.appendChild(btn);
      list.appendChild(li);
    });
  }

  function clippyShow(id, takeFocus) {
    var box = document.getElementById('y2k-clippy');
    if (!box) return;

    clippyRender(id);
    box.hidden = false;

    if (!takeFocus) return;
    var first = box.querySelector('.y2k-clippy-options button');
    if (first) first.focus();
  }

  function initClippy(delay) {
    var box = document.getElementById('y2k-clippy');
    if (!box) return;

    var closeBtn = document.getElementById('y2k-clippy-close');
    var charBtn  = document.getElementById('y2k-clippy-char');
    var summon   = document.getElementById('y2k-clippy-summon');

    if (closeBtn) {
      closeBtn.addEventListener('click', function () { clippyHide(true); });
    }

    if (charBtn) {
      charBtn.addEventListener('click', function () {
        clippyAt = (clippyAt + 1) % CLIPPY_TIPS.length;
        clippyShow(CLIPPY_TIPS[clippyAt].id, false);
      });
    }

    if (summon) {
      summon.addEventListener('click', function () {
        clippyAt = 0;
        clippyShow('hello', true);
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !box.hidden) clippyHide(true);
    });

    var seen = false;
    try {
      seen = window.sessionStorage.getItem(CLIPPY_KEY) === '1';
    } catch (e) { /* see clippyHide */ }
    if (seen) return;

    window.setTimeout(function () {
      if (!box.hidden) return;
      clippyShow('hello', false);
      try {
        window.sessionStorage.setItem(CLIPPY_KEY, '1');
      } catch (e) { /* see clippyHide */ }
    }, delay);
  }

  /* ------------------------------------------------------------------ */
  /*  Boot                                                                */
  /* ------------------------------------------------------------------ */

  function init() {
    var tipDelay = 4000;

    if (introAlreadySeen()) {
      document.documentElement.classList.remove('y2k-js');
      var stale = document.getElementById('y2k-dialup');
      if (stale && stale.parentNode) stale.parentNode.removeChild(stale);
      revealHero();
    } else {
      rememberIntroSeen();
      runDialup();
      tipDelay = DIAL_TOTAL + 3500;
    }

    updateCountdown();
    window.setInterval(updateCountdown, 1000);

    initCounter();
    initReveal();
    initDayTabs();
    initScheduleFallback();
    initSparkles();
    initSmoothScroll();
    initParty();
    initTaskbar();

    var tipScheduled = initTip(tipDelay);
    initClippy(tipScheduled ? tipDelay + TIP_LIFE + 1500 : tipDelay + 1500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
