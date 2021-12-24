var expect = require("chai").expect;
var fyjRandomNumber = require("./index.js");

describe("fyjRandomNumber", function () {
  describe("all", function () {
    it("should be an array of integers", function () {
      expect(fyjRandomNumber.all).to.satisfy(isArrayOfIntegers);

      function isArrayOfIntegers(array) {
        return array.every(function (element) {
          return typeof element === "number" && element % 1 === 0;
        });
      }
    });
  });

  describe("random", function () {
    it("should return an random number", function () {
      var randomNumber = fyjRandomNumber.random();
      expect(fyjRandomNumber.all).to.include(randomNumber);
    });
  });
});
