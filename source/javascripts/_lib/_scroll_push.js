  var historyCounter = 0;

  //  Das animierte Scrollen flackert unter iOS total fies!
  //  derzeit kein Fix machbar, auffindbar, verfügbar; deshalb: keine Animation unter iOS/Android:
  var uglyFlickeringBrowser = (/android|ipod|iphone|ipad/gi).test(navigator.appVersion),

  scrollPush = function(hash, event) {
    $target = $(hash);
    topOffset = $('#navbar').height()*0.9;
    if ($target.length) {
      var top = ($target.offset().top - topOffset);
      event.preventDefault();
      if (uglyFlickeringBrowser){
        window.scrollTo(0, top)
      }
      else{
        $('body,html,document').animate({scrollTop:top},
          1200,
          'easeInOutCubic'
        );
      }
      if (window.history && window.history.pushState) {
        var new_url = /\#/.test(location.href) ? location.href.replace(/\#.+/, hash) : (location.href + hash),
            stateObj = { count : historyCounter };
        window.history.pushState(stateObj, 'page-' + historyCounter, new_url);
      }
    }
  };
