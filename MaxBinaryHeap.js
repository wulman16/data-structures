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
    this.values.push(val);
    let valIdx = this.values.length - 1;
    let parentIdx = Math.floor((valIdx - 1) / 2);
    while (valIdx > 0) {
      if (val < this.values[parentIdx]) break;
      [this.values[parentIdx], this.values[valIdx]] = [
        this.values[valIdx],
        this.values[parentIdx],
      ];
      valIdx = parentIdx;
      parentIdx = Math.floor((valIdx - 1) / 2);
    }
    return this;
  }

  // Time complexity: O(log(n))
  extractMax() {
    const swap = (arr, i, j) => {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    };

    if (this.values.length === 0) return null;

    swap(this.values, 0, this.values.length - 1);
    const max = this.values.pop();

    if (this.values.length === 0) return max;

    let recentIdx = 0;
    let leftIdx = recentIdx * 2 + 1;
    let rightIdx = leftIdx + 1;
    let leftVal = this.values[leftIdx];
    let rightVal = this.values[rightIdx];

    while (leftVal) {
      if (!rightVal) {
        if (this.values[recentIdx] > leftVal) {
          break;
        } else {
          swap(this.values, recentIdx, leftIdx);
          break;
        }
      }
      if (
        this.values[recentIdx] > this.values[leftIdx] &&
        this.values[recentIdx] > this.vlaues[rightIdx]
      )
        break;
      if (leftVal > rightVal) {
        swap(arr, recentIdx, leftIdx);
        recentIdx = leftIdx;
      } else {
        swap(arr, recentIdx, rightIdx);
        recentIdx = rightIdx;
      }
      leftIdx = recentIdx * 2 + 1;
      rightIdx = leftIdx + 1;
      leftVal = this.values[leftIdx];
      rightVal = this.values[rightIdx];
    }
    return max;
  }
}
