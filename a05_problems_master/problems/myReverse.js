Array.prototype.myReverse = function () {
  let reversed = [];
  this.forEach((x) => {
    reversed.unshift(x);
  });
  return reversed;
};

console.log([1,2,3,4].myReverse());
