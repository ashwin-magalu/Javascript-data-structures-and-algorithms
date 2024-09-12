class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // Add at the beginning: Big-O --> O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // Add at the end: Big-O --> O(1) with tail
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      node.next = previous.next;
      previous.next = node;
      if (node.next === null) {
        this.tail = node;
      }
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      if (this.size === 1) {
        this.tail = null;
      }
    } else {
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      removedNode = previous.next;
      previous.next = removedNode.next;
      if (index === this.size - 1) {
        this.tail = previous;
      }
    }
    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      return this.removeFrom(0);
    } else {
      let previous = this.head;
      while (previous.next && previous.next.value !== value) {
        previous = previous.next;
      }
      if (previous.next) {
        const removedNode = previous.next;
        previous.next = removedNode.next;
        if (removedNode === this.tail) {
          this.tail = previous;
        }
        this.size--;
        return value;
      }
      return null;
    }
  }

  removeFromFront() {
    return this.removeFrom(0);
  }

  removeFromEnd() {
    return this.removeFrom(this.size - 1);
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let index = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  reverse() {
    let previous = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.tail = this.head;
    this.head = previous;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let current = this.head;
      let listValues = "";
      while (current) {
        listValues += ` ${current.value}`;
        current = current.next;
      }
      console.log(listValues);
    }
  }
}

module.exports = LinkedList;

/*
const list = new LinkedList();
console.log("List is Empty? ", list.isEmpty());
console.log("List size: ", list.getSize());
list.print(); // List is empty
list.prepend(10);
list.print(); // 10
list.prepend(20);
list.prepend(30);
list.print(); // 30 20 10
list.append(40);
list.print(); // 30 20 10 40
list.append(50);
list.append(60);
list.print(); // 30 20 10 40 50 60
list.insert(0, 3);
list.print(); // 30 20 10 0 40 50 60
console.log(list.removeFrom(3)); // 0
list.print(); // 30 20 10 40 50 60
console.log(list.removeValue(10)); // 10
list.print(); // 30 20 40 50 60
console.log(list.search(40)); // 2
list.reverse();
list.print(); // 60 50 40 20 30
list.removeFromFront();
list.print(); // 50 40 20 30
list.removeFromEnd();
list.print(); // 50 40 20
*/
