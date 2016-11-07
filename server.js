var http = require('http');
var handler = require('./src/handler.js');

var port = 4000;

var server = http.createServer(handler);

server.listen(port);

console.log('server is running on port: ', port);
