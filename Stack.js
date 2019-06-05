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
    this.size === 0
      ? (this.last = newFirst)
      : (newFirst.next = this.first.next);
    this.first = newFirst;
    return ++this.size;
  }

  pop() {
    // if length is 0 return undefined
    // grab old head
    // set new head to be old head's next
    // set old head's next to null
    // return decremented length
    if (this.size === 0) return;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.head = this.head.next;
    }
    return --this.size;
  }
}
