const cells = document.querySelectorAll(".cell");
let cellArr = [];
cells.forEach((cell) => cellArr.push(cell));
let intervalID;
let delay = 100;

(function assignRandomCell() {
  let randomCell = Math.floor(Math.random() * cellArr.length);
  cellArr[randomCell].innerHTML = "🦦";
})();

let startingSnakeSize = [0, 1, 2];

(function starterSnake() {
  for (let i = 0; i < startingSnakeSize.length; i++) {
    cellArr[i].classList.add("snake");
  }
})();

function initialMove() {
  intervalID = setInterval(() => {
    let popValue = [...startingSnakeSize].pop();
    let shiftValue = startingSnakeSize.shift();
    startingSnakeSize.push(popValue + 1);
    cellArr[shiftValue].classList.remove("snake");
    // if ([[...startingSnakeSize].pop()].includes(15)) {
    //   startingSnakeSize.pop();
    //   startingSnakeSize.push(0);
    //   startingSnakeSize.forEach((n) => {
    //     cellArr[n].classList.add("snake");
    //   });
    //   return;
    // }
    startingSnakeSize.forEach((n) => {
      cellArr[n].classList.add("snake");
    });
  }, delay);
}
initialMove();

document.addEventListener("keydown", (e) => {
  let downID;
  if (e.key === "ArrowDown") {
    clearInterval(intervalID);
    for (let i = 0; i < startingSnakeSize.length; i++) {
      cellArr[startingSnakeSize[i]].classList.remove("snake");
    }
    startingSnakeSize = [...startingSnakeSize].map((n, index) => {
      //   downID = setInterval(() => {
      //     if (index === startingSnakeSize.length - 1) {
      //       console.log("yes");
      //       clearInterval(downID);
      //       return n + 15;
      //     }
      //     return n + 15;
      //   }, delay);
      return n + 15;
    });
    initialMove();
  }
});
