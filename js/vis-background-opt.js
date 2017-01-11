function visBackground() {
  if (window.backgroundTimer) {
    window.clearInterval(window.backgroundTimer);
    window.backgroundTimer = undefined;
  } else {
    if (!window.backgroundAngle) window.backgroundAngle = 0;
    window.backgroundTimer = window.setInterval(function () {
      window.backgroundAngle = (window.backgroundAngle + 1) % 18000;
      $('.dh-graph').css({ WebkitTransform: 'rotate(' + window.backgroundAngle/50 + 'deg)'});
    }, 20);
  }
}
