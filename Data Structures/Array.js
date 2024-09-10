const arr = [1, 2, 3, "Ashwin"];
arr.push(4);
arr.unshift(0)
arr.pop()
arr.shift()

for (const item of arr) {
  console.log(item);
}

// map, filter, concat, slice and splice are other array methods

/**
 * Big-O
 * Insert / remove at end: O(1)
 * Insert / remove at beginning: O(n)
 * Access: O(1)
 * Search: O(n)
 * push / pop: O(1)
 * shift / unshift / concat / slice / splice: O(n)
 * forEach / map / filter / reduce: O(n) */