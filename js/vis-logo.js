function visLogo() {
  var svg = d3.select('#svg-logo');
  var g = svg.select('g');
  var paths = g.selectAll('path');

  var index = 0;
  var visLogoTimer = window.setInterval(function() {
    index = (index + 1) % paths.size();
    paths.attr("fill", function(d, i) {
      return (index == i) ? "#f4921e" : "#3e6b85";
    });
  }, 300);
}

