// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
if (actual === expected){
 return console.log("✅✅✅ assertion passed " + actual + " === "+ expected)

}else {console.log("🛑🛑🛑 assertion failed " + actual + " !==== " + expected)}
};



//console.assert(assertEqual("Lighthouse Labs", "Boot camp"))
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);