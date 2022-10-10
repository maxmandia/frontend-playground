const btn = document.querySelector("button");

btn.addEventListener("click", debounce(handleClick, 1000));

function handleClick() {
  console.log("you got clicked!");
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
