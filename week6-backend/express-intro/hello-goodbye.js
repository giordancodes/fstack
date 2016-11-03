var express = require('express');
var app = express();

app.get('/hello', function(req, res) {
  res.send("Hello, " + req.query.name + "!");
});

app.get('/goodbye', function(req, res) {
  res.send("Goodbye, " + req.query.name + ". :(");
});

app.listen(8080);
