const obj = {
  firstName: "max",
  lastName: "mandia",
  myAge: 23,
  myType: "brunette",
};

let myKeys = Object.keys(obj);

const splitArr = myKeys.map((key) => {
  return key.split("");
});

console.log(splitArr);

splitArr.map((arr) => {
  const results = arr.map((letter) => {
    if (letter === letter.toUpperCase()) {
      return "_" + letter.toLocaleLowerCase();
    } else {
      return letter;
    }
  });
  console.log(results.join(""));
});
