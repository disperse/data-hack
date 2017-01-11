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

  // Extend setInterval to allow for immediate execution
  var originalSetInterval = window.setInterval;

  window.setInterval = function(fn, delay, runImmediately) {
    if(runImmediately) fn();
    return originalSetInterval(fn, delay);
  };

  // Start visualizations
  visLogo(); // ~2.5%
  visOne(); // ~65%
  visTwo(); // ~85%
  visThree(); // ~89%
  visFour();
  visFive();
  //visBackground(); // ~167%

  // Force appear events on page load
  $.force_appear();

  $('.dh-hidden-div').hover(function() { $('.dh-hidden-button').css('visibility', 'visible'); }, function() { $('.dh-hidden-button').css('visibility', 'hidden'); });
  $('.dh-hidden-button').bind('click', visBackground);
});
