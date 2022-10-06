const btn = document.querySelector("button");
btn.addEventListener("click", deBounce(printString, 2000));

function deBounce(cb, delay) {
  let id;

  return () => {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      cb("woo");
    }, delay);
  };
}

function printString(something) {
  console.log(something);
}
