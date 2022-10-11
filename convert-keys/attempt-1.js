const testObj = {
  fName: "max",
  lName: "mandia",
  age: 23,
};

let keys = Object.keys(testObj);

let conversion = keys.map((key) => {
  let splitter = key.split("");
  let newKey = splitter.map((letter) => {
    if (letter === letter.toUpperCase()) {
      return "_" + letter.toLowerCase();
    } else {
      return letter;
    }
  });
  return newKey.join("");
});

console.log(conversion);
