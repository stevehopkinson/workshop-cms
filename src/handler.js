module.exports = handler;

var path = require('path');
var fs = require('fs');
var querystring = require('querystring');

function handler (request, response) {
  var endpoint = request.url;
  if (endpoint === "/")
    endpoint = "/index.html";
  var extension = path.extname(endpoint).substring(1);
  var method = request.method;
    console.log("Endpoint: " + endpoint + ", Method: " + method);

  if (method === "GET") {
    response.writeHead(200, {"Content-Type": "text/" + extension});
    fs.readFile(path.join(__dirname , '..' , 'public' , endpoint), function (error, file) {
      if (error) {
        console.log(error);
        return;
      }
      response.end(file);
    })
  } else if (method === "POST") {
    response.writeHead(301, {"Location": "http://localhost:3000"});
    var data = '';

    request.on('data', function (chunk) {
      data += chunk;
    })

    request.on('end', function () {
      var parsedData = querystring.parse(data);
      console.log(parsedData);
      response.end();
    })
  }
}
