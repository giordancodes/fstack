var http = require('http');
var url = require('url');

var server = http.createServer((req, res) => {
	var query = url.parse(req.url, true).query;
	res.writeHead(200);
	res.end("Welcome," + query.name + ".");
	console.log(query);
})

server.listen(8080);