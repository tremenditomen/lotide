
const eqArrays = function (arr1, arr2) {
    for (i = 0; i < arr2.length; i++) {
      if (arr1[i]!==arr2[i]){
  
          return false
      }
    }
    return true 
  };
  
  console.log(eqArrays([1, 2, 3], [1, 2, 3])) // true
  console.log(eqArrays([1, 2, 3], [3, 2, 1])) // false
  console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]))// true
  console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))// false
  