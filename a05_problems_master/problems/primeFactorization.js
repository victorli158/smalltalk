// Write a recursive function that returns the prime factorization of
// a given number. Assume num > 1

const primeFactorization = (num) => {
  let primeFactors = [];
  let i = 2;
  while (num > 1){
    if (num % i === 0 && prime(i)){
      primeFactors.push(i);
      num /= i;
      i = 1;
    }
    i++;
  }
  return primeFactors;
};

const prime = (n) => {
  let isIt = true;
  for(let i = 2; i < n; i++){
    if (n % i === 0){
      isIt = false;
    }
  }
  return isIt;
};


console.log(primeFactorization(14)); // [2,2,3]
