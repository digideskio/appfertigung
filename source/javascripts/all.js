//= require ./vendor/_bootstrap-scrollspy
//= require ./_lib/_scroll_push
//= require ./_lib/_animate_avatar


$(document).ready(function(){
  var getOffset = function(){
    offset =  ($('#navbar').height());
    return offset;
  };
  $('body').scrollspy({target: '#navbar', offset: getOffset()+300  } );

  $('a[href*="#"]').click(function(event) {
    scrollPush(this.hash, event);
  });

  $(window).load(animateAvatar).scroll(animateAvatar);

  $('.member img').load(function() {
    var degree = (Math.random()*2-1)*2;
    $(this).css({ '-webkit-transform': 'rotate(' + degree + 'deg)'});
    $(this).css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
    $(this).css({ '-ms-transform': 'rotate(' + degree + 'deg)'});
    $(this).css({ 'transform': 'rotate(' + degree + 'deg)'});
  });

  $('.nav-toggle').click(function(){
    $('.nav').slideToggle(300);
  });

});
