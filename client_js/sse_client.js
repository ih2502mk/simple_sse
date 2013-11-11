(function($, Drupal){
  
  Drupal.behaviors.simpleSSE = {
    attach : function (context, settings) {

      var handleUpdates = function(data) {
        console.log(data);
      };
      
      if ($('body').is(':not(".simple-sse-enabled")') && typeof window.EventSource !== 'undefined') {
        var sseUrl = settings.simple_sse.simpleSSEUrl;
        
        var es = new EventSource(sseUrl);
        es.onmessage = function (event) {
          handleUpdates(JSON.parse(event.data));
        };
      }
    }
  };
}(jQuery, Drupal));
