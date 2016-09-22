var links = logoGraph.links;
var nodes = logoGraph.nodes;

var width = $(".dh-graph").width(),
  height = $(".dh-graph").height();

var div = d3.select(".dh-graph");
var svg = div.append("svg:svg")
  .attr("width", width)
  .attr("height", (height * 2));

var force = d3.layout.force()
  .size([width, height])
  .charge(-400)
  .linkDistance(40)
  .on("tick", tick);

var drag = force.drag()
  .on("dragstart", dragstart);

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

var link = svg.selectAll(".link"),
  node = svg.selectAll(".node");

force
  .nodes(nodes)
  .links(links)
  .start();

link = link.data(links)
  .enter().append("line")
  .attr("class", "link");

node = svg.selectAll("g.node").data(nodes).enter().append("g")
  .attr("class", "node")
  .call(drag);

node.append("circle")
  .attr("class", "node")
  .attr("r", function(d) { return d.r; });

node.append("text")
  .style("text-anchor", "middle")
  .text(function (d) {
    return d.id;
  });

/*
node = node.data(nodes)
  .enter().append("circle")
  .attr("class", "node")
  .attr("r", function(d) { return d.r; })
  .on("dblclick", dblclick)
  .call(drag);

node.append("text")
  .attr("dx", 12)
  .attr("dy", ".35em")
  .text(function(d) { return d.id });
  */

function tick() {
  link.attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; });

  //node.attr("cx", function(d) { return d.x; })
  //  .attr("cy", function(d) { return d.y; });

  node.attr("transform", function(d) {
    return "translate(" + d.x + "," + d.y + ")";
  });
}

function dblclick(d) {
  d3.select(this).classed("fixed", d.fixed = false);
}

function dragstart(d) {
  d3.select(this).classed("fixed", d.fixed = true);
}

/*
var color = d3.scaleOrdinal(d3.schemeCategory20);

var simulation = d3.forceSimulation()
  .force("link", d3.forceLink().id(function(d) { return d.id; }).distance(60))
  .force("charge", d3.forceManyBody().strength(-100))
  .force("center", d3.forceCenter(width / 2, height / 2));

var link = svg.append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(links)
  .enter().append("line")
  .attr("stroke-width", 2);

var node = svg.append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(nodes)
  .enter().append("circle")
  .attr("r", function(d) { return d.r; })
  .attr("fill", function(d) { return color(d.group); });

var drag = simulation.drag()
  .on("dragstart", dragstart);

node.append("title")
  .text(function(d) { return d.id; });

simulation
  .nodes(nodes)
  .on("tick", ticked);

simulation.force("link")
  .links(links);

function ticked() {
  link
    .attr("x1", function (d) {
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

  node
    .attr("cx", function (d) {
      return d.x;
    })
    .attr("cy", function (d) {
      return d.y;
    });
}

function dragstarted(d) {
  console.log("dragstarted");
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  console.log("dragged");
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  console.log("dragended");
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
*/
