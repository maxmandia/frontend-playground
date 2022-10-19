function fib(n) {
  let arr = [0, 1];
  for (let i = 1; i < n - 1; i++) {
    arr.push(arr[i] + arr[i - 1]);
  }
  console.log(arr);
}

// fib(8);

let i = 0;
let arr = [0, 1];

function fibRec(n) {
  if (i > n) {
    console.log(arr);
    return;
  }
  arr.push(arr[i] + arr[i + 1]);
  i = i + 1;
  fibRec();
}

fibRec(8);
