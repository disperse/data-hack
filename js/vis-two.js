function visTwo() {
  var n = 20, // number of layers
    m = 200, // number of samples per layer
    stack = d3.layout.stack().offset("wiggle"),
    layers0 = stack(d3.range(n).map(function () {
      return bumpLayer(m);
    })),
    layers1 = stack(d3.range(n).map(function () {
      return bumpLayer(m);
    }));

  var width = $("#vis-two").width(),
    height = 150;

  var x = d3.scale.linear()
    .domain([0, m - 1])
    .range([0, width]);

  var y = d3.scale.linear()
    .domain([0, d3.max(layers0.concat(layers1), function (layer) {
      return d3.max(layer, function (d) {
        return d.y0 + d.y;
      });
    })])
    .range([height, 0]);

  var color = d3.scale.linear()
    .range(["#c5d2db", "#3e6b85"]);

  var area = d3.svg.area()
    .x(function (d) {
      return x(d.x);
    })
    .y0(function (d) {
      return y(d.y0);
    })
    .y1(function (d) {
      return y(d.y0 + d.y);
    });

  var svg = d3.select("#vis-two").append("svg")
    .attr("width", width)
    .attr("height", height);

  var randomLayer = Math.floor(Math.random() * (n + 1));

  svg.selectAll("path")
    .data(layers0)
    .enter().append("path")
    .attr("d", area)
    .attr("class", "vis-two")
    .style("fill", function (d, i) {
      return (randomLayer == i) ? "#f4921e" : color(Math.random());
    });

  var visTwoTimer = window.setInterval(function () {
    d3.selectAll("path.vis-two")
      .data(function () {
        var newLayer = stack(d3.range(n).map(function () {
          return bumpLayer(m);
        }));
        //return layers0 = d;
        return newLayer;
      })
      .transition()
      .ease("linear")
      .duration(2500)
      .attr("d", area);
  }, 2500);

// Inspired by Lee Byron's test data generator.
  function bumpLayer(n) {

    function bump(a) {
      var x = 1 / (.1 + Math.random()),
        y = 2 * Math.random() - .5,
        z = 10 / (.1 + Math.random());
      for (var i = 0; i < n; i++) {
        var w = (i / n - y) * z;
        a[i] += x * Math.exp(-w * w);
      }
    }

    var a = [], i;
    for (i = 0; i < n; ++i) a[i] = 0;
    for (i = 0; i < 5; ++i) bump(a);
    return a.map(function (d, i) {
      return {x: i, y: Math.max(0, d)};
    });
  }
}