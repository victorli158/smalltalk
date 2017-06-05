//Hint: quicksort checks by pivoting!
//Hint 2: The solution is a bit different than the solution in Ruby!


Array.prototype.quickSort = function () {
  if (this.length <= 1){
    return this;
  }
  let pivot = this[0];
  let right = [];
  let left = [];
  this.slice(1).forEach(x => {
    if(x < pivot){
      left.push(x);
    } else {
      right.push(x);
    }
  });

  return left.quickSort().concat([pivot]).concat(right.quickSort());
};

// this call back is essentially the prc we would pass in ruby.


const test = [7,3,5,2,8,1,9,3,4,].quickSort();
console.log(test);
