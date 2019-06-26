class Node {
  constructor(val) {
    this.val = val;
    this.parent = null;
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node(null);
  }

  add(word) {
    let node = this.root;
    for (let char of word) {
      if (node.children[char]) {
        node = node.children[char];
      } else {
        const newNode = new Node(char);
        newNode.parent = node;
        node.children[char] = newNode;
        node = newNode;
      }
    }
    node.isWord = true;
  }
}
