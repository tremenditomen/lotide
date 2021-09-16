// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//     if (actual === expected) {
//       return console.log(`✅✅✅ assertion passed ${actual} === ${expected}`);
  
//     } else {
//       console.log(`🛑🛑🛑 assertion failed ${actual} !==== ${expected}`);
//     }
//   };
//   const assertArrayEqual = function (arr1, arr2) {
//     for (i = 0; i < arr1.length; i++) {
//       if (arr1[i]!==arr2[i]){
          
//           return false
//       }
    
//    }  
  //  return true 
 // };
  
  // TEST CODE
  
  const countLetters = (word)=>{
  let result = {}
  for (let letter of word){
      if ( letter === ' '){
          continue;
      };
      if (result[letter]=== undefined){
          result[letter] =1
          
      }
      
      else{
result [letter] ++
      }
  }return result
  }
  console.log(countLetters("lighthouse in the house"))
  console.log(countLetters("lsadfjhasdkjfhaskdjfhaskh"))

//1. we need afunction that takes a word as it parameter
//2. 