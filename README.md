# What is an Algorithm?

An Algorithm is a set of well defined instructions to solve a particular problem

## Characteristics of an Algorithm

- Well defined inputs and outputs
- Each step should be clear and unambiguous
- Language independent

## Why Algorithms?

- As a developer, you're going to come across problems that you need to solve
- Learning algorithms translates to learning different techniques to efficiently solve those problems
- One problem can be solved in many ways using different algorithms
- Every algorithm comes with its own tradeoffs when it comes to performance

## Algorithm analysis

- We evaluate the performance of an algorithm in terms of its input size
  - Time complexity: Amount of time taken by an algorithm to run, as a function of input size
  - Space complexity: Amount of memory taken by an algorithm to run, as a function of input size
- By evaluating against the input size, the analysis is not only machine independent but the comparison is also more appropriate
- There is no one solution that works every single time. It is always good to know multiple ways to solve the problem and use the best solution, given your constraints
- If your app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity
- If you have very little memory to work with, you should pick a solution that is relatively slower but needs less space

## How to represent complexity?

Asymptomatic notations: Mathematical tools to represent time and space complexity

- Big-O Notation (O-notation): Worst case complexity
- Omega Notation (Ω-notation): Best case complexity
- Theta Notation (Θ-notation): Average case complexity

## Big-O Notation

- The worst case complexity of an algorithm is represented using the Big-O notation
- Big-O notation describes the complexity of an algorithm using algebraic terms
- It has two important characteristics:
  - It is expressed in terms of the input
  - It focuses on the bigger picture without getting caught up in the minute details

### Big-O Time complexity:

```js
    function summation(n){
        let sum = 0; // will be executed once
        for(let i=1; i<=n; i++>){
            sum+=i; // will be executed 4 times
        }
        return sum; // will be executed once
    }
```

- So the time complexity of the above code is **n+2**. It is expressed in terms of the input
- We can say time complexity of the above code is **n**, if we focus on the bigger picture without getting caught up in the minute details. Because, if n is 1000, 2 is insignificant in front of that
- O(n) is a linear time complexity.

```js
function summation(n) {
  return (n * (n + 1)) / 2;
}
```

- The time complexity of the above code is **1**.
- O(1) is a Constant time complexity.

```js
for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    // some code
  }
}
```

- The time complexity of the above code is **n<sup>2</sup>**
- O(n<sup>2</sup>) is a Quadratic time complexity
- If there are 3 loops, then the time complexity is **n<sup>3</sup>**
- O(n<sup>3</sup>) is a Cubic time complexity.
- If input size reduces by half on every iteration, then the time complexity is **logn**
- O(logn) is a logarithmic time complexity.

### Big-O Space complexity:

- We can find Space complexity in the following three types:
  - O(1): Constant space complexity
  - O(n): Linear space complexity
  - O(logn): Logarithmic space complexity.

![Big O trend](big-o-trend.png)

- Multiple algorithms exist for the same problem and there is no one right solution. Different algorithms work well under different constraints.
- The same algorithm with the same programming language can be implemented in different ways
- When writing programs at work, don't lose sight of the big picture. Rather than writing clever code, write code that is simple to read and maintain.

## Objects and Arrays Big-O:

### Objects:

- An object is a collection of key value pairs
- Insert: O(1)
- Remove: O(1)
- Access: O(1)
- Search: O(n)
- Object.keys: O(n)
- Object.values: O(n)
- Object.entries: O(n)

### Arrays:

- An array is an ordered collection of values
- Insert / remove at end: O(1)
- Insert / remove at beginning: O(n)
- Access: O(1)
- Search: O(n)
- push / pop: O(1)
- shift / unshift / concat / slice / splice: O(n)
- forEach / map / filter / reduce: O(n)

# Recursion

- Recursion is a programming technique where a function calls itself repeatedly until it reaches a base case that stops
- It is a great technique to simplify your solution
- Every recursive solution needs to have a base case: a condition to terminate the recursion
- Recursion might simplify solving a problem, but it does not always translate to a faster solution. A recursive solution may be far worse compared to an iterative solution.

