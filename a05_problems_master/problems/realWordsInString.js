// Returns an array of all the subwords of the string that appear in the
// dictionary argument. The method does NOT return any duplicates.

String.prototype.realWords = function (dictionary) {
  let words = [];
  for(let i = 0; i < this.length; i++){
    for(let j = i; j < this.length; j++){
      if(dictionary.includes(this.slice(i, j))){
        words.push(this.slice(i, j));
      }
    }
  }
  return words;
};

console.log("asdfcatqwer".realWords(["cat", "car"]));
