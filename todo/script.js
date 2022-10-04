const addBtn = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const ul = document.querySelector("ul");
// const deleteBtn = document.querySelector(".dlt");

addBtn.addEventListener("click", () => {
  const listFragment = document.createDocumentFragment();
  const item = document.createElement("li");
  item.classList.add("list-item");
  const heading = document.createElement("h2");
  heading.innerHTML = input.value;
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("dlt");
  deleteBtn.innerHTML = "delete";
  listFragment.appendChild(item);
  item.appendChild(heading);
  item.appendChild(deleteBtn);
  ul.appendChild(listFragment);
  input.value = "";

  //delete logic
  deleteBtn.addEventListener("click", () => {
    item.removeChild(deleteBtn);
    item.removeChild(heading);
  });
});

input.addEventListener("keydown", () => {
  if (input.value != null) {
    addBtn.disabled = false;
  } else if (input.value === "") {
    console.log(input.value);
    addBtn.disabled = true;
  }
  console.log("click");
});
