import { expect } from "chai";
import fyjRandomNumber from "./index";

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

    it("should return an array of random items by specific number", function () {
      var randomItems = fyjRandomNumber.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function (item) {
        expect(fyjRandomNumber.all).to.include(item);
      });
    });
  });
});
