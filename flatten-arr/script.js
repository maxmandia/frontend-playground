const data = [1, 2, [3, 4], 5, [6, [7, 8, [[2, 3]]]]];
let result = [];

const flatten = (arr) => {
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      console.log("gotta go again");
      flatten(element);
    } else {
      result.push(element);
    }
  });
};

flatten(data);

console.log(result);

// console.log(data.forEach((n) => console.log(n)));
