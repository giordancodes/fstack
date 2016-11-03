var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("Hello, " + req.query.name + "!");
});

app.listen(8080);
