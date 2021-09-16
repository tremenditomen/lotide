const { equal } = require('assert')

const eqObjects = (object1,object2)=>{
    let object1keyarr = Object.keys(object1)
    let object2keyarr = Object.keys(object2)
    if (object1keyarr.length !== object2keyarr.length) {
        return false
    }else{
        for(let checking of object1keyarr){
            if (object1[checking]!==object2[checking]){
                
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
    const assertObjectsEqual = function(actual, expected) {
        const inspect = require('util').inspect;
        // console.log(`Example label: ${inspect(actual)}`);
            
        if (eqObjects(actual , expected) ) {
                   console.log(`✅✅✅ assertion passed ${inspect(actual)}=== ${inspect(expected)}`);
                
                  } else {
                    console.log(`🛑🛑🛑 assertion failed ${inspect(actual)} !=== ${inspect(expected)}`);
                  }
              };
      
              const ab = { a: "1", b: "2" };
              const ba = { b: "2", a: "1" };
              assertObjectsEqual(ab, ba); // => true
              
              const abc = { a: "1", b: "2", c: "3" };
              assertObjectsEqual(ab, abc); // => false
      
              

      
  