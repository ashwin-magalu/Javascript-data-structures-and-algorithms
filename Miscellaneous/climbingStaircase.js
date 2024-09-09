// Given a staircase of 'n' steps, count the number of distinct ways to climb to the top. You can either climb 1 step or 2 steps at a time. If you have to climb to step 'n', we can only climb from step 'n-1' or 'n-2'

function climbingStaircase(n) {
  const noOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }

  return noOfWays[n - 1];
}

console.log(climbingStaircase(1)); // 1
console.log(climbingStaircase(2)); // 2
console.log(climbingStaircase(3)); // 3
console.log(climbingStaircase(4)); // 5
console.log(climbingStaircase(5)); // 8

// Big O notation is O(n)
