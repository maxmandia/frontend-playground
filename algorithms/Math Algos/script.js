// fibonacci
function fibo(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib);
}
// fibo(2);

// factorial of a number
function factorial(n) {
  let result = n;
  if (n === 0 || n === 1) {
    console.log(1);
    return;
  }
  for (let i = n; i > 1; i--) {
    result = result * (i - 1);
  }
  console.log(result);
}

factorial(10);
