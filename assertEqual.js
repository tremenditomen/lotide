// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ assertion passed ${actual} === ${expected}`);

  } else {
    console.log(`🛑🛑🛑 assertion failed ${actual} !==== ${expected}`);
  }
};
const assertArrayEqual = function (arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i]!==arr2[i]){
        
        return false
    }
  
  }  
  return true 
};

// TEST CODE

