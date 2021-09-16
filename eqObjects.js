const assertEqual = function(actual, expected) {
    if (actual === expected) {
       console.log(`✅✅✅ assertion passed ${actual} === ${expected}`);
  
    } else {
      console.log(`🛑🛑🛑 assertion failed ${actual} !==== ${expected}`);
    }
  };
  
  
  
  
  
const eqArrays = function (arr1, arr2) {
    for (i = 0; i < arr2.length; i++) {
      if (arr1[i]!==arr2[i]){
  
          return false
      }
    }
    return true 
  };
  
  
  const eqObjects = (object1,object2)=>{
      let object1keyarr = Object.keys(object1)
      let object2keyarr = Object.keys(object2)
      if (object1keyarr.length !== object2keyarr.length) {
          return false
      }else{
          for(let checking of object1keyarr){
              if (object1[checking]!==object2[checking]){
                  console.log(`in the arrays:`)
                  if (Array.isArray(object1[checking]) && Array.isArray(object2[checking])){
                    if(eqArrays(object1[checking], object2[checking])===false){
                         return false
                    }
                }else{
                    return false
                }
                 

              }
              
                 
          } 
              }
         return true    
      }
      
  
  
//   const ab = { a: "1", b: "2" };
//   const ba = { b: "2", a: "1" };
//   console.log(assertEqual(eqObjects(ab, ba), true)); // => true
  
//   const abc = { a: "1", b: "2", c: "3" };
//  console.log(assertEqual(eqObjects(ab, abc), false)); // => false
 
//  const cd = { a: "2", b: "2" };
//   const dc = { b: "2", a: "1" };
//   console.log(assertEqual(eqObjects(cd, dc), false));


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
