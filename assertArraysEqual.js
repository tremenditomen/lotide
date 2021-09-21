const eqArrays = require("./eqArrays");
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`✅✅✅ assertion passed ${arr1} === ${arr2}`);
  } else {
    return console.log(`🛑🛑🛑 assertion failed ${arr1} !== ${arr2}`);
  }
};
module.exports = assertArraysEqual;
