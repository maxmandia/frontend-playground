const btn = document.querySelector("button");
const main = document.querySelector("main");
const modal = document.querySelector(".modal");

btn.addEventListener("click", () => {
  modal.classList.add("show");
});

modal.style.display = "flex";
modal.classList.add(".show-modal");
