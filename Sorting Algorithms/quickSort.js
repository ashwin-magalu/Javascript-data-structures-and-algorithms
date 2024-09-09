function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length - 1],
    left = [],
    right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([8, 20, -6, -2, 4])); // [-6,-2,4,8,20]

// Big O notation of this sort is O(n^2) [worst case] and O(nlogn)[Avg. case]
