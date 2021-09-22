// FUNCTION IMPLEMENTATION

  
const tail = function(array) {
  array.shift();
  console.log(array);
  return array;
    
};
module.exports = tail;
  

//console.log (tail);

//console.assert(assertEqual("Lighthouse Labs", "Boot camp"))
// TEST CODE
// Test Case: Check the original array


