const next = document.querySelector(".next");
const back = document.querySelector(".back");
const url = "https://www.reddit.com/r/aww/top/.json?t=all";
const main = document.querySelector("main");
const img = document.createElement("img");
let images = [];
let currentImage = 0;
const getData = () => {
  fetch(url)
    .then((resp) => resp.json())
    .then((resp) => {
      let data = resp.data.children;
      data.map((image) => {
        images.push(image.data.thumbnail);
      });
      appendImages();
    });
};

function appendImages() {
  img.classList.add("image");
  img.src = images[10];
  main.appendChild(img);
}

next.addEventListener("click", () => {
  img.src = images[currentImage++];
  console.log(currentImage);
});

back.addEventListener("click", () => {
  if (currentImage <= 0) {
    return;
  }
  img.src = images[currentImage--];
  console.log(currentImage);
});

setInterval(() => {
  currentImage++;
  img.src = images[currentImage];
}, 2000);

getData();
