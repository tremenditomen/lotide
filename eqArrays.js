const assertEqual = function (actual, expected) {};

const eqArrays = function (arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i]!==arr2[i]){
        
        return false
    }
  
  }  
  return true 
};
module.exports= eqArrays

// TEST CODE

//eqArrays([1, 2, 3], [1, 2, 3]) // => true
//eqArrays([1, 2, 3], [3, 2, 1]) // => false

  