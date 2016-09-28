function visLogo() {
  var svg = d3.select('#svg-logo');
  var g = svg.select('g');
  var paths = g.selectAll('path');

  var index = 0;
  var visLogoTimer;

  $("#vis-logo").appear();

  $("#vis-logo").on('appear', function() {
    if (visLogoTimer == undefined) {
      visLogoTimer = window.setInterval(function() {
        index = (index + 1) % paths.size();
        //var index2 = Math.floor(Math.random() * paths.size());
        var index2 = (index + 2) % paths.size();
        paths.attr("fill", function(d, i) {
          return (index == i || index2 == i) ? "#f4921e" : "#3e6b85";
        });
      }, 500);
    }
  });

  $("#vis-logo").on('disappear', function() {
    if (visLogoTimer !== undefined) {
      visLogoTimer = window.clearInterval(visLogoTimer);
    }
  });

}

