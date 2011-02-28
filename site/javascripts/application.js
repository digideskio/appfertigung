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
  })
})    