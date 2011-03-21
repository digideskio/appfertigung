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
  
  window.onhashchange = function() {
    event.preventDefault();
    return false;
    scrollPage(location.hash);
  };
  
});