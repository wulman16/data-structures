class MaxBinaryHeap {
  constructor() {
    // Uses an array instead of a proper tree to store the nodes
    // A parent node's left child is at the parent index * 2 + 1
    // A parent node's right child is at the parent index * 2 + 2
    // A child node's parent is at  (child index - 1) / 2 rounded down
    values = [];
  }
}
