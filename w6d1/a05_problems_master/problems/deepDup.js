const deepDup = (arr) => {
  let newArr = [];
  arr.forEach(function(x) {
    if (Array.isArray(x)) {
      // console.log(x);
      // console.log(deepDup(x));
      // console.log(newArr.concat(deepDup(x)));
      newArr = newArr.concat(deepDup(x));
    } else {
      newArr.push(x);
    }
  });
  return newArr;
};

console.log(deepDup([1,2,[3], 5, 6, [7,6]]));
