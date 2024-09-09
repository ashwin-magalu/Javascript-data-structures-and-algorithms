// Given a natural number 'n', determine if the number is prime or not

// In mathematics, the prime number is a natural greater than 1 that is not a product of two smaller natural numbers

// Non optimized code
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false

// Big-O of this code is O(n)

// Integers larger than the square root do not need to be checked because, whenever 'n=a*b', one of the two factors 'a' and 'b' is less than or equal to the square root of 'n'.

// Optimized code
function isPrimeOptimized(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrimeOptimized(1)); // false
console.log(isPrimeOptimized(5)); // true
console.log(isPrimeOptimized(4)); // false

// Big-O of this code is O(sqrt(n))
