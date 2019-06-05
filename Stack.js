class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newFirst = new Node(val);
    this.size === 0 ? (this.last = newFirst) : (newFirst.next = this.first);
    this.first = newFirst;
    return ++this.size;
  }

  pop() {
    if (this.size === 0) return;
    const popped = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return popped.val;
  }
}
