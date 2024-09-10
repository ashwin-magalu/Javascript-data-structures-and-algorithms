const obj = {
  name: "Ashwin",
  age: 25,
  "key-three": true,
  sayMyName: function () {
    console.log(this.name);
  },
};
obj.hobby = "Cricket";
delete obj.hobby;

console.log(obj.name);
console.log(obj["age"]);
console.log(obj["key-three"]);
console.log(obj);
obj.sayMyName();

// Object.keys(), values(), entries() are other object methods

/**
 * Big-O
 * Insert: O(1)
 * Remove: O(1)
 * Access: O(1)
 * Search: O(n)
 * Object.keys: O(n)
 * Object.values: O(n)
 * Object.entries: O(n)
 */
