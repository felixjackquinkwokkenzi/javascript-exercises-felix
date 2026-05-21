const repeatString = function (string, repetition) {
  if (repetition < 0) {
    return "ERROR";
  }

  let hasil = "";
  for (let i = 1; i <= repetition; i++) {
    hasil += string;
  }

  return hasil;
};

// Do not edit below this line
module.exports = repeatString;
