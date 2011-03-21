$(document).ready(function(){
  var history_counter = 0;    
  
  var scrollPage = function(hash) {
    $target = $(hash);
    if ($target.length) {
      console.debug(hash);
      event.preventDefault();
      $('html, body').animate({scrollTop: ($target.offset().top - 30)}, 1200, 'easeInOutCubic');
      if (window.history && window.history.pushState) {
        var new_url = /\#/.test(location.href) ? location.href.replace(/\#.+/, hash) : (location.href + hash),
            stateObj = { count : history_counter };
        window.history.pushState(stateObj, 'page-' + history_counter, new_url);
      }
    }
  };
  
  $('a[href^="#"]').click(function(event) {
    scrollPage(this.hash);
  });
  
  // window.onhashchange = function() {
  //   scrollPage(location.hash);
  // };
  
  var animateAvatar = function() {
    var scrollY = $('body').scrollTop();
    var opacity = (scrollY - $('#intro').offset().top) * 0.005;
    if (opacity < 0) opacity = 0;
    else if (opacity > 1) opacity = 1;
    $('nav li:first-child').css('opacity', opacity);
  }
  
  $(window).scroll(animateAvatar);
  animateAvatar();
  
});