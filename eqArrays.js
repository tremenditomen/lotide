const assertEqual = function (actual, expected) {};

const eqArrays = function (arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i]!==arr2[i]){
        
        return false
    }
  
  }  
  return true 
};

// TEST CODE

//eqArrays([1, 2, 3], [1, 2, 3]) // => true
//eqArrays([1, 2, 3], [3, 2, 1]) // => false

  console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
  console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
//assertEqual(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]))
console.log(eqArrays([1, 2, 3], [1, 2, 3]) )
