// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ assertion passed ${actual} === ${expected}`);
return true
  } else {
   console.log(`🛑🛑🛑 assertion failed ${actual} !== ${expected}`);
      return false
  }
  
  
};
module.exports = assertEqual;


