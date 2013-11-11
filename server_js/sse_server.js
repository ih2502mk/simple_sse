var http = require('http');
var express = require('express');
var sse = require('sse');
var app = express();
var port = process.argv[2] ? process.argv[2] : 8080;
var docRoot = './public';
var clients = [];

app.configure(function() {  
  app.use(express.urlencoded());
});

app.post('/update', function(req, res, next){
  var updBody = JSON.stringify(req.body);
  
  clients.forEach(function(client, i){
    client.send(updBody);
  });
  
  next();
});

// SSE realted setup
var httpServer = http.createServer(app);
var sseServer = new sse(httpServer);
sseServer.on('connection', function(client) {
  clients.push(client);  
  
  client.on('close', function() {
    
    var idx = clients.indexOf(client);
    clients.splice(idx, 1);
  });
});

httpServer.listen(port);