(function () {
  var MOBILE_BREAKPOINT = 480;
  var iframe = document.getElementById('gcal-embed');
  if (!iframe) return;

  var monthSrc = iframe.dataset.monthSrc;
  var agendaSrc = iframe.dataset.agendaSrc;
  var currentMode = null;

  function applyView() {
    var isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    var mode = isMobile ? 'agenda' : 'month';

    if (mode === currentMode) return;

    iframe.src = isMobile ? agendaSrc : monthSrc;
    currentMode = mode;
  }

  var resizeTimer;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(applyView, 150);
  }

  applyView();
  window.addEventListener('resize', onResize);
})();