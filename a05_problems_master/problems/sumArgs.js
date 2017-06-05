function sum(...nums) {
  let total = nums[0];
  nums.slice(1).forEach(x => {
    total += x;
  });

  return total;

}

console.log(sum(1,2,3,4,5)); // 15
