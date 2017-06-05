// write String.prototype.mySlice. It should take a start index and an
// (optional) end index.

String.prototype.mySlice = function (start, end = this.length) {
  let sliced = [];
  for (let i = start; i < end; i++){
    sliced.push(this[i]);
  }
  return sliced.join("");

};

// console.log("this".mySlice(1, 2));


// write Array.prototype.myReduce (analogous to Ruby's Array#inject).
Array.prototype.myReduce = function (callback) {
  let accum = this[0];
  let rest = this.slice(1);

  rest.forEach((x) => {
    accum = callback(accum, x);
  });

  return accum;
};

let multByTwo = function(accum, x) {
  return x * 2;
};

console.log(multByTwo(3));

console.log([1,2,3].myReduce(multByTwo));


// write Array.prototype.quickSort(comparator). Here's a quick refresher if
// you've forgotten how quickSort works:
//   - choose a pivot element from the array (usually the first)
//   - for each remaining element of the array:
//     - if the element is less than the pivot, put it in the left half of the
//     array.
//     - otherwise, put it in the right half of the array.
//   - recursively call quickSort on the left and right halves, and return the
//   full sorted array.

Array.prototype.quickSort = function() {
  if (this.length <= 1){
    return this;
  }
  let pivot = this[0];
  let rest = this.slice(1);

  let left = [];
  let right = [];

  rest.forEach(function(x) {
    if (x < pivot){
      left.push(x);
    } else {
      right.push(x);
    }
  });


  let sortedLeft = left.quickSort();
  let sortedRight = right.quickSort();

  let sorted = sortedLeft.concat(pivot).concat(sortedRight);
  return sorted;
};

// console.log([5,4,3,2,1].quickSort());

// write myFind(array, callback). It should return the first element for which
// callback returns true, or undefined if none is found.

let myFind = function(array, callback) {
  let els = [];
  array.forEach(function(x) {
    if (callback(x)){
      els.push(x);
    }
  });
  if (els.length > 0){
    return els[0];
  } else {
    return undefined;
  }
};

// write sumNPrimes(n)
let primes = function(num) {
  let prime = true;
  let n = 2;
  for(let i = n; i < num; i++){
    if (num % i === 0){
      prime = false;
    }
  }

  return prime;
};

let sumNPrimes = function(n) {
  let primeNums = [];
  let i = 2;
  while (primeNums.length < n){
    if (primes(i)){
      primeNums.push(i);
    }
    i++;
  }

  let sum = 0;
  primeNums.forEach(function (x) {
    sum += x;
  });

  return sum;
};

// console.log(sumNPrimes(3));
// write Function.prototype.myBind.
Function.prototype.myBind = function () {
  let bindArgs = Array.from(arguments);
  let obj = bindArgs[0];
  let func = this;
  let callThis = function () {
    let callArgs = Array.from(arguments);
    let totalArgs = bindArgs.slice(1).concat(callArgs);
    return func.apply(obj, totalArgs);
  };
  return callThis;
};

// write Function.prototype.inherits.
Function.prototype.inherits = function(child, parent) {

};
