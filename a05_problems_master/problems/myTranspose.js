Array.prototype.myTranspose = function () {
  let transposed = [];
  for(let i = 0; i < this[0].length; i++){
    let newRow = [];
    for(let j = 0; j < this.length; j++){
      newRow.push(this[j][i]);
    }
    transposed.push(newRow);
  }
  return transposed;
};

console.log([[0, 1, 2, 4], [3, 4, 5, 6]].myTranspose());
//[ [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ] ]
