// Write a recursive method that returns the first "num" factorial numbers.
// Note that the 1st factorial number is 0!, which equals 1. The 2nd factorial
// is 1!, the 3rd factorial is 2!, etc.

const factorialsRec = (num) => {
  if (num <= 2) {
    return [1, 1].slice(0, num);
  }

  let prevFact = factorialsRec(num - 1);
  console.log(prevFact);
  prevFact.push(prevFact[prevFact.length - 1] * (num - 1));
  return prevFact;
};

console.log(factorialsRec(5)); // [1,1,2,6,24]
