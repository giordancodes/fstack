var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var query = url.parse(req.url, true).query;
  res.writeHead(200);
  var num1 = parseInt(query.num1);
  var num2 = parseInt(query.num2);
  var answer = num1 + num2;

  res.end('Your answer is ' + answer);
});

server.listen(8080);
