class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

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
