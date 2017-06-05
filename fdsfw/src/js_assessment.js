// Write a function, `longestSymmetricSubstring(string)`, that returns the
// longest substring that is the same forwards and in reverse (for example,
// "abba"). If two substrings are the same length, take the first one.

let longestSymmetricSubstring = function(string){
  let substrings = [];
  for(let i = 0; i < string.length; i++){
    for(let j = string.length; j > i; j--){
      if(string.slice(i, j) === string.slice(i, j).split("").reverse().join("")){
        substrings.push(string.slice(i, j));
      }
    }
  }
  return substrings[0];
};

console.log(longestSymmetricSubstring('xabax'));

// Write an Array function, myEach(callback), that passes each element to
// `callback` before returning the original array. Do NOT call the built-in
// Array#forEach method in your implementation.
Array.prototype.myEach = function(cb){
  for(let i = 0; i < this.length; i++){
    cb(this[i]);
  }
  return this;
};

// Write a an Array method, myMap, that takes a callback and returns a new array
// containing the result of the callback for each element in the array. Use the
// Array#myEach method you defined above. Do NOT call the built-in Array#forEach
// or Array#map methods in your implementation.
Array.prototype.myMap = function(cb){
  let newArr = [];
  this.myEach(x => {
    newArr.push(cb(x));
  });
  return newArr;
};

// Write a function `pairMatch(array, callback)`. It should return all pairs
// of indices ([i, j]) for which `callback(array[i], array[j])` returns true.

// NB: Keep in mind that the order of the arguments to the callback may matter.
// e.g., callback = function(a, b) { return a < b }

let pairMatch = function(array, callback){
  let pairs = [];
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(callback(array[i], array[j])){
        pairs.push([i, j]);
      }
    }
  }
  let newPairs = [];
  pairs.forEach(x => {
    if (x[0] !== x[1]){
      newPairs.push(x);
    }
  });
  return newPairs;
};

// Write an Array method that merge sorts an array. It should take an optional
// callback that compares two elements, returning -1 if the first element should
// appear before the second, 0 if they are equal, and 1 if the first element
// should appear after the second. Define and use a helper method,
// merge(left, right, comparator), to merge the halves. Make sure that merge is
// defined on the window. Do NOT call the built-in Array#sort method in your
// implementation.
//
// Here's a summary of the merge sort algorithm:
//
// Split the array into left and right halves, then merge sort them recursively
// until a base case is reached. Use a helper method, merge, to combine the
// halves in sorted order, and return the merged array.
Array.prototype.mergeSort = function(comparator) {
  if (this.length <= 1) {
    return this;
  }


  if (typeof comparator !== 'function'){
    comparator = (x, y) => {
      if (x < y) {
        return -1;
      } else if (x === y){
        return 0;
      } else if (x > y) {
        return 1;
      }
    };
  }

  let mid = Math.floor(this.length / 2);
  let left = this.slice(0, mid);
  let right = this.slice(mid);

  let sortedLeft = left.mergeSort(comparator);
  let sortedRight = right.mergeSort(comparator);

  return merge(sortedLeft, sortedRight, comparator);
};

function merge(left, right, comparator) {
  if (typeof comparator !== 'function'){
    comparator = (x, y) => {
      if (x < y) {
        return -1;
      } else if (x === y){
        return 0;
      } else if (x > y) {
        return 1;
      }
    };
  }
  let merged = [];
  while(left.length > 0 && right.length > 0){
    if(comparator(left[0], right[0]) === -1){
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  return merged.concat(left).concat(right);
};

// console.log(merge([2,4,7], [3]));



// write a Function method, myBind(context). It should return a copy of the
// original function, where `this` is set to `context`.
Function.prototype.myBind = function(ctx, ...bindArgs){
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};

// write a Function method, inherits(ParentClass). It should extend the methods
// of `ParentClass.prototype` to the constructor function it is called on.
Function.prototype.inherits = function(ParentClass){
  this.prototype = Object.create(ParentClass.prototype);
  this.prototype.constructor = this;
};

// write a method, `myCurry(fn, object, numArgs)`, that curries the
// function. Remember that a curried function is invoked with one argument at a
// time. For example, the curried form of `sum(1, 2, 3)` would be written as
// `curriedSum(1)(2)(3)`. After `numArgs` have been passed in, invoke the
// original `fn` with the accumulated arguments, using `object` as the
// context.

let myCurry = function(fn, object, numArgs) {
  let args = [];
  let _curry = (n) => {
    args.push(n);
    if (args.length === numArgs){
      return fn.apply(object, args);
    } else {
      return _curry;
    }
  };
  return _curry;
};
