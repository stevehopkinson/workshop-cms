var http = require('http');
var fs = require('fs');
var path = require('path');

var port = 3000;

var server = http.createServer(handler);

function handler (request, response) {
  var endpoint = request.url;
  if (endpoint === "/")
    endpoint = "/index.html";
  var extension = path.extname(endpoint).substring(1);
  var method = request.method;
  console.log("Endpoint: " + endpoint + ", Method: " + method);

  response.writeHead(200, {"Content-Type": "text/" + extension});

  fs.readFile(__dirname + '/public' + endpoint, function (error, file) {
    if (error) {
      console.log(error);
      return;
    }
    response.end(file);
  })
}

server.listen(port, function () {
  console.log("Server is listening on port " + port + ".  Ready to accept requests!");
});
