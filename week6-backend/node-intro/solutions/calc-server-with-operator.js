var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var query = url.parse(req.url, true).query;
  var num1 = parseInt(query.num1);
  var num2 = parseInt(query.num2);
  var operator = query.operator;
  var answer;

  if (operator == '+') {
    answer = num1 + num2;
  } else if (operator == '-') {
    answer = num1 - num2;
  } else if (operator == '/') {
    answer = num1 / num2;
  } else if (operator == '*') {
    answer = num1 * num2;
  }

  res.writeHead(200);
  res.end('Your answer is ' + answer);
});

server.listen(8080);
