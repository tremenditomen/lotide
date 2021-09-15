//const eqArrays = require('./eqArrays')
const assertArraysEqual = function (arr1, arr2) {
    if (eqArrays(arr1 , arr2)) {
       console.log(`✅✅✅ assertion passed ${arr1} === ${arr2}`);
    
      } else {
        console.log(`🛑🛑🛑 assertion failed ${arr1} !=== ${arr2}`);
      }
};

const eqArrays = function (arr1, arr2) {
  if(arr1.length!==arr2.length){
      return false
  }
    for (i = 0; i < arr1.length; i++) {
    if (arr1[i]!==arr2[i]){
        
        return false
    }
  
  }  
  return true 
};
const without = function (source, remove){
    let stored =[]
    for(i=0;i<source.length; i++){
        if (remove[i] !== source[i]){
            stored.push(source[i])
        }
    }
    return stored
}
assertArraysEqual([1,2,3],[1,2,3])
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1,2,3],[1]),[2,3])
assertArraysEqual(without([1,2,3,],[1,2]),[3])