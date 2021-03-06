// calculate the nth number in the fibonacci sequence
// Time complexity: O(2^n) :'(
const fibonacci = (n) => {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Time complexity: O(n) :)
const memoizedFibonacci = (n) => {
  const memo = {};
  const fib = (n) => {
    if (memo[n]) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  };
  return fib(n);
};

const tabulatedFibonacci = (n) => {
  if (n <= 2) return 1;
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};
