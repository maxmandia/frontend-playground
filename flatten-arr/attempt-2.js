const testArr = [1, 2, [3, 4], 5, [6, [7, 8]]];
const resultArr = [];

function flatten(arr) {
  arr.forEach((n) => {
    if (Array.isArray(n)) {
      flatten(n);
    } else {
      resultArr.push(n);
    }
  });
}

flatten(testArr);
console.log(resultArr);
