var express = require('express');
var app = express();

app.get('/hello', (req, res) => {
  res.send("Hello, " + req.query.name + "!");
});

app.get('/goodbye', (req, res) => {
	res.send("Goodbye, " + req.query.name + "!");
});

app.get('/hello/:name/:lastname', (req, res) =>{
	res.send("Hello, " + req.params.name + " " + req.params.lastname + "!");
})

// Route priority cascades, so wildcards should be at the bottom
app.get('*', (req, res) => {

});



app.listen(8080);