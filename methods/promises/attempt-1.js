const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "max" });
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "noah" });
  }, 2000);
});

Promise.all([promise1, promise2]).then((resp) => {
  console.log(resp);
});
