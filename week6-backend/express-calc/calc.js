var express = require('express');
var app = express();

app.get('/add/:num1/:num2', (req, res) =>{
	let num1 = parseInt(req.params.num1, 10);
	let num2 = parseInt(req.params.num2, 10);
	res.send(`Addition of ${num1} and ${num2} is ${num1 + num2}`);
});

app.get('/subtract/:num1/:num2', (req, res) =>{
	let num1 = parseInt(req.params.num1, 10);
	let num2 = parseInt(req.params.num2, 10);
	res.send(`Subtraction of ${num1} and ${num2} is ${num1 - num2}`);
});

app.get('/multiply/:num1/:num2', (req, res) =>{
	let num1 = parseInt(req.params.num1, 10);
	let num2 = parseInt(req.params.num2, 10);
	res.send(`Multiplication of ${num1} and ${num2} is ${num1 * num2}`);
});

app.get('/divide/:num1/:num2', (req, res) =>{
	let num1 = parseInt(req.params.num1, 10);
	let num2 = parseInt(req.params.num2, 10);
	
	if (num2 === 0){
		res.status(400);
		res.send("You of all people should know dividing by zero is futile.");
	} else{
		res.send(`Division of ${num1} and ${num2} is ${num1 / num2}`);
	}
});

app.get('/sum/:num1/:num2', (req, res) =>{
	let num1 = parseInt(req.params.num1, 10);
	let num2 = parseInt(req.params.num2, 10);
	res.redirect(`/add/${num1}/${num2}`);
});

app.get('/add/:num1/:num2/*', (req, res) =>{
	res.status(404);
	res.send('NOPE');
})

app.listen(8080);