// const eqArrays = require('./eqArrays')
const assertArraysEqual = function (actual, expected) {
    if (eqArrays(actual , expected)) {
       console.log(`✅✅✅ assertion passed ${actual} === ${expected}`);
    
      } else {
        console.log(`🛑🛑🛑 assertion failed ${actual} !=== ${expected}`);
      }
};
assertArraysEqual([1,2,3],[1,2,3])
module.exports = assertArraysEqual
const assertEqual = function (actual, expected) {};

const eqArrays = function (arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i]!==arr2[i]){
        
        return false
    }
  
  }  
  return true 
};