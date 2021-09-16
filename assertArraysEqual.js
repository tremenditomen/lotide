const eqArrays = function (arr1, arr2) {
  for (i = 0; i < arr2.length; i++) {
    if (arr1[i]!==arr2[i]){

        return false
    }
  }
  return true 
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1 , arr2)) {
     console.log(`✅✅✅ assertion passed ${arr1} === ${arr2}`);
  
    } else {
      console.log(`🛑🛑🛑 assertion failed ${arr1} !=== ${arr2}`);
    }
};
 assertArraysEqual([1,2,3],[1,2,3])