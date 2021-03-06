class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  // deterministic, distributes evenly, reasonably efficient
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // Time complexity: O(1)
  set(key, value) {
    const idx = this._hash(key);
    this.keyMap[idx]
      ? this.keyMap[idx].push([key, value])
      : (this.keyMap[idx] = [[key, value]]);
  }

  // Time complexity: O(1)
  get(key) {
    const idx = this._hash(key);
    if (this.keyMap[idx]) {
      for (let pair of this.keyMap[idx]) {
        if (pair[0] === key) {
          return pair;
        }
      }
    }
    return;
  }

  keys() {
    let keys = [];
    for (let idx of this.keyMap) {
      if (idx) {
        for (let pair of idx) {
          keys.push(pair[0]);
        }
      }
    }
    return [...new Set(keys)];
  }

  values() {
    let values = [];
    for (let idx of this.keyMap) {
      if (idx) {
        for (let pair of idx) {
          values.push(pair[1]);
        }
      }
    }
    return [...new Set(values)];
  }
}

// example hash function
// Problems:
// - takes linear time :(
// - not very random
const hash = (key, arrayLen) => {
  let total = 0;
  for (let char of key) {
    total = (total + char.charCodeAt(0) - 96) % arrayLen;
  }
  return total;
};

// another example hash function
// minimizes collisions with the use of a prime number
// some improvement in efficiency
const betterHash = (key, arrayLen) => {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
};
