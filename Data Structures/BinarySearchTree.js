class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (value === root.value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  depthFirstSearchPreOrder(root) {
    if (root) {
      console.log(root.value);
      this.depthFirstSearchPreOrder(root.left);
      this.depthFirstSearchPreOrder(root.right);
    }
  }

  depthFirstSearchInOrder(root) {
    if (root) {
      this.depthFirstSearchInOrder(root.left);
      console.log(root.value);
      this.depthFirstSearchInOrder(root.right);
    }
  }

  depthFirstSearchPostOrder(root) {
    if (root) {
      this.depthFirstSearchPostOrder(root.left);
      this.depthFirstSearchPostOrder(root.right);
      console.log(root.value);
    }
  }

  breadthFirstSearchLevelOrder() {
    // use the optimized queue implementation
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      console.log(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  findMin(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.findMin(root.left);
    }
  }

  findMax(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.findMax(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (!root) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.findMin(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();
console.log("Tree is empty? ", bst.isEmpty());
bst.insert(10);
bst.insert(15);
bst.insert(5);
bst.insert(7);
bst.insert(3);

/** Tree structure
 *       10
 *    5      15
 * 3    7
 */

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 20));
bst.depthFirstSearchPreOrder(bst.root); //10 5 3 7 15
bst.depthFirstSearchInOrder(bst.root); //3 5 7 10 15
bst.depthFirstSearchPostOrder(bst.root); //3 7 5 15 10
bst.breadthFirstSearchLevelOrder(); //10 5 15 3 7
console.log(bst.findMin(bst.root)); // 3
console.log(bst.findMax(bst.root)); // 15
bst.delete(3)
bst.breadthFirstSearchLevelOrder(); //10 5 15 7