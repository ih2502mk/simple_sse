(function($){

var handleUpdates = function(data) {
  console.log(data);
}

var es = new EventSource("/sse");
es.onmessage = function (event) {
  handleUpdates(JSON.parse(event.data));
};

}(jQuery));
