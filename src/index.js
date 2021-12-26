// comment
import uniqueRandomArray from "unique-random-array";
import numbers from "./numbers";
const getRandomItem = uniqueRandomArray(numbers);

module.exports = {
  all: numbers,
  random: random,
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  }
  var randomItems = [];
  for (var i = 0; i < number; i++) {
    randomItems.push(getRandomItem());
  }
  return randomItems;
}
