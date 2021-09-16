const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return console.log(`✅✅✅ assertion passed ${actual} === ${expected}`);
  
    } else {
      console.log(`🛑🛑🛑 assertion failed ${actual} !==== ${expected}`);
    }
  };
  const findKeyByValue = function(Object1, value) {
    const objectKeys = Object.keys(Object1);
    for (const key of objectKeys) {
      if (Object1[key] === value) {
        return key;
      }
    }
  };
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);