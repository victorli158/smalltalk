Array.prototype.mySelect = function (cb) {
  let select = [];
  this.forEach(x => {
    if (cb(x)){
      select.push(x);
    }
  });
  return select;
};

//tester callback
function lessThan10(num){
  return num < 10;
}

console.log([1,2,3,4,12,13,14].mySelect(lessThan10));
