(function () {
  'use strict';

  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /* ------------------------------------------------------------------ */
  /*  1. Countdown                                                        */
  /* ------------------------------------------------------------------ */

  // Month is zero-based: 10 is November.
  var LAN_START = new Date(2024, 10, 22, 16, 0, 0);
  var LAN_END   = new Date(2024, 10, 24, 16, 0, 0);

  function updateCountdown() {
    var wrap = document.getElementById('cozy-countdown-wrap');
    var box  = document.getElementById('cozy-countdown');
    var head = document.getElementById('cozy-countdown-head');
    if (!wrap || !box) return false;

    var now = new Date();

    if (now > LAN_END) {
      wrap.classList.add('is-past');
      if (head) head.textContent = 'Cozy-LAN is over. The running order below is what happened.';
      return true;
    }

    if (now >= LAN_START) {
      wrap.classList.add('is-past');
      if (head) head.textContent = 'Cozy-LAN is happening right now. Come to the Great Hall.';
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
      var el = box.querySelector('.cozy-countdown-num[data-unit="' + unit + '"]');
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
    var els = document.querySelectorAll('.cozy-reveal');
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
    var screen = document.querySelector('.cozy-screen');
    if (screen) {
      screen.classList.add('is-missing');
      if (screen.tagName === 'A') {
        var block = document.createElement('div');
        block.className = screen.className;
        while (screen.firstChild) block.appendChild(screen.firstChild);
        screen.parentNode.replaceChild(block, screen);
      }
    }

    var meta = document.querySelector('.cozy-screen-meta');
    if (meta) meta.remove();

    var overlay = document.getElementById('schedule-zoom');
    if (overlay) overlay.remove();
  }

  function initScheduleFallback() {
    var img = document.querySelector('.cozy-schedule-img');
    if (!img) return;
    if (img.complete) {
      if (!img.naturalWidth) markScheduleMissing();
      return;
    }
    img.addEventListener('error', markScheduleMissing);
  }

  /* ------------------------------------------------------------------ */
  /*  4. Smooth scroll for in-page anchors                                */
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
  /*  Boot                                                                */
  /* ------------------------------------------------------------------ */

  function init() {
    initCountdown();
    initReveal();
    initScheduleFallback();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
