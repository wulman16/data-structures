class MaxBinaryHeap {
  constructor() {
    // Uses an array instead of a proper tree to store the nodes
    // A parent node's left child is at the parent index * 2 + 1
    // A parent node's right child is at the parent index * 2 + 2
    // A child node's parent is at (child index - 1) / 2, rounded down
    this.values = [];
  }

  // Time complexity: O(log(n))
  insert(val) {
    const swap = (arr, i, j) => {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    this.values.push(val);
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (idx > 0) {
      if (this.values[parentIdx] > idx) break;
      else {
        swap(this.values, parentIdx, idx);
        idx = parentIdx;
        parentIdx = Math.floor((idx - 1) / 2);
      }
    }
    return this;
  }

  // Time complexity: O(log(n))
  extractMax() {
    const swap = (arr, i, j) => {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    if (this.values.length === 0) return null;
    swap(this.values, 0, this.values.length - 1);
    const max = this.values.pop();
    if (this.values.length === 0) return max;

    let currentIdx = 0;
    let leftIdx = currentIdx * 2 + 1;
    let rightIdx = leftIdx + 1;
    let currentVal = this.values[currentIdx];
    let leftVal = this.values[leftIdx];
    let rightVal = this.values[rightIdx];

    while (leftVal) {
      if (!rightVal) {
        if (currentVal > leftVal) break;
        else {
          swap(this.values, currentIdx, leftIdx);
          break;
        }
      }
      if (currentVal > leftVal && currentVal > rightVal) break;
      if (leftVal > rightVal) {
        swap(this.values, currentIdx, leftIdx);
        currentIdx = leftIdx;
      } else {
        swap(this.values, currentIdx, rightIdx);
        currentIdx = rightIdx;
      }
      leftIdx = currentIdx * 2 + 1;
      rightIdx = leftIdx + 1;
      currentVal = this.values[currentIdx];
      leftVal = this.values[leftIdx];
      rightVal = this.values[rightIdx];
    }

    return max;
  }
}
