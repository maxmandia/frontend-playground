const submit = document.querySelector("button");
const inputs = document.querySelector(".inputs");
const passcode = "1234";
let attempts = [];

inputs.addEventListener("keydown", (e) => {
  if (isNaN(e.key)) {
    console.log("not a number");
  } else {
    attempts.push(e.key);
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let submission = attempts.join("");
  if (submission === passcode) {
    console.log("correct");
  } else {
    console.log("wrong");
  }
});
