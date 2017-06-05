// Write a String#symmetric_substrings method that returns an array of substrings
// that are palindromes, e.g. "cool". symetricSubstrings => ["oo"]
// Only include substrings of length > 1.


String.prototype.symetricSubstrings = function () {
  let subs = [];
  for(let i = 0; i < this.length; i++){
    for(let j = i + 2; j < this.length; j++){
      if (this.slice(i, j).split("").reverse().join("") === this.slice(i, j)){
        subs.push(this.slice(i, j));
      }
    }
  }
  return subs;
};

console.log("cool".symetricSubstrings()); // ['oo']
