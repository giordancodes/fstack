var express = require('express');
var app = express();

app.get('/:operation/:num1/:num2', function(req, res) {
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  var operation = req.params.operation;
  var result;

  if (operation == 'add') {
    result = num1 + num2;
  } else if (operation == 'subtract') {
    result = num1 - num2;
  } else if (operation == 'multiply') {
    result = num1 * num2;
  } else if (operation == 'divide') {
    if (num2 == 0) {
      res.status(400);
      res.send("Can't divide by zero");
      return;
    }
    result = num1 / num2;
  } else if (operation == 'sum') {
    res.redirect('/add/' + num1.toString() + '/' + num2.toString());
    return;
  } else {
    res.status(404);
    res.send("Not a valid operation");
    return;
  }

  res.send("Your answer is " + result.toString());
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/public/calculator.html");
})

app.listen(8080);
