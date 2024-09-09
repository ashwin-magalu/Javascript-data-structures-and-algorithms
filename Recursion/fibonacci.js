function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(6)); // 8

// Big O notation of iterative fibonacci code is O(n)
// Big O notation of recursive fibonacci code is O(2^n)

// Iterative solution is better than recursive for fibonacci
