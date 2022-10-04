let bob = function (string, number) {
  console.log(string, number, this);
};

let max = {
  name: "max",
  age: 23,
};

// CALL: calls the functions and set a "this" object (must be first param)
bob.call(max, "woo", 99);

//APPLY: same thing as call but must pass in an array as the second param
bob.apply(max, ["woo", 99]);

//BIND: prepares a function to be a called later.
let newFunction = bob.bind(max, "woo", 99);
newFunction();
