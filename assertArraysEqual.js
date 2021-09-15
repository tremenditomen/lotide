const eqArrays = require('./eqArrays')
const assertArraysEqual = function (actual, expected) {
    if (eqArrays(actual , expected)) {
       console.log(`✅✅✅ assertion passed ${actual} === ${expected}`);
    
      } else {
        console.log(`🛑🛑🛑 assertion failed ${actual} !==== ${expected}`);
      }
};
assertArraysEqual([1,2,3],[1,2,3])
module.exports = assertArraysEqual