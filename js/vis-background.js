function visBackground() {
//var links = geometricRandom2.links;
//var nodes = geometricRandom2.nodes;
  var links = [];
  var nodes = [];

  var width = $(".dh-graph").width(),
    height = $(".dh-graph").height();

  var nid = 0;
  for (var x = 0; x < width; x += 10) {
    for (var y = 0; y < height; y += 10) {
      if (Math.random() < 0.07) {
        nid++;
        nodes.push({"id": nid, "cx": x, "cy": y});
      }
    }
  }

  for (var i = 0; i < nodes.length - 2; i++) {
    for (var j = i + 1; j < nodes.length; j++) {
      var distance = Math.sqrt(
        Math.pow(nodes[i].cx - nodes[j].cx, 2) +
        Math.pow(nodes[i].cy - nodes[j].cy, 2)
      );
      if (distance < 50) {
        links.push({source: nodes[i], target: nodes[j]});
      }
    }
  }

  var div = d3.select(".dh-graph");
  var svg = div.append("svg:svg")
    .attr("width", width)
    .attr("height", (height * 2));

  var force = d3.layout.force()
    .nodes(nodes)
    .links(links)
    .size([width, height])
    .charge(-200)
    .on("tick", tick)
    .start();

  var link = svg.selectAll(".link")
    .data(links)
    .enter().append("line")
    .attr("class", "link-vis-0");

  var node = svg.selectAll(".node")
    .data(nodes)
    .enter().append("circle")
    .attr("class", "node-vis-0")
    .attr("r", 4.5);

  function tick() {
    link.attr("x1", function (d) {
      return d.source.x;
    })
      .attr("y1", function (d) {
        return d.source.y;
      })
      .attr("x2", function (d) {
        return d.target.x;
      })
      .attr("y2", function (d) {
        return d.target.y;
      });

    node.attr("cx", function (d) {
      return d.x;
    })
      .attr("cy", function (d) {
        return d.y;
      });
  }
}
