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

  pop() {
    if (this.length === 0) {
      return;
    }
    const popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;
    return popped;
  }

  shift() {
    if (this.length === 0) return;
    const shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shifted.next;
      this.head.prev = null;
      shifted.next = null;
    }
    this.length--;
    return shifted;
  }
}
