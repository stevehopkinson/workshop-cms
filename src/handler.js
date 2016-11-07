module.exports = handler;

var path = require("path");
var fs = require("fs");
var querystring = require("querystring");

function handler(request, response) {
  var url = request.url;
  if (url === "/")
    url = "/index.html";
  var extension = path.extname(url).substring(1);
  var method = request.method;
  if (request.method === 'GET') {
    handleGet(url, extension, response);
  } else if (request.method === 'POST') {
    handlePost(request, response);
  }
}

function handleGet(url, extension, response) {
  response.writeHead(200, {"Content-Type": "text/" + extension});
  fs.readFile(path.join(__dirname, '..', 'public', url), function (err, file) {
    if (err) throw err;
    response.end(file);
  });
}

function handlePost(request, response) {
  response.writeHead(301, {"Location": "/"})
  var rawData = '';
  request.on('data', function(chunk) {
    rawData += chunk;
  })
  request.on('end', function() {
    var data = querystring.parse(rawData);
    console.log(data);
    response.end();
  })
}
