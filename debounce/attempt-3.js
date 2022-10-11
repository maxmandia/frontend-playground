const btn = document.querySelector("button");

btn.addEventListener("click", debounce(logString, 2000));

function logString() {
  console.log("I got clicked");
}

function debounce(cb, delay) {
  let id;

  return () => {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      cb();
    }, delay);
  };
}
