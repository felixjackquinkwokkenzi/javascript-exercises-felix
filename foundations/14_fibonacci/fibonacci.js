const fibonacci = function (number) {
  // my original function

  //   if (number < 0) {
  //     return "OOPS";
  //   }

  //   if(number === 0 || number === "0"){
  //     return 0;
  //   }

  //   let arr = [];

  //   for (let i = 0; i < number; i++) {
  //     if (i === 0) {
  //       arr.push(1);
  //     } else if (i === 1) {
  //       arr.push(0 + arr[i - 1]);
  //     } else {
  //       let value = arr[i - 2] + arr[i - 1];
  //       arr.push(value);
  //     }
  //   }

  //   return arr.at(-1);

  // optimized function

  number = parseInt(number);

  if (number < 0) return "OOPS";
  if (number === 0) return 0;

  let prev2 = 1;
  let prev1 = 1;

  for (let i = 2; i < number; i++) {
    let current = prev2 + prev1;

    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
};

// Do not edit below this line
module.exports = fibonacci;
