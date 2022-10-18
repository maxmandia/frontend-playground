const puppies = [
  "https://frontendeval.com/images/puppy-1.jpeg",
  "https://frontendeval.com/images/puppy-2.jpeg",
  "https://frontendeval.com/images/puppy-3.jpeg",
  "https://frontendeval.com/images/puppy-4.jpeg",
  "https://frontendeval.com/images/puppy-5.jpeg",
  "https://frontendeval.com/images/puppy-6.jpeg",
  "https://frontendeval.com/images/puppy-7.jpeg",
  "https://frontendeval.com/images/puppy-8.jpeg",
  "https://frontendeval.com/images/puppy-9.jpeg",
  "https://frontendeval.com/images/puppy-10.jpeg",
  "https://frontendeval.com/images/puppy-11.jpeg",
  "https://frontendeval.com/images/puppy-12.jpeg",
];

const kittens = [
  "https://frontendeval.com/images/kitten-1.jpeg",
  "https://frontendeval.com/images/kitten-2.jpeg",
  "https://frontendeval.com/images/kitten-3.jpeg",
  "https://frontendeval.com/images/kitten-4.jpeg",
  "https://frontendeval.com/images/kitten-5.jpeg",
  "https://frontendeval.com/images/kitten-6.jpeg",
  "https://frontendeval.com/images/kitten-7.jpeg",
  "https://frontendeval.com/images/kitten-8.jpeg",
  "https://frontendeval.com/images/kitten-9.jpeg",
  "https://frontendeval.com/images/kitten-10.jpeg",
  "https://frontendeval.com/images/kitten-11.jpeg",
  "https://frontendeval.com/images/kitten-12.jpeg",
];

const containerOne = document.createElement("div");
containerOne.classList.add("container-one");
const containerTwo = document.createElement("div");
containerTwo.classList.add("container-two");
const scrollOne = document.querySelector(".scroll-one");
const scrollTwo = document.querySelector(".scroll-two");

puppies.forEach((dog) => {
  let img = document.createElement("img");
  img.classList.add("image");

  img.src = dog;
  containerOne.appendChild(img);
});

puppies.forEach((dog) => {
  let img = document.createElement("img");
  img.classList.add("image");

  img.src = dog;
  containerTwo.appendChild(img);
});

kittens.forEach((dog) => {
  let img = document.createElement("img");
  img.classList.add("image");

  img.src = dog;
  scrollTwo.appendChild(img);
});

scrollOne.appendChild(containerOne);
scrollOne.appendChild(containerTwo);

let translateAmount = 5;
let speed = 5;
const allRowImages = document.querySelectorAll("img");
allRowImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.style.opacity = 0.5;
  });
  image.addEventListener("mouseout", () => {
    image.style.opacity = 1;
  });
});
function moveImages() {
  allRowImages.forEach((image) => {
    image.style.transform = `translate(${translateAmount}px)`;
  });
  allRowImages.forEach((image) => {});

  translateAmount = translateAmount - speed;
  console.log(containerTwo.getBoundingClientRect());
  window.requestAnimationFrame(moveImages);
}

moveImages();

scrollOne.addEventListener("mouseover", () => {
  speed = 2.5;
  scrollOne.addEventListener("mouseout", () => {
    speed = 5;
  });
});
