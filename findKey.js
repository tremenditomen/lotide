const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ assertion passed ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 assertion failed ${actual} !==== ${expected}`);
  }
};

const findKey = (object, callBack) => {
  for (const key in object) {
    if (callBack(object[key])) {
      console.log(key);
    }
    console.log("undefined");
  }
};

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  )
);
