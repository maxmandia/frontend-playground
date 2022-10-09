const hamburger = document.querySelector(".menu");
const menu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");
const x = document.querySelector(".x");

hamburger.addEventListener("click", () => {
  menu.style.display = "block";
  body.style.overflow = "hidden";
  hamburger.style.display = "none";
  x.style.display = "block";
});

x.addEventListener("click", () => {
  menu.style.display = "none";
  body.style.overflow = "scroll";
  hamburger.style.display = "block";
  x.style.display = "none";
});
