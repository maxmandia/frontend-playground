const input = document.querySelector("input");
const rowOne = document.querySelector("#row-one");
const rowTwo = document.querySelector("#row-two");
const rowThree = document.querySelector("#row-three");
const rowFour = document.querySelector("#row-four");
const rowFive = document.querySelector("#row-five");
const rowSix = document.querySelector("#row-six");
const guessText = document.querySelector("h3");

let apiWord;
let userGuesses = [];
let allUserGuesses = [];
let numberOfGuesses = 0;

function wordAPI() {
  fetch("https://api.frontendeval.com/fake/word").then((resp) => {
    resp.text().then((data) => {
      console.log(data);
      apiWord = data.split("");
    });
  });
}
wordAPI();

input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    userGuesses = [];
    numberOfGuesses++;
    userGuesses.push(e.target.value);
    allUserGuesses.push(e.target.value);
    displayGuess();
    checkWin();
  }
});

function displayGuess() {
  if (numberOfGuesses == 1) {
    guessText.textContent = "you have 5 guesses remaining";
    let cells = rowOne.children;
    let letterSplit = userGuesses[0].split("");
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = letterSplit[i];
    }
    handleHighlight(letterSplit, cells);
  } else if (numberOfGuesses == 2) {
    guessText.textContent = "you have 4 guesses remaining";
    let cells = rowTwo.children;
    let letterSplit = userGuesses[0].split("");
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = letterSplit[i];
    }
    handleHighlight(letterSplit, cells);
  } else if (numberOfGuesses == 3) {
    guessText.textContent = "you have 3 guesses remaining";
    let cells = rowThree.children;
    let letterSplit = userGuesses[0].split("");
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = letterSplit[i];
    }
    handleHighlight(letterSplit, cells);
  } else if (numberOfGuesses == 4) {
    guessText.textContent = "you have 2 guesses remaining";
    let cells = rowFour.children;
    let letterSplit = userGuesses[0].split("");
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = letterSplit[i];
    }
    handleHighlight(letterSplit, cells);
  } else if (numberOfGuesses == 5) {
    guessText.textContent = "you have 1 guess remaining";
    let cells = rowFive.children;
    let letterSplit = userGuesses[0].split("");
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = letterSplit[i];
    }
    handleHighlight(letterSplit, cells);
  } else if (numberOfGuesses == 6) {
    let cells = rowSix.children;
    let letterSplit = userGuesses[0].split("");
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = letterSplit[i];
    }
    handleHighlight(letterSplit, cells);
  }
}

function handleHighlight(letterSplit, cells) {
  for (let i = 0; i < letterSplit.length; i++) {
    if (letterSplit[i] === apiWord[i]) {
      cells[i].classList.add("green");
    } else if (apiWord.includes(letterSplit[i])) {
      cells[i].classList.add("yellow");
    } else {
      cells[i].classList.add("grey");
    }
  }
}

function checkWin() {
  allUserGuesses.forEach((guess) => {
    if (apiWord.join("") == guess) {
      console.log("winner");
      guessText.textContent = "you win :)";
    }
  });
}

function checkValidity() {
  const data = {
    word: "alien",
  };
  fetch("https://api.frontendeval.com/fake/word/valid", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    // .catch((e) => {
    //   console.log(e);
    // })
    .then((resp) => resp.text())
    .then((data) => {
      console.log(data);
    });
}

checkValidity();
