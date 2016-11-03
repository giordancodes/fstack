var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var query = url.parse(req.url, true).query;
  res.writeHead(200);
  res.end('Hello, ' + query.name + '!');
});

server.listen(8080);
console.log(query, res);