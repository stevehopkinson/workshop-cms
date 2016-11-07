var http = require('http');

var port = 3000;

var server = http.createServer();

server.listen(port, function () {
  console.log("Server is listening on port " + port + ".  Ready to accept requests!");
});
