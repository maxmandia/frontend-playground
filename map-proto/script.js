const testArr = [1, 2, 3, 4, 5];

function map(arr, cb) {
  const resultsArr = [];

  for (let i = 0; i < arr.length; i++) {
    cb(resultsArr, arr[i]);
  }
  return resultsArr;
}

function doSomething(newArr, number) {
  newArr.push(number * 2);
}

const mappedArr = map(testArr, doSomething);
console.log(mappedArr);
console.log(testArr);
