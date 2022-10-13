const cards = document.querySelectorAll(".card");
const main = document.querySelector("main");
const containers = document.querySelectorAll(".card-container");
const TOTAL_CARDS = 18;
let cardShown = false;
let numberOfClicks = 0;
let selectionArr = [];

// create array with 36 numbers numbered 1-18, where each number is added twice
let cardArr = [];
for (let i = 1; i <= TOTAL_CARDS; i++) {
  cardArr.push(i, i);
}

// assign numbers to card and remove duplicates
cards.forEach((card, index) => {
  let randomNumber = cardArr[Math.floor(Math.random() * cardArr.length)];
  card.style.color = "grey";
  card.innerHTML = randomNumber;
  let numberLocation = cardArr.indexOf(randomNumber);
  cardArr.splice(numberLocation, 1);
});

// reveal card number on click
containers.forEach((container) => {
  container.addEventListener("click", (e) => {
    e.path[0].style.color = "black";
    selectionArr.push({
      number: e.path[0].innerHTML,
      container: e.path[1],
      card: e.path[0],
    });
    console.log(selectionArr);

    if (numberOfClicks === 0) {
      numberOfClicks += 1;
      return;
    } else {
      numberOfClicks += 1;
      checkCard();
    }
  });
});

function checkCard() {
  if (numberOfClicks % 2 === 0) {
    if (
      selectionArr[numberOfClicks - 2].number ===
      selectionArr[numberOfClicks - 1].number
    ) {
      console.log("winner");
      selectionArr[numberOfClicks - 2].container.removeChild(
        selectionArr[numberOfClicks - 2].card
      );
      selectionArr[numberOfClicks - 1].container.removeChild(
        selectionArr[numberOfClicks - 1].card
      );
    } else if (
      selectionArr[numberOfClicks - 2].number !==
      selectionArr[numberOfClicks - 1].number
    ) {
      console.log("wrong");
      setTimeout(() => {
        selectionArr[numberOfClicks - 2].card.style.color = "grey";
        selectionArr[numberOfClicks - 1].card.style.color = "grey";
        selectionArr = [];
        numberOfClicks = 0;
      }, 1000);
    }
  }
}
