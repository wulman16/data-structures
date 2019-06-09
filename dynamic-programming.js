// calculate the nth number in the fibonacci sequence
// Time complexity: O(2^n) :'(
const fibonacci = n => {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Time complexity: O(n) :)
const dynamicFibonacci = n => {
  let memo = {};
  const fib = n => {
    if (memo[n]) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  };
  return fib(n);
};
