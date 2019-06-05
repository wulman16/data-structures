class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newLast = new Node(val);
    this.size === 0 ? (this.first = newLast) : (this.last.next = newLast);
    this.last = newLast;
    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return;
    const dequeued = this.first;
    if (this.size === 1) this.last = null;
    this.first = dequeued.next;
    this.size--;
    return dequeued;
  }
}
