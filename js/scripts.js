$( window ).load(function() {
  $('body').scrollspy({ target: '.dh-nav-top' });

  // Add parallax effect
  $(window).scroll(function(event) {
    var scrollPercent = $(window).scrollTop();
    var scrollRatio = .1;
    $('.dh-graph').css("top", "-" + (scrollPercent * scrollRatio) + "px");
  });

  // Start visualizations
  visLogo(); // ~2.5%
  visOne(); // ~65%
  visTwo(); // ~85%
  visThree(); // ~89%
  visBackground(); // ~167%
});
