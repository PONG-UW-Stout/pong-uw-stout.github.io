(function () {
  'use strict';

  var SVG_NS = 'http://www.w3.org/2000/svg';

  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function spriteIcon(ref, className) {
    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('class', className || 'aero-icon');
    svg.setAttribute('viewBox', '0 0 32 32');
    svg.setAttribute('aria-hidden', 'true');
    var use = document.createElementNS(SVG_NS, 'use');
    use.setAttribute('href', ref);
    svg.appendChild(use);
    return svg;
  }

  /* ------------------------------------------------------------------ */
  /*  1. Countdown                                                        */
  /* ------------------------------------------------------------------ */

  // Month is zero-based: 8 is September.
  var LAN_START = new Date(2025, 8, 19, 17, 0, 0);

  var LAN_END = new Date(2025, 8, 21, 23, 59, 59);

  function updateCountdown() {
    var wrap = document.getElementById('aero-countdown-wrap');
    var box = document.getElementById('aero-countdown');
    var head = document.getElementById('aero-countdown-head');
    if (!wrap || !box) return false;

    var now = new Date();

    if (now > LAN_END) {
      wrap.classList.add('is-past');
      if (head) head.textContent = 'Mil-LAN-ium has been and gone. The running order below is what happened.';
      return true;
    }

    if (now >= LAN_START) {
      wrap.classList.add('is-past');
      if (head) head.textContent = 'Mil-LAN-ium is happening right now. Come to the Great Hall.';
      return true;
    }

    var diff = LAN_START - now;
    var map = {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000)
    };

    Object.keys(map).forEach(function (unit) {
      var el = box.querySelector('.aero-countdown-num[data-unit="' + unit + '"]');
      if (el) el.textContent = String(map[unit]).padStart(2, '0');
    });

    return false;
  }

  function initCountdown() {
    if (updateCountdown()) return;
    var timer = window.setInterval(function () {
      if (updateCountdown()) window.clearInterval(timer);
    }, 1000);
  }

  /* ------------------------------------------------------------------ */
  /*  2. Scroll reveal                                                    */
  /* ------------------------------------------------------------------ */

  function initReveal() {
    var els = document.querySelectorAll('.aero-reveal');
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-visible');
        obs.unobserve(e.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function (el) { obs.observe(el); });
  }

  /* ------------------------------------------------------------------ */
  /*  3. Schedule image fallback                                          */
  /* ------------------------------------------------------------------ */

  function markScheduleMissing() {
    var screen = document.querySelector('.aero-screen');
    if (screen) {
      screen.classList.add('is-missing');
      if (screen.tagName === 'A') {
        var block = document.createElement('div');
        block.className = screen.className;
        while (screen.firstChild) block.appendChild(screen.firstChild);
        screen.parentNode.replaceChild(block, screen);
      }
    }

    var meta = document.querySelector('.aero-screen-meta');
    if (meta) meta.remove();

    var overlay = document.getElementById('schedule-zoom');
    if (overlay) overlay.remove();
  }

  function initScheduleFallback() {
    var img = document.querySelector('.aero-schedule-img');
    if (!img) return;
    if (img.complete) {
      if (!img.naturalWidth) markScheduleMissing();
      return;
    }
    img.addEventListener('error', markScheduleMissing);
  }

  /* ------------------------------------------------------------------ */
  /*  4. Taskbar                                                          */
  /* ------------------------------------------------------------------ */

  function initClock() {
    var el = document.getElementById('aero-clock');
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
    var btn = document.getElementById('aero-start');
    var menu = document.getElementById('aero-startmenu');
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
    var strip = document.getElementById('aero-tasks');
    if (!strip) return;

    var wins = Array.prototype.slice.call(document.querySelectorAll('.aero-win[id]'));
    if (!wins.length) return;

    var buttons = wins.map(function (win) {
      var nameEl = win.querySelector('.aero-win-name');
      var iconEl = win.querySelector('.aero-win-icon use');

      var a = document.createElement('a');
      a.className = 'aero-task';
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
    if (!document.getElementById('aero-taskbar')) return;
    initClock();
    initStartMenu();
    initTaskButtons();
  }

  /* ------------------------------------------------------------------ */
  /*  5. Tray balloon                                                     */
  /* ------------------------------------------------------------------ */

  var TIP_KEY = 'mil-lan-ium-tip';
  var TIP_DELAY = 3500;
  var TIP_LIFE = 11000;

  function initTip() {
    var tip = document.getElementById('aero-tip');
    if (!tip) return;

    try {
      if (window.sessionStorage.getItem(TIP_KEY) === '1') return;
    } catch (e) {
    }

    var life = null;
    var close = document.getElementById('aero-tip-close');

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
    }, TIP_DELAY);
  }

  /* ------------------------------------------------------------------ */
  /*  6. Smooth scroll for in-page anchors                                */
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
      el.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start'
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /*  7. The assistant                                                    */
  /* ------------------------------------------------------------------ */

  var CLIPPY_TIPS = [
    {
      id: 'hello',
      line: "It looks like you're trying to attend a LAN party.",
      options: [
        { label: 'Show me the running order', go: 'running-order' },
        { label: 'What do the badges mean?',  tip: 'badges' },
        { label: 'Just let me read the page', close: true }
      ]
    },
    {
      id: 'badges',
      line: 'A green FREE means the game itself costs nothing. A red C means the event is competitive and pays out tickets.',
      options: [
        { label: 'How do tickets work?', tip: 'tickets' },
        { label: 'Take me to the board', go: 'running-order' },
        { label: 'Dismiss',             close: true }
      ]
    },
    {
      id: 'tickets',
      line: 'Win a competitive event and you get three tickets. Second place gets two. Everybody else who takes part gets one.',
      options: [
        { label: 'When is the drawing?', tip: 'drawing' },
        { label: 'Tell me something else', tip: 'minecraft' },
        { label: 'Dismiss',              close: true }
      ]
    },
    {
      id: 'drawing',
      line: 'The Prize Drawing is Sunday at 2:30 PM, and it is the last thing on the board. You have to be in the hall to claim.',
      options: [
        { label: 'Show me Sunday',  go: 'running-order' },
        { label: 'Something else',  tip: 'minecraft' },
        { label: 'Dismiss',         close: true }
      ]
    },
    {
      id: 'minecraft',
      line: 'Minecraft Bingo runs the whole weekend on mc.ponglan.net. It is the one thing on the board that is not on the clock.',
      options: [
        { label: 'What should I bring?', go: 'kit' },
        { label: 'Start again',          tip: 'hello' },
        { label: 'Dismiss',              close: true }
      ]
    }
  ];

  var CLIPPY_KEY = 'mil-lan-ium-clippy';
  var CLIPPY_DELAY = TIP_DELAY + TIP_LIFE + 1500;

  var clippyAt = 0;

  function clippyTip(id) {
    for (var i = 0; i < CLIPPY_TIPS.length; i++) {
      if (CLIPPY_TIPS[i].id === id) return CLIPPY_TIPS[i];
    }
    return CLIPPY_TIPS[0];
  }

  function clippyHide(remember) {
    var box = document.getElementById('aero-clippy');
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
    var line = document.getElementById('aero-clippy-line');
    var list = document.getElementById('aero-clippy-options');
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
          if (target) {
            target.scrollIntoView({
              behavior: prefersReducedMotion() ? 'auto' : 'smooth',
              block: 'start'
            });
          }
        }
        if (opt.tip) clippyRender(opt.tip);
      });

      li.appendChild(btn);
      list.appendChild(li);
    });
  }

  function clippyShow(id, takeFocus) {
    var box = document.getElementById('aero-clippy');
    if (!box) return;

    clippyRender(id);
    box.hidden = false;

    if (!takeFocus) return;
    var first = box.querySelector('.aero-clippy-options button');
    if (first) first.focus();
  }

  function initClippy() {
    var box = document.getElementById('aero-clippy');
    if (!box) return;

    var closeBtn = document.getElementById('aero-clippy-close');
    var charBtn  = document.getElementById('aero-clippy-char');
    var summon   = document.getElementById('aero-clippy-summon');

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
    }, CLIPPY_DELAY);
  }

  /* ------------------------------------------------------------------ */
  /*  Boot                                                                */
  /* ------------------------------------------------------------------ */

  function init() {
    initCountdown();
    initReveal();
    initScheduleFallback();
    initTaskbar();
    initTip();
    initSmoothScroll();
    initClippy();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
