class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return;
    } else if (this.length === 1) {
      currentNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return currentNode;
    }
    let currentNode = this.head;
    for (let i = 1; i < this.length - 1; i++) {
      currentNode = currentNode.next;
    }
    let lastNode = currentNode.next;
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;
    return lastNode;
  }

  shift() {
    if (!this.head) {
      return;
    } else {
      const oldHead = this.head;
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return oldHead;
    }
  }

  unshift(val) {
    const newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    let currentNode = this.head;
    for (let i = 1; i <= idx; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(idx, val) {
    const desiredNode = this.get(idx);
    if (desiredNode) {
      desiredNode.val = val;
      return true;
    }
    return false;
  }
}
