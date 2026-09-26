(function () {
  'use strict';

  var _gridCars = []; // filled by initGridCars, launched by runLightsSequence

  /* ------------------------------------------------------------------ */
  /*  1. Race start lights sequence                                       */
  /* ------------------------------------------------------------------ */

  function runLightsSequence() {
    var redLights   = document.querySelectorAll('.gp-light--red');
    var greenLights = document.querySelectorAll('.gp-light--green');
    if (!redLights.length) return;

    var heroContent = document.querySelector('.gp-hero-content');
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reducedMotion) {
      document.body.style.overflow = 'hidden';
    }

    setTimeout(function () {
      var i = 0;
      // Light up red row one by one
      var lightUp = setInterval(function () {
        if (i < redLights.length) {
          redLights[i].classList.add('is-on');
          i++;
        } else {
          clearInterval(lightUp);
          // Random hold between all-red and green, anywhere from 300ms to 1s
          var hold = 300 + Math.random() * 700;
          setTimeout(function () {
            redLights.forEach(function (l) { l.classList.remove('is-on'); });
            greenLights.forEach(function (l) { l.classList.add('is-green'); });
            var car = document.getElementById('gp-race-car');
            if (car) car.classList.add('is-launched');
            // Launch all hero gridline cars simultaneously
            _gridCars.forEach(function (gc) { gc.classList.add('is-launched'); });
            // Reveal hero content just after the car clears centre (~1000ms into 1.6s run)
            setTimeout(function () {
              if (heroContent) heroContent.classList.remove('is-pending');
              document.body.style.overflow = '';
            }, 1000);
          }, hold);
        }
      }, 400);
    }, 600);
  }

  /* ------------------------------------------------------------------ */
  /*  2. Countdown timer                                                  */
  /* ------------------------------------------------------------------ */

  function updateCountdown() {
    var container = document.querySelector('.gp-countdown');
    if (!container) return;

    var target = new Date(2026, 10, 20, 16, 0, 0); // Nov 20 2026, 16:00 local
    var now    = new Date();
    var diff   = target - now;

    if (diff <= 0) {
      container.classList.add('gp-countdown--done');
      container.querySelectorAll('.gp-countdown-num').forEach(function (el) {
        el.textContent = '00';
      });
      return;
    }

    var days    = Math.floor(diff / 86400000);
    var hours   = Math.floor((diff % 86400000) / 3600000);
    var minutes = Math.floor((diff % 3600000)  / 60000);
    var seconds = Math.floor((diff % 60000)    / 1000);

    function pad(n) { return String(n).padStart(2, '0'); }

    var map = { days: days, hours: hours, minutes: minutes, seconds: seconds };
    Object.keys(map).forEach(function (unit) {
      var el = container.querySelector('.gp-countdown-num[data-unit="' + unit + '"]');
      if (el) el.textContent = pad(map[unit]);
    });
  }

  /* ------------------------------------------------------------------ */
  /*  3. Scroll reveal                                                    */
  /* ------------------------------------------------------------------ */

  function initReveal() {
    var targets = [
      document.querySelectorAll('.gp-event-card'),
      document.querySelectorAll('.gp-session'),
      document.querySelectorAll('.gp-note'),
      document.querySelectorAll('.gp-kit-item'),
      document.querySelectorAll('.gp-faq-item'),
      document.querySelectorAll('.gp-sponsor'),
    ];

    document.querySelectorAll('.gp-fact').forEach(function (el, i) {
      el.classList.add(i % 2 === 0 ? 'gp-reveal' : 'gp-reveal--left');
    });

    targets.forEach(function (list) {
      list.forEach(function (el) { el.classList.add('gp-reveal'); });
    });

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.gp-reveal, .gp-reveal--left').forEach(function (el) {
        el.classList.add('is-visible');
      });
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

    document.querySelectorAll('.gp-reveal, .gp-reveal--left').forEach(function (el) {
      obs.observe(el);
    });
  }

  /* ------------------------------------------------------------------ */
  /*  4. Session tab filtering (injected DOM + styles)                   */
  /* ------------------------------------------------------------------ */

  function injectTabStyles() {
    var style = document.createElement('style');
    style.textContent = [
      '.gp-session-tabs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px;}',
      '.gp-session-tab{',
        'padding:8px 18px;',
        'font-family:"Impact","Arial Narrow",Arial,sans-serif;',
        'font-size:13px;font-weight:900;letter-spacing:0.06em;text-transform:uppercase;',
        'color:#cfcfcf;background:#1c1c1e;border:1px solid rgba(255,255,255,0.08);',
        'cursor:pointer;transition:color 0.15s,border-color 0.15s,background 0.15s,box-shadow 0.15s;',
      '}',
      '.gp-session-tab:hover{color:#f0f0f0;border-color:rgba(225,6,0,0.4);}',
      '.gp-session-tab.is-active{',
        'color:#fff;background:#e10600;border-color:#e10600;',
        'box-shadow:0 0 14px rgba(225,6,0,0.55);',
      '}',
    ].join('');
    document.head.appendChild(style);
  }

  function initSessionTabs() {
    var container = document.querySelector('.gp-sessions');
    if (!container) return;

    var sessions = container.querySelectorAll('.gp-session');
    if (sessions.length < 2) return;

    var tabBar = document.createElement('div');
    tabBar.className = 'gp-session-tabs';

    var allTab = document.createElement('button');
    allTab.className  = 'gp-session-tab is-active';
    allTab.textContent = 'All';
    allTab.dataset.target = 'all';
    tabBar.appendChild(allTab);

    sessions.forEach(function (session, i) {
      var nameEl = session.querySelector('.gp-session-name');
      if (!nameEl) return;
      var tab = document.createElement('button');
      tab.className   = 'gp-session-tab';
      tab.textContent  = nameEl.textContent.trim();
      tab.dataset.target = String(i);
      tabBar.appendChild(tab);
    });

    container.parentNode.insertBefore(tabBar, container);

    tabBar.addEventListener('click', function (e) {
      var btn = e.target.closest('.gp-session-tab');
      if (!btn) return;
      tabBar.querySelectorAll('.gp-session-tab').forEach(function (t) {
        t.classList.remove('is-active');
      });
      btn.classList.add('is-active');
      var target = btn.dataset.target;
      sessions.forEach(function (s, i) {
        s.style.display = (target === 'all' || target === String(i)) ? '' : 'none';
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /*  5. Hero gridline cars                                               */
  /* ------------------------------------------------------------------ */

  function initGridCars() {
    var hero = document.querySelector('.gp-hero');
    if (!hero) return;

    // Gridlines in .gp-hero::before repeat every 70px, first at y=68px
    var firstLine   = 68;
    var lineSpacing = 70;
    var carH        = 28;
    var heroH       = hero.offsetHeight;

    // Distinct speeds spanning 0.55s (lightning) → 2.1s (slow)
    var speeds = [1.1, 0.65, 1.5, 0.8, 1.85, 0.55, 1.25, 2.1, 0.9, 1.65, 0.7, 1.4];

    var svgStr =
      '<svg viewBox="0 0 260 80" fill="none" aria-hidden="true">' +
        '<path d="M8,24 L15,24 L15,62 L8,62 Z" fill="currentColor"/>' +
        '<path d="M10,24 L55,22 L55,26 L10,28 Z" fill="currentColor"/>' +
        '<path d="M10,28 L57,26 L57,30 L10,32 Z" fill="currentColor"/>' +
        '<path d="M22,51 L54,49 L54,53 L22,55 Z" fill="currentColor" opacity=".85"/>' +
        '<path d="M31,26 L35,26 L37,51 L33,51 Z" fill="currentColor" opacity=".6"/>' +
        '<path d="M 243,68 C 228,64 210,59 196,54 C 186,51 175,48 162,43 C 152,39 142,35 128,33 C 118,32 108,33 98,34 C 88,35 78,37 68,40 C 58,43 45,47 32,51 L 22,55 L 22,62 L 185,61 C 210,63 228,66 243,68 Z" fill="currentColor"/>' +
        '<path d="M90,37 C100,34 114,33 126,34 L126,43 C114,44 100,45 90,43 Z" fill="rgba(0,0,0,.62)"/>' +
        '<path d="M98,34 C97,28 103,23 113,22 L116,22 C106,23 101,28 102,34 Z" fill="currentColor"/>' +
        '<path d="M134,36 C130,30 124,24 117,22 L114,22 C121,24 126,30 129,36 Z" fill="currentColor"/>' +
        '<rect x="113" y="22" width="4" height="8" rx="1" fill="currentColor" opacity=".65"/>' +
        '<path d="M103,34 L103,38 C114,39 124,39 131,36 L131,34 C124,35 114,35 103,34 Z" fill="rgba(0,0,0,.7)"/>' +
        '<path d="M152,72 L248,68 L248,65 L152,69 Z" fill="currentColor"/>' +
        '<path d="M156,69 L246,65 L246,62 L156,66 Z" fill="currentColor"/>' +
        '<path d="M160,66 L244,62 L244,59 L160,63 Z" fill="currentColor" opacity=".9"/>' +
        '<path d="M163,63 L242,59 L242,56 L163,60 Z" fill="currentColor" opacity=".8"/>' +
        '<path d="M243,54 L249,54 L249,74 L243,74 Z" fill="currentColor"/>' +
        '<path d="M150,65 L156,65 L156,74 L150,74 Z" fill="currentColor"/>' +
        '<path d="M182,59 L193,59 L193,66 L182,66 Z" fill="currentColor" opacity=".6"/>' +
        '<circle cx="50" cy="64" r="11" fill="rgba(55,55,55,.92)"/>' +
        '<circle cx="50" cy="64" r="6.5" fill="currentColor" opacity=".4"/>' +
        '<circle cx="50" cy="64" r="2.5" fill="rgba(20,20,20,.95)"/>' +
        '<circle cx="190" cy="64" r="9" fill="rgba(55,55,55,.92)"/>' +
        '<circle cx="190" cy="64" r="5.5" fill="currentColor" opacity=".4"/>' +
        '<circle cx="190" cy="64" r="2" fill="rgba(20,20,20,.95)"/>' +
      '</svg>';

    var lineY = firstLine;
    var idx   = 0;
    while (lineY + carH < heroH - 8) {
      var el = document.createElement('div');
      el.className = 'gp-grid-car';
      el.setAttribute('aria-hidden', 'true');
      el.style.top = (lineY - carH + 2) + 'px'; // wheel-bottom sits on gridline
      el.style.setProperty('--gp-car-dur',   speeds[idx % speeds.length] + 's');
      el.style.setProperty('--gp-car-delay', Math.floor(Math.random() * 500) + 'ms');
      el.innerHTML = svgStr;
      hero.appendChild(el);
      _gridCars.push(el);
      lineY += lineSpacing;
      idx++;
    }
  }

  /* ------------------------------------------------------------------ */
  /*  6. Schedule image fallback                                          */
  /* ------------------------------------------------------------------ */

  // The zoom link is only rendered when the image exists at build time.
  // This covers the runtime case, where the file was renamed, moved, or simply
  // failed to load. It swaps the zoom anchor for a plain block and drops the
  // links, so nothing offers to enlarge an image that isn't there.
  function markScheduleMissing() {
    var screen = document.querySelector('.gp-screen');
    if (screen) {
      screen.classList.add('is-missing');
      if (screen.tagName === 'A') {
        var block = document.createElement('div');
        block.className = screen.className;
        while (screen.firstChild) block.appendChild(screen.firstChild);
        screen.parentNode.replaceChild(block, screen);
      }
    }
    var fullSize = document.querySelector('.gp-screen-meta a');
    if (fullSize) fullSize.remove();

    var overlay = document.getElementById('schedule-zoom');
    if (overlay) overlay.remove();
  }

  function initScheduleFallback() {
    var img = document.querySelector('.gp-schedule-img');
    if (!img) return;
    if (img.complete) {
      if (!img.naturalWidth) markScheduleMissing();
      return;
    }
    img.addEventListener('error', markScheduleMissing);
  }

  /* ------------------------------------------------------------------ */
  /*  7. Smooth scroll for in-page anchor links                          */
  /* ------------------------------------------------------------------ */

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href').slice(1);
        if (!id) return;
        // Don't intercept the zoom-overlay :target links
        if (id === 'schedule-zoom' || id === 'schedule-view') return;
        var el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /*  Boot                                                                */
  /* ------------------------------------------------------------------ */

  function init() {
    injectTabStyles();
    initGridCars();
    runLightsSequence();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    initReveal();
    initSessionTabs();
    initScheduleFallback();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
