jQuery(document).ready(function($) {
  // grab the initial top offset of the navigation
  var stickyNavTop = $('.sg-nav-container').offset().top;
  var navHeight = $('.sg-nav-container').height();

  // our function that decides weather the navigation bar should have "fixed" css position or not.
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop(); // our current vertical position from the top

    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative
    if (scrollTop > stickyNavTop) {
      $('.sg-nav-container').addClass('sticky');
      $('.layout-container').css('margin-top',navHeight);
    } else {
      $('.sg-nav-container').removeClass('sticky');
      $('.layout-container').css('margin-top',0);
    }
  };

  stickyNav();
  // and run it again every time you scroll
  $(window).scroll(function() {
    stickyNav();
  });



})




jQuery(document).ready(function($) {

  $('.sg-about-icon-avatar').click(function(event) {
    var tid = event.target.id;
    var offset = $('#team-member-'+tid).offset();
    $("html, body").animate({
      scrollTop: offset.top-145
    }, {
    duration: 1000
    });
    console.log(offset.top);
  });

})
