class MaxBinaryHeap {
  constructor() {
    // Uses an array instead of a proper tree to store the nodes
    // A parent node's left child is at the parent index * 2 + 1
    // A parent node's right child is at the parent index * 2 + 2
    // A child node's parent is at  (child index - 1) / 2 rounded down
    this.values = [];
  }

  insert(val) {
    // push val into values
    // get parent node
    // while the parent node's index doesn't equal val's index
    // if val is less than the parent, break
    // else, swap val and parent
    // set parent node to parent of where val currently is
    // return heap
    this.values.push(val);
    let valIdx = this.values.length - 1;
    let parentIdx = Math.floor((valIdx - 1) / 2);
    while (parentIdx >= 0) {
      if (val < this.values[parentIdx]) break;
      [this.values[parentIdx], this.values[valIdx]] = [
        this.values[valIdx],
        this.values[parentIdx]
      ];
      valIdx = parentIdx;
      parentIdx = Math.floor((valIdx - 1) / 2);
    }
    return this;
  }
}
