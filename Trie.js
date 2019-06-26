class Node {
  constructor(val) {
    this.val = val;
    this.parent = null;
    this.children = {};
    this.isEndOfWord = false;
  }

  getWord() {
    let output = [];
    let node = this;
    while (node !== null) {
      output.push(node.val);
      node = node.parent;
    }
    return output.reverse().join(``);
  }
}

class Trie {
  constructor() {
    this.root = new Node(null);
  }

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

  containsWord(word) {
    let node = this.root;
    for (let char of word) {
      if (node.children[char]) {
        node = node.children[char];
      } else {
        return false;
      }
    }
    return node.isEndOfWord;
  }

  findWords(prefix) {
    let node = this.root;
    let output = [];

    for (let char of prefix) {
      if (node.children[char]) {
        node = node.children[char];
      } else {
        return output;
      }
    }

    this.findAllWords(node, output);
    return output;
  }

  findAllWords(node, arr) {
    if (node.isEndOfWord) arr.push(node.getWord());
    for (let child in node.children) {
      this.findAllWords(node.children[child], arr);
    }
  }
}
