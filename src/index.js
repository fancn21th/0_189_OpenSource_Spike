var uniqueRandomArray = require("unique-random-array");
var numbers = require("./numbers");

module.exports = {
  all: numbers,
  random: uniqueRandomArray(numbers),
};
