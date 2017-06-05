// return the first n prime numbers.

const isPrime = (num) => {
  let prime = true;
  for(let i = 2; i < num; i++){
    if (num % i === 0){
      prime = false;
    }
  }
  return prime;
};



const primes = (n) => {
  let primeNums = [];
  for(let i = 2; primeNums.length < n; i++){
    if (isPrime(i)){
      primeNums.push(i);
    }
  }
  return primeNums;
};

console.log(primes(4));
