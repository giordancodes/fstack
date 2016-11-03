var http = require('http');
var url = require('url');

var server = http.createServer((req, res) =>{
	var query = url.parse(req.url, true).query;

	var num1 = parseInt(query.num1, 10);
	var num2 = parseInt(query.num2, 10);
	var equate;
	var op = query.op;

	if (op === '+'){
		equate = num1 + num2;
	} else if (op === '/'){
		equate = num1 / num2;
	} else if (op === '*'){
		equate = num1 * num2;
	} else if (op === '-'){
		equate = num1 - num2;
	}
	res.writeHead(200);
	res.end("is this thing on? " + equate);
	console.log(query);
})

server.listen(8080);