// calculate the nth number in the fibonacci sequence
const fibonacci = n => {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
