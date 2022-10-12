const cells = document.querySelectorAll(".cell");
let cellArr = [];
cells.forEach((cell) => cellArr.push(cell));
let intervalID;

(function assignRandomCell() {
  let randomCell = Math.floor(Math.random() * cellArr.length);
  cellArr[randomCell].classList.add("highlight");
})();

let startingSnakeSize = [0, 1, 2];

function starterSnake() {
  for (let i = 0; i < startingSnakeSize.length; i++) {
    cellArr[i].classList.add("snake");
  }

  function initialMove() {
    let delay = 2000;
    intervalID = setInterval(() => {
      let popValue = [...startingSnakeSize].pop();
      let shiftValue = startingSnakeSize.shift();
      startingSnakeSize.push(popValue + 1);
      cellArr[shiftValue].classList.remove("snake");
      console.log(startingSnakeSize);
      if ([...startingSnakeSize].pop() === 14) {
        // startingSnakeSize.forEach((n) => {
        //   cellArr[n].classList.remove("snake");
        // });
        startingSnakeSize.pop();
        startingSnakeSize.push(0);
        // startingSnakeSize = [0, 1, 2];
        return;
      }
      startingSnakeSize.forEach((n) => {
        cellArr[n].classList.add("snake");
      });
    }, delay);
  }
  initialMove();
}
starterSnake();

function controlSnake() {}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    clearInterval(intervalID);
    console.log(startingSnakeSize.length);
    for (let i = 0; i < startingSnakeSize.length; i++) {
      cellArr[startingSnakeSize[i]].classList.remove("snake");
    }
    startingSnakeSize = [0, 1, 2];
    starterSnake();
  }
});
