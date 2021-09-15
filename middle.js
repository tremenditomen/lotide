
const middle = (arrmid) => {
    if (arrmid.length <= 2) {
      return [];
    } else if (arrmid.length % 2 === 0) {
      return [arrmid[Math.ceil(arrmid.length / 2) - 1], arrmid[Math.ceil(arrmid.length / 2)]];
    } else {
      return [arrmid[Math.floor(arrmid.length / 2)]];
    }
  };console.log(`this should return two values:${middle([1, 2, 3, 4])}`)
  console.log(`this should return one value:${middle([1, 2, 3, 4, 5]) }`)
  console.log(`this should return no values:${middle([1, 2]) }`)
