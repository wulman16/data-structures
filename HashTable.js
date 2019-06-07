// example hash function
// Problems:
// - only works with strings
// - takes linear time :(
// - not very random
const hash = (key, arrayLen) => {
  let total = 0;
  for (let char of key) {
    total = (total + char.charCodeAt(0) - 96) % arrayLen;
  }
  return total;
};

console.log(hash(`pink`, 10));
