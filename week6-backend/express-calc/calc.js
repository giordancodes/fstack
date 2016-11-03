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
	res.send(`Division of ${num1} and ${num2} is ${num1 / num2}`);
});

app.listen(8080);