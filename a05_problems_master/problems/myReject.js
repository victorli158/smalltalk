Array.prototype.myReject = function (cb) {
  let rejected = [];
  this.forEach((x) => {
    if (!cb(x)){
      rejected.push(x);
    }
  });
  return rejected;
};

//tester callback
function lessThan10(num){
  return num < 10;
}

console.log([1,2,3,4,12,13,14].myReject(lessThan10));
