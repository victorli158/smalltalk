//Write a recursive method that returns the sum of all elements in an array
const recSum = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }

  return nums[0] + recSum(nums.slice(1));
};

console.log(recSum([5,45,7]));
