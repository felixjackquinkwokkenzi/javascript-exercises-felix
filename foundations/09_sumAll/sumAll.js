const sumAll = function (a, b) {
  if (
    a < 0 ||
    !Number.isInteger(a) ||
    Number.isNaN(a) ||
    b < 0 ||
    !Number.isInteger(b) ||
    Number.isNaN(b)
  )
    return "ERROR";

  let total = 0;

  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }

  for (let i = a; i <= b; i++) {
    total += i;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
