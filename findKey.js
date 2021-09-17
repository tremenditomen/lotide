


const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return console.log(`✅✅✅ assertion passed ${actual} === ${expected}`);
  
    } else {
      console.log(`🛑🛑🛑 assertion failed ${actual} !==== ${expected}`);
    }
  };
  


const findKey = (object, callBack)=> {
    const objectKeys = Object.keys(object);
    for (const key in objectKeys) {
      if (callBack(object[objectKeys[key]])) {
        return objectKeys[key];
      }
    }
    return undefined
  };



assertEqual((findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) // => "noma"
))