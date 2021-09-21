const middle = (arrmid) => {
  if (arrmid.length <= 2) {
    return [];
  } else if (arrmid.length % 2 === 0) {
    return [
      arrmid[Math.ceil(arrmid.length / 2) - 1],
      arrmid[Math.ceil(arrmid.length / 2)],
    ];
  } else {
    return [arrmid[Math.floor(arrmid.length / 2)]];
  }
};
module.exports = middle;
