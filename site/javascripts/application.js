// ready for refactoring
// should also run onhashchange
$(document).ready(function(){
  var history_counter = 0;    
  $('a[href*=#]').click(function(event) {
      $targetElem = $(this.hash);
      if($targetElem.length){
        event.preventDefault();
        $targetTop = $targetElem.offset().top + 8;
        $('html, body').animate({scrollTop: $targetTop}, 1200, 'easeInOutCubic')
        if (window.history && window.history.pushState){
            var new_url = /\#/.test(location.href) ? location.href.replace(/\#.+/, this.hash) : location.href+this.hash,
                stateObj = { count : history_counter };
            window.history.pushState(stateObj, 'page-'+history_counter, new_url) 
        }
      }    
  });
  
  // team animation
  var animateMember = function(element, direction, valY) {
    var offY = element.offset().top;
    element.css(direction, '-' + (offY - valY) + 'px');
  };
  var animateTeam = function() { 
    var scrollY = $('body').scrollTop();
    var teamY   = $('#team').offset().top;
    var startY  = teamY - $(window).height();
    var finalY  = $(window).height() / 1.5;
    var valY    = scrollY - startY + finalY;
    $('#team ul li.member:even').each(function() {
      animateMember($(this), 'left', valY);
    });
    $('#team ul li.member:odd').each(function() {
      animateMember($(this), 'right', valY);
    });
  };
  
  $(window).scroll(animateTeam);
  $(window).resize(animateTeam);
  animateTeam();
})    