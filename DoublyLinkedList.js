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

  // Time complexity: O(1)
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

  // Time complexity: O(1)
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

  // Time complexity: O(1)
  shift() {
    if (this.length === 0) return;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // Time complexity: O(1)
  unshift(val) {
    const newHead = new Node(val);
    if (!this.head) {
      this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
    }
    this.head = newHead;
    this.length++;
    return this;
  }

  // Time complexity: O(n)
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let currentNode;
    if (this.length - idx > idx) {
      currentNode = this.head;
      for (let i = 0; i < idx; i++) {
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        currentNode = currentNode.prev;
      }
    }
    return currentNode;
  }

  // Time complexity: O(n)
  set(idx, val) {
    const desiredNode = this.get(idx);
    if (!desiredNode) {
      return false;
    } else {
      desiredNode.val = val;
      return true;
    }
  }

  // Time complexity: O(n)
  insert(idx, val) {
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    const currentNode = this.get(idx);
    if (!currentNode) {
      return false;
    } else {
      const newNode = new Node(val);
      newNode.prev = currentNode.prev;
      newNode.next = currentNode;
      currentNode.prev.next = newNode;
      currentNode.prev = newNode;
      this.length++;
      return true;
    }
  }

  // Time complexity: O(n)
  remove(idx) {
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const removedNode = this.get(idx);
    if (!removedNode) {
      return;
    } else {
      const prevNode = removedNode.prev;
      const nextNode = removedNode.next;

      removedNode.prev = null;
      removedNode.next = null;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;

      this.length--;
      return removedNode;
    }
  }
}
