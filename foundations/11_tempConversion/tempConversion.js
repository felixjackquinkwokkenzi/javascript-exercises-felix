const convertToCelsius = function (temperature) {
  const value = ((temperature - 32) * 5) / 9;
  return Number(value.toFixed(1));
};

const convertToFahrenheit = function (temperature) {
  const value = (temperature * 9) / 5 + 32;
  return Number(value.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
