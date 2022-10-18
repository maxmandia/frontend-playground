let strs = ["flower", "flow", "flight"];

let arr = strs.map((word) => {
  return word.split("");
});

let newArr = [];

arr.map((r) => {
  newArr.push(r[0]);
});

console.log(newArr);

let iteration = 0;
let letters = []
function checkLetters() {
  arr.forEach((r) => {
    newArr.push(r[iteration]);
  });

iteration++
  for (let i = 0; i < newArr.length; i++) {
    if (i === newArr.length -1 ){
      if ()
    }
  }
}
