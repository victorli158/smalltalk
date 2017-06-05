Array.prototype.myRotate = function (num) {
  const result = this;
  const rotations = num % this.length;
  for (var i = rotations; i > 0; i--) {
    result.push(this.shift());
  }

  return result;
};

console.log([1,2,3,4,5,6,7,8,9,10,11].myRotate(3));
