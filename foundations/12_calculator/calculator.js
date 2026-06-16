const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	const total = arr.reduce(function (acc, num){
    return acc + num;
  }, 0);

  return total;
};

const multiply = function(arr) {
  const total = arr.reduce(function (acc, num) {
    return acc * num;
  }, 1);

  return total;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
  if(num === 0) return 1;

  const result = num * factorial(num - 1);
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
