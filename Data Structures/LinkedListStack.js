const LinkedList = require("./LinkedList");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const stack = new LinkedListStack();
console.log(stack.isEmpty()); // true
stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.getSize()); // 3
stack.print(); // 30 10 20
console.log(stack.pop()); // 30
stack.print(); // 10 20
console.log(stack.peek()); // 10
