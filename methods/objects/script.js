const obj = {
  name: "max",
  age: 23,
  favoriteColor: "red",
};

//Object.Keys()
console.log(Object.keys(obj));

//Object.Values()
console.log(Object.values(obj));

//forIn Loops
for (let x in obj) {
  console.log(x); // keys
  console.log(obj); // the whole object
}
