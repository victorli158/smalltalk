Array.prototype.bubbleSort = function() {
  let sorted = true;
  for(let i = 0; i + 1 < this.length; i++){
    if (this[i] > this[i+1]){
      let temp = this[i];
      this[i] = this[i + 1];
      this[i + 1] = temp;
      sorted = false;
    }
  }

  if (sorted){
    return this;
  } else {
    return this.bubbleSort();
  }
};

console.log([1,6,3,8,6,5,10].bubbleSort()); // [1,3,5,6,6,8.10]
