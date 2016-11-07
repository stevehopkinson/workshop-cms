var http = require('http');

var port = 3000;

var server = http.createServer(handler);

var message = "I am so happy to be part of the Node Girls workshop.";

function handler (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(message);
  response.end();
}

server.listen(port, function () {
  console.log("Server is listening on port " + port + ".  Ready to accept requests!");
});
