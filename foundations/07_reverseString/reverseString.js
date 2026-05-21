const reverseString = function (string) {
  let temp = "";
  for (let i = string.length - 1; i >= 0; i--) {
    temp += string[i];
  }

  return temp;
};

// Do not edit below this line
module.exports = reverseString;
