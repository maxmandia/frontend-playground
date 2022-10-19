// fibonacci
function fibo(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib);
}

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

//prime number

function primeNumber(n) {
  if (n < 2) {
    return;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function powerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
