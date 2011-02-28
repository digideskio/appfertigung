$(document).ready(function(){
  $('a[href*=#]').click(function(event) {
      $targetElem = $(this.hash);
      if($targetElem.length){
        event.preventDefault();
        $targetTop = $targetElem.offset().top
        $('html, body').animate({scrollTop: $targetTop}, 1200, 'easeInOutCubic')
      }    
  })
})    