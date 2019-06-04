class Node {
  constructor(val) {
    this.prev = null;
    this.val = val;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newTail = new Node(val);
    if (this.length === 0) {
      this.head = newTail;
    } else {
      const oldTail = this.tail;
      oldTail.next = newTail;
      newTail.prev = oldTail;
    }
    this.tail = newTail;
    this.length++;
    return this;
  }
}
