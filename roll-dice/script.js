const input = document.querySelector("input");
const rollDice = document.querySelector("button");
const diceContainer = document.querySelector(".dice-container");
let numberOfDice;
let randomNumbersArray = [];

rollDice.addEventListener("click", (e) => {
  e.preventDefault();
  numberOfDice = input.value;
  generateNumbers();
  appendDice();
});

function generateNumbers() {
  for (let i = 0; i < numberOfDice; i++) {
    let result = Math.floor(Math.random() * 6 + 1);
    randomNumbersArray.push(result);
  }
  console.log(randomNumbersArray);
}

function appendDice() {
  for (let i = 0; i < randomNumbersArray.length; i++) {
    let img = document.createElement("img");
    if (randomNumbersArray[i] === 1) {
      img.src = "./assets/one.png";
    } else if (randomNumbersArray[i] === 2) {
      img.src = "./assets/two.png";
    } else if (randomNumbersArray[i] === 3) {
      img.src = "./assets/three.png";
    } else if (randomNumbersArray[i] === 4) {
      img.src = "./assets/four.png";
    } else if (randomNumbersArray[i] === 5) {
      img.src = "./assets/five.png";
    } else if (randomNumbersArray[i] === 6) {
      img.src = "./assets/six.png";
    }
    diceContainer.appendChild(img);
  }
}
