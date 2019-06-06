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

  DFSPreOrder() {
    if (!this.root) return [];
    const visitedNodes = [];
    const traverse = node => {
      visitedNodes.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visitedNodes;
  }

  DFSPostOrder() {
    if (!this.root) return [];
    const visitedNodes = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visitedNodes.push(node.val);
    };
    traverse(this.root);
    return visitedNodes;
  }

  DFSInOrder() {
    if (!this.root) return [];
    const visitedNodes = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      visitedNodes.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visitedNodes;
  }
}
