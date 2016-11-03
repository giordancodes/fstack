var express = require('express');
var app = express();

app.get('/api/*', function(req, res) {
  res.send("You're calling the API endpoint " + req.path);
});

app.get('*', function(req, res) {
  res.sendFile(__dirname + "/public" + req.path);
})

app.listen(8080);
