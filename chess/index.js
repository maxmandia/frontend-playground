const grid = document.querySelector(".grid");
const cells = document.querySelectorAll(".cell");
let turn = true;
const winningSpaces = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [2, 5, 8],
];

const handleLogic = (e) => {
  e.target.innerHTML = turn ? "X" : "O";
  turn = !turn;
  if (checkWin()) {
    console.log("woo");
  }
};

cells.forEach((cell) => {
  cell.addEventListener("click", handleLogic, { once: true });
});

const checkWin = () => {
  return winningSpaces.some((combination) => {
    return combination.every((index) => {
      return cells[index].innerHTML === "X";
    });
  });
};
