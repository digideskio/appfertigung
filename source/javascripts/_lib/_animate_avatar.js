  var animateAvatar = function() {
    var scrollY = $(document).scrollTop();
    var opacity = (scrollY - $('#intro').offset().top) * 0.005;
    if (opacity < 0) opacity = 0;
    else if (opacity > 1) opacity = 1;
    $('.nav-brand').css('opacity', opacity);
  };
