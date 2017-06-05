// I feel like this should actually be called 'removeDups' or 'uniq'
// but I don't make the rules I just play by them.

Array.prototype.dups = function () {
  const uniq = [];
  this.forEach(function (x) {
    if (!uniq.includes(x)) {
      uniq.push(x);
    }
  });
  return uniq;
};

console.log([1,1,1,2,2,3,4,4,3,4,5,5,5].dups()); // [1,2,3,4,5]
