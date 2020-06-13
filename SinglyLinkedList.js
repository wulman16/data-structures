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

  // Time complexity: O(1)
  push(val) {
    const newTail = new Node(val);
    this.length === 0 ? (this.head = newTail) : (this.tail.next = newTail);
    this.tail = newTail;
    this.length++;
    return this;
  }

  // Time complexity: O(n)
  pop() {
    if (this.length === 0) return;
    const oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      for (let i = 1; i < this.length - 1; i++) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
    }
    this.length--;
    return oldTail;
  }

  // Time complexity: O(1)
  shift() {
    if (this.length === 0) return;
    const oldHead = this.head;
    if (this.length === 1) this.tail = null;
    this.head = this.head.next;
    this.length--;
    return oldHead;
  }

  // Time complexity: O(1)
  unshift(val) {
    const newHead = new Node(val);
    this.length === 0 ? (this.tail = newHead) : (newHead.next = this.head);
    this.head = newHead;
    this.length++;
    return this;
  }

  // Time complexity: O(n)
  get(idx) {
    if (idx < 0 || idx >= this.length) return;
    let currentNode = this.head;
    for (let i = 1; i <= idx; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // Time complexity: O(n)
  set(idx, val) {
    const desiredNode = this.get(idx);
    if (desiredNode) {
      desiredNode.val = val;
      return true;
    }
    return false;
  }

  // Time complexity: O(1)
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prevNode = this.get(idx - 1);
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

  // Time complexity: O(1) at beginning, O(n) otherwise
  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === this.length - 1) return !!this.pop();
    if (idx === 0) return !!this.shift();

    const prevNode = this.get(idx - 1);
    const removed = prevNode.next;
    prevNode.next = removed.next;
    removed.next = null;
    this.length--;
    return removed;
  }

  // Time complexity: O(n)
  reverse() {
    if (this.length <= 1) return this;

    // Swap head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
