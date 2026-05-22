const removeFromArray = function (arr, ...itemsToRemove) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (!itemsToRemove.includes(arr[i])) {
      temp.push(arr[i]);
    }
  }

  return temp;
};

// Do not edit below this line
module.exports = removeFromArray;
