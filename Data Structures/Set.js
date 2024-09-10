const set = new Set([1, 2, 3]);
set.add(4);
set.add(4); // Duplicate will not be added
set.delete(2);

for (const item of set) {
  console.log(item);
}

console.log(set.has(3));
console.log(set.size);
set.clear();
console.log(set);
