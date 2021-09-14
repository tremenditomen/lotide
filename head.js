// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  /*if (actual === expected) {
      return console.log(`✅✅✅ assertion passed ${actual} === ${expected}`);
  
    } else {
      console.log(`🛑🛑🛑 assertion failed ${actual} !==== ${expected}`);
    }*/
};
const head = (array)=>{
  console.log(array [0]);
};
 
  
  
//console.assert(assertEqual("Lighthouse Labs", "Boot camp"))
// TEST CODE
//   assertEqual("Lighthouse Labs", "Bootcamp");
//   assertEqual(1, 1);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");