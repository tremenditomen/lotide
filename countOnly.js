
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ assertion passed ${actual} === ${expected}`);

  } else {
    console.log(`🛑🛑🛑 assertion failed ${actual} !==== ${expected}`);
  }
};
// const assertArrayEqual = function (arr1, arr2) {
//   for (i = 0; i < arr1.length; i++) {
//     if (arr1[i]!==arr2[i]){
        
//         return false
//     }
  
//   }  
//   return true 
// };

// TEST CODE

const countOnly = (allItems, itemsToCount)=> {
const results = {};
for (const item of allItems){
    
    if (itemsToCount[item]){
    
        if(results[item]){
        results[item] += 1;

    }else {
        results[item]=1;
    }
    }
    
    console.log(item);
}
return results;
}
const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);

