// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
   

  };
  
  const tail = function(array) {  
     array.shift()  
     console.log(array)
     return array
    
  }

  

 //console.log (tail);

  //console.assert(assertEqual("Lighthouse Labs", "Boot camp"))
  // TEST CODE
 // Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!