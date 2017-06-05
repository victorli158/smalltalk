// Write a method that returns the median of elements in an array
// If the length is even, return the average of the middle two elements

Array.prototype.median = function() {
  if (this.length % 2 === 0) {
    let first = this[Math.floor(this.length/2)];
    let second = this[Math.floor((this.length/2) - 1)];
    return ((first + second)/2);
  } else {
    return this[Math.floor(this.length/2)];
  }
};

console.log([1,2,3,4,5,6].median()); // 4.5
console.log([1,2,3,4,5].median()); // 3
