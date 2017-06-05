// Write a method, `digital_root(num)`. It should Sum the digits of a positive
// integer. If it is greater than 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the
// "digital root". **Do not use string conversion within your method.**
//
// You may wish to use a helper function, `digital_root_step(num)` which performs
// one step of the process.


const digitalRoot = (num) => {
  let digits = [];

  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  let digitSum = digits.reduce( (a, b) => a + b );
  if (digitSum > 10){
    return digitalRoot(digitSum);
  } else {
    return Math.floor(digitSum);
  }
};

console.log(digitalRoot(27)); // 9
console.log(digitalRoot(99)); // 9
console.log(digitalRoot(62)); // 8
