const btn = document.querySelector("button");

btn.addEventListener("click", debounce(callback, 2000));

function callback() {
  console.log("you clicked the button");
}

function debounce(db, delay) {
  let id;

  return () => {
    if (id) {
      clearTimeout(id);
    }

    id = setTimeout(() => {
      db();
    }, delay);
  };
}
