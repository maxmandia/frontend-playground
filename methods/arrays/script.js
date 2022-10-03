// Array Methods :) Woo!

let basicArr = [1, 2, 3, 4, 5, 6];
let basicArr2 = ["a", "b", "c", "d", "e", "f"];

// MAP: returns a new array
let map = basicArr.map((n) => n + 1);

// REDUCE: where accumulator = basicArr[0] and the current value is basicArr[1]
let reduced = basicArr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

// FILTER: where every number that is not equal to 3 is returned
let filtered = basicArr.filter((n) => n !== 3);

// SORT: sorting in descending order
let sorted = basicArr.sort((a, b) => b - a);

// CONCAT: combines to arrays
let concatenated = basicArr.concat(basicArr2);
// spread version is below. if it was a string and an array.
// spread would copy every letter of the string, but concat would not
let spreaded = [...basicArr, ...basicArr2];
console.log(concatenated);
