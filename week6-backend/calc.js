var num1 = parseInt(process.argv[2], 10);
var num2 = parseInt(process.argv[3], 10);
var op = process.argv[4];
var equate;


if (op === '+'){
	equate = num1 + num2;
} else if (op === '/'){
	equate = num1 / num2;
} else if (op === 'x'){
	equate = num1 * num2;
} else if (op === '-'){
	equate = num1 - num2;
}


console.log(equate, op);