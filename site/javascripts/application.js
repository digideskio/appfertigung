$(document).ready(function(){
  var historyCounter = 0;

  var scrollPage = function(hash, event) {
    $target = $(hash);
    if ($target.length) {
      event.preventDefault();
      var top = ($target.offset().top + 10);
      $('html, body').animate({scrollTop:top}, 1200, 'easeInOutCubic');
      if (window.history && window.history.pushState) {
        var new_url = /\#/.test(location.href) ? location.href.replace(/\#.+/, hash) : (location.href + hash),
            stateObj = { count : historyCounter };
        window.history.pushState(stateObj, 'page-' + historyCounter, new_url);
      }
    }
  };

  $('a[href*="#"]').click(function(event) {
    scrollPage(this.hash, event);
  });

  $('#nav').scrollspy({offset: 150});

  var animateAvatar = function() {
    var scrollY = $(document).scrollTop();
    var opacity = (scrollY - $('#intro').offset().top) * 0.005;
    if (opacity < 0) opacity = 0;
    else if (opacity > 1) opacity = 1;
    $('li#home').css('opacity', opacity);
  };

  $(window).load(animateAvatar).scroll(animateAvatar);

  $('.member img').load(function() {
    var degree = (Math.random()*2-1)*2;
    $(this).css({ '-webkit-transform': 'rotate(' + degree + 'deg)'});
    $(this).css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
    $(this).css({ '-ms-transform': 'rotate(' + degree + 'deg)'});
    $(this).css({ 'transform': 'rotate(' + degree + 'deg)'});
  });

});