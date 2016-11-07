var http = require('http');
var fs = require('fs');

var port = 3000;

var server = http.createServer(handler);

var message = "Code on, code on, with node in your hearts, and you'll never code alone.";
var nodeMessage = "Node on!";
var girlsMessage = "Go girls!";

function handler (request, response) {
  var endpoint = request.url;
  var method = request.method;
  console.log("Endpoint: " + endpoint + ", Method: " + method);
  if (endpoint === "/") {
    response.writeHead(200, {"Content-Type": "text/html"});

    fs.readFile(__dirname + '/public/index.html', function (error, file) {
      if (error) {
        console.log(error);
        return;
      }
      response.end(file);
    })
  }
}

server.listen(port, function () {
  console.log("Server is listening on port " + port + ".  Ready to accept requests!");
});
