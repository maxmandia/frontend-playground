const arr = [1, 2, [3, 4], 5, [6, [7, 8]]];

let results = [];

function flatten(value) {
  value.forEach((n) => {
    if (Array.isArray(n)) {
      flatten(n);
    } else {
      results.push(n);
    }
  });
}

flatten(arr);
console.log(results);
