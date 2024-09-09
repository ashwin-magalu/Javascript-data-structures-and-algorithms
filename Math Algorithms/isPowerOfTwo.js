// Given a positive integer 'n', determine if the number is a power of 2 or not

// An integer is a power of two if there exists an integer 'x' such that 'n' === 2^x

// non-optimized
function isPowerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false

// Big-O of this code is O(logn)

// optimized
function isPowerOfTwoBitWise(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(1)); // true
console.log(isPowerOfTwoBitWise(2)); // true
console.log(isPowerOfTwoBitWise(5)); // false

// Big-O of this code is O(1)
