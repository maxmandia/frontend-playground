const btn = document.querySelector("button");

btn.addEventListener("click", debounce(testFunc, 2000));

function debounce(fn, delay) {
  let id;
  console.log(`initial id ${id}`);
  return (...args) => {
    console.log(`previous id ${id}`);
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function testFunc(hey) {
  console.log("click :)");
}
