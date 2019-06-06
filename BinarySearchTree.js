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
    queue.push(this.root);
    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return result;
  }
}
