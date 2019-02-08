function add (a, b) {
	return Number(a + b);
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce(function(a, b) {
		return a + b
	}, 0);
}

function multiply (array) {
	return array.reduce((a, b) => a * b);
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	if (a === 0 || a === 1)
	return 1;
	let product = 1;
	for (let i = a; i > 0; i--) {
		a = a * i;
		product *= i;
	}
	return product;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}