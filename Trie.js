class Node {
  constructor(val) {
    this.val = val;
    this.children = {};
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node(null);
  }

  // add(word) {
  //   let node = this;
  //   for (let letter of word) {
  //     if (node.children[letter]) {
  //       node = node.children[letter];
  //     } else {
  //       const newTrie = new Trie(letter);
  //       node.children[letter] = newTrie;
  //       node = newTrie;
  //     }
  //   }
  //   node.isWord = true;
  // }
}

const trie = new Trie(`b`);
trie.add(`bob`);
console.log(trie);
