const search = document.querySelector("input");
const main = document.querySelector("main");
const url = "https://api.frontendeval.com/fake/food/";
let results = [];

search.addEventListener("input", (e) => {
  searchFood(search.value, e);
});

function searchFood(input, e) {
  if (e.inputType == "deleteContentBackward") {
    console.log("del");
    results = [];
    removeResults();
    return;
  } else if (input.length >= 2) {
    callAPI(input);
  } else {
    return;
  }
}

function callAPI(input) {
  fetch(`${url}${input}`)
    .then((resp) => resp.json())
    .then((data) => {
      results = [];
      results = data;
    });
  appendResults();
}

const searchContainer = document.createElement("div");
searchContainer.classList.add("search-container");

function appendResults() {
  results.forEach((result) => {
    let itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");
    let item = document.createElement("p");
    item.innerHTML = result;
    itemContainer.appendChild(item);
    searchContainer.appendChild(itemContainer);
  });
  main.appendChild(searchContainer);
}

function removeResults() {
  searchContainer.remove();
}

// add item logic

searchContainer.addEventListener("click", (e) => {
  addMyItems(e.target.textContent);
});

let myItemContainer = document.createElement("div");
myItemContainer.classList.add("my-item-container");
main.appendChild(myItemContainer);

function addMyItems(itemName) {
  let itemDiv = document.createElement("div");
  itemDiv.classList.add("item-row");
  let itemElement = document.createElement("p");
  let delElement = document.createElement("p");
  let checkElement = document.createElement("p");
  itemElement.innerHTML = itemName;
  delElement.innerHTML = "x";
  checkElement.innerHTML = "&#10003;	";
  itemDiv.appendChild(itemElement);
  itemDiv.appendChild(delElement);
  itemDiv.appendChild(checkElement);
  myItemContainer.appendChild(itemDiv);

  delElement.addEventListener("click", (e) => {
    myItemContainer.removeChild(itemDiv);
  });

  checkElement.addEventListener("click", () => {
    itemElement.style.textDecoration = "line-through";
  });
}
