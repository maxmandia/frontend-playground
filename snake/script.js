const cells = document.querySelectorAll(".cell");
let cellArr = [];
cells.forEach((cell) => cellArr.push(cell));
let intervalID;

(function assignRandomCell() {
  let randomCell = Math.floor(Math.random() * cellArr.length);
  cellArr[randomCell].innerHTML = "🦦";
})();

let startingSnakeSize = [0, 1, 2];

function starterSnake() {
  for (let i = 0; i < startingSnakeSize.length; i++) {
    cellArr[i].classList.add("snake");
  }
}
starterSnake();

function initialMove() {
  let delay = 500;
  intervalID = setInterval(() => {
    let popValue = [...startingSnakeSize].pop();
    let shiftValue = startingSnakeSize.shift();
    startingSnakeSize.push(popValue + 1);
    cellArr[shiftValue].classList.remove("snake");
    if ([...startingSnakeSize].pop() === 14) {
      startingSnakeSize.pop();
      startingSnakeSize.push(0);
      startingSnakeSize.forEach((n) => {
        cellArr[n].classList.add("snake");
      });
      return;
    }
    startingSnakeSize.forEach((n) => {
      cellArr[n].classList.add("snake");
    });
  }, delay);
}
initialMove();

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    clearInterval(intervalID);
    for (let i = 0; i < startingSnakeSize.length; i++) {
      cellArr[startingSnakeSize[i]].classList.remove("snake");
    }
    startingSnakeSize = startingSnakeSize.map((n) => {
      return n + 10;
    });
    initialMove();
  }
});