# Math Algorithms:

## Fibonacci Series:

- A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
- Big-O --> O(n)

## Factorial:

- The Factorial of a whole number 'n' is defined as the product of that number with every whole number less than or equal to 'n' till 1. For example, the factorial of 4 is 4 × 3 × 2 × 1, which is equal to 24. It is represented using the symbol '!' So, 24 is the value of 4!.
- Big-O --> O(n)

## Is Power of Two:

- Check whether the given number is a power of two or not
- Big-O --> O(logn) [worst case], O(1) [Best case]

## Is Prime:

- Check whether the given number is a prime number or not
- Big-O --> O(n) [worst case], O(sqrt(n)) [Best case]

# Recursion:

## Fibonacci Series:

- Big-O --> O(2^n)

## Factorial:

- Big-O --> O(n)

# Search Algorithms:

## Binary Search:

- A binary search is a search algorithm that finds the position of a target value in a sorted array. It's also known as half-interval search, logarithmic search, or binary chop
- Big-O --> O(logn)

## Recursive Binary Search:

- Big-O --> O(logn)

## Linear Search:

- A linear search, also known as a sequential search, is a simple method for finding an element in a list by checking each element one by one until a match is found
- Big-O --> O(n)

# Sorting Algorithms:

## Bubble Sort:

- Bubble sort is a sorting algorithm that arranges a set of elements in order by comparing adjacent elements and swapping them if they are out of order. The algorithm repeats this process until the entire set is sorted.
- Big-O --> O(n^2)

## Insertion Sort:

- Insertion sort is a sorting algorithm that builds a sorted array by moving each item into its correct position in a sorted sub-list. It's one of the simplest and most commonly used sorting algorithms.
- Big-O --> O(n^2)

## Merge Sort:

- Merge sort is a sorting algorithm that's based on the divide-and-conquer strategy. Merge sort breaks a list into smaller sublists until each sublist has only one item, and then merges the sublists in a sorted order. Merge sort is considered one of the most efficient sorting algorithms.
- Big-O --> O(nlogn)

## Quick Sort:

- Quick sort is a sorting algorithm that uses a divide-and-conquer strategy to sort an array by breaking it down into smaller arrays. It works by:
  - Selecting a pivot: Choosing a value in the array to be the pivot element
  - Sorting by value: Ordering the remaining values in the array so that those smaller than the pivot are on the left and those larger are on the right
  - Swapping the pivot: Swapping the pivot element with the first element of the larger values
  - Repeating: Recursively applying these steps to the sub-arrays on either side of the pivot
  - Continuing: Repeating the process until the sub-arrays are too small to sort
- Big-O --> O(n^2) [worst case], O(nlogn)[Avg. case]

# Miscelaneous:

## Cartesian Product:

- In mathematics, specifically set theory, the Cartesian product of two sets A and B, denoted A × B, is the set of all ordered pairs where a is in A and b is in B. In terms of set-builder notation, that is A table can be created by taking the Cartesian product of a set of rows and a set of columns.
- Big-O --> O(mn)

## Climbing Staircase:

- The climbing staircase algorithm is a problem that involves finding the number of ways to climb a staircase by taking one or two steps at a time. The algorithm is based on a technique called "state decomposition", which breaks the problem down into smaller, more manageable parts.
- Big-O --> O(n)

## Tower of Hanoi:

- The Tower of Hanoi algorithm is a recursive algorithm that solves the Tower of Hanoi puzzle by breaking it down into smaller problems. The algorithm uses the following rules to move a stack of disks between three rods:
  - Only one disk can be moved at a time
  - No disk can be placed on top of a smaller disk
- The algorithm's steps are:
  - Choose two rods as the source and destination, and a third as the auxiliary peg
  - Move the top n-1 disks from the source peg to the auxiliary peg
  - Move the nth disk from the source peg to the destination peg
  - Move the remaining n-1 disks from the auxiliary peg to the destination peg
- The minimum number of moves required to solve the puzzle is 2^n - 1, where n is the number of disks.
- Big-O --> O(2^n)
