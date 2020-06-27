class Node {
  constructor(val) {
    this.val = val;
    this.parent = null;
    this.children = {};
    this.isEndOfWord = false;
  }

  // Time complexity: O(k)
  getWord() {
    const chars = [];
    let node = this;
    while (node) {
      chars.push(node.val);
      node = node.parent;
    }
    return chars.reverse().join("");
  }
}

class Trie {
  constructor() {
    this.root = new Node(null);
  }

  // Time complexity: O(k)
  addWord(word) {
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
    node.isEndOfWord = true;
  }

  // Time complexity: O(k)
  containsWord(word) {
    let node = this.root;
    for (let char of word) {
      if (node.children[char]) node = node.children[char];
      else return false;
    }
    return node.isEndOfWord;
  }

  // Time complexity: O(p + n), where p is prefix length
  // and n is the number of child paths
  findWords(prefix) {
    const result = [];
    let node = this.root;
    for (let char of prefix) {
      if (node.children[char]) node = node.children[char];
      else return result;
    }
    const traverse = (node) => {
      if (node.isEndOfWord) result.push(node.getWord());
      for (let child in node.children) {
        traverse(node.children[child]);
      }
    };
    traverse(node);
    return result;
  }
}
