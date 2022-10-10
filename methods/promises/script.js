// Write a function newPromiseAll which takes an array of Promises as an argument,
// and returns a promise, which if resolved, returns the result of each promise in an array,
// or an error catch block /if one of the promises is rejected.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ user: "max" });
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ user: "ner" });
  }, 2000);
});

Promise.all([promise1, promise2])
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));
