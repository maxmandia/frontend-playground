const item = document.querySelectorAll(".item");
const row1 = document.querySelector("#row-1");

let green;
let red;
let blue;
let selectedItem;

item.forEach((block) => {
  block.addEventListener("dragstart", (e) => {
    selectedItem = e.target.id;
  });
});

// greenBlock.addEventListener("dragstart", () => {
//   console.log("started");
// });

row1.addEventListener("dragover", (e) => {
  e.preventDefault();
});

row1.addEventListener("drop", () => {
  if (selectedItem === "item1") {
    item[0].remove();
    row1.appendChild(item[0]);
  } else if (selectedItem === "item2") {
    item[1].remove();
    row1.appendChild(item[1]);
  } else if (selectedItem === "item3") {
    item[2].remove();
    row1.appendChild(item[2]);
  }
});
