// Add your own myJoin to the ArrayClass. If no arg is given,
// set the seperator to "".



Array.prototype.myJoin = function (separator = "") {
  let joinedString = "";
  this.forEach((word) => {
    joinedString = joinedString.concat(word).concat(separator);
  });
  if (separator === ""){
    return joinedString;
  } else {
    return joinedString.slice(0, joinedString.length - 1);
  }
};

console.log([1,2,3].myJoin());
console.log(["javascript","is","weird"].myJoin(" "));
