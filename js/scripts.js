$( window ).load(function() {
  $('body').scrollspy({ target: '.dh-nav-top' });

  // Add parallax effect
  $(window).scroll(function(event) {
    var scrollPercent = $(window).scrollTop();
    var scrollRatio = .1;
    $('.dh-graph').css("top", "-" + (scrollPercent * scrollRatio) + "px");
  });

  // Smooth scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 45)
        }, 1000);
        return false;
      }
    }
  });

  // Start visualizations
  visLogo(); // ~2.5%
  visOne(); // ~65%
  visTwo(); // ~85%
  visThree(); // ~89%
  visBackground(); // ~167%
});
