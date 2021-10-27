const flatten = (arr) => {
  let flatArr;

  flatArr = arr.flat();

  console.log("flatARR:", flatArr);
};

flatten([1, 2, [3, 4], 5, [6]]);
