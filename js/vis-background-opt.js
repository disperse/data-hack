function visBackground() {
  var angle = 0;
  var backgroundTimer = window.setInterval(function () {
    angle = (angle + 1) % 18000;
    $('.dh-graph').css({ WebkitTransform: 'rotate(' + angle/50 + 'deg)'});
  }, 20);
}
