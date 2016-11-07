var http = require('http');
var fs = require('fs');
var path = require('path');
var querystring = require('querystring');
var handler = require('./src/handler.js');

var port = 3000;

var server = http.createServer(handler);

server.listen(port, function () {
  console.log("Server is listening on port " + port + ".  Ready to accept requests!");
});
