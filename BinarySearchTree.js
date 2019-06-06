class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Time complexity: O(log(n))
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (val < currentNode.val) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          return this;
        }
      } else if (val > currentNode.val) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          return this;
        }
      } else {
        // The given value already exists in the tree
        return;
      }
    }
  }

  // Time complexity: O(log(n))
  find(val) {
    if (!this.root) return null;
    let currentNode = this.root;
    while (true) {
      if (currentNode.val === val) {
        return currentNode;
      } else if (currentNode.val > val) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return null;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return null;
        }
      }
    }
  }

  breadthFirstSearch() {
    if (!this.root) return [];
    const queue = [];
    const result = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }

  // Depth First Search algorithms

  preOrderDFS() {
    if (!this.root) return [];
    const visitedNodes = [];
    let current = this.root;
    const traverse = node => {
      visitedNodes.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return visitedNodes;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.preOrderDFS());
