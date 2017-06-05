const factors = (num) => {
  const facts = [];
  for (let i = 1; i <= num; i ++){
    if(num % i == 0){
      facts.push(i);
    }
  }
  return facts;
};

console.log(factors(10));
