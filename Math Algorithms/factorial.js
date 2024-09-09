// Given an integer 'n', find the factorial of that integer

// In mathematics, the factorial of a non-negative integer 'n', denoted as n!, is the product of all positive integers less than or equal to 'n'.

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120

// Big-O of this code is O(n)