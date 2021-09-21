const eqArrays = function (arr1, arr2) {
    for (i = 0; i < arr2.length; i++) {
      if (arr1[i]!==arr2[i]){
          
        console.log(`${arr1}!==${arr2}`)
        
          return false 

      }
    }
    console.log(`${arr1}===${arr2}`)
    return true
  };
  module.exports = eqArrays;
 