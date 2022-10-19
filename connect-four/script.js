// start by creating the dispensers and the board
// when we hit drop, have it dispense a piece
// we will change colors of the piece and change user turn text
// determine the stacking for the pieces
// implement win logic if four in a row == true

const buttons = document.querySelectorAll("button");
const cells = document.querySelectorAll(".game-cell");
const col1 = document.getElementById("col-1");
const col2 = document.getElementById("col-2");
const col3 = document.getElementById("col-3");
const col4 = document.getElementById("col-4");
const col5 = document.getElementById("col-5");
const col6 = document.getElementById("col-6");
const col7 = document.getElementById("col-7");
const turnText = document.querySelector("h3");

let cellArr = [];
let firstPiecePlaced = false;
let redPiece = true;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    placePieceColumn(btn);
  });
});

function placePieceColumn(btn) {
  const btnID = btn.getAttribute("id");
  if (btnID === "drop-1") {
    let columnID = "col-1";
    placePieceCell(columnID);
  } else if (btnID === "drop-2") {
    let columnID = "col-2";
    placePieceCell(columnID);
  } else if (btnID === "drop-3") {
    let columnID = "col-3";
    placePieceCell(columnID);
  } else if (btnID === "drop-4") {
    let columnID = "col-4";
    placePieceCell(columnID);
  } else if (btnID === "drop-5") {
    let columnID = "col-5";
    placePieceCell(columnID);
  } else if (btnID === "drop-6") {
    let columnID = "col-6";
    placePieceCell(columnID);
  } else if (btnID === "drop-7") {
    let columnID = "col-7";
    placePieceCell(columnID);
  }
}

function placePieceCell(columnID) {
  cellArr = [];
  const piece = document.createElement("div");
  if (redPiece) {
    turnText.textContent = "Yellow's turn";
    piece.classList.add("piece-red");
    redPiece = false;
  } else {
    turnText.textContent = "Red's turn";
    piece.classList.add("piece-yellow");
    redPiece = true;
  }
  if (columnID === "col-1") {
    cells.forEach((cell) => {
      if (col1.contains(cell)) {
        cellArr.push(cell);
      }
    });
    pickCell(piece);
  } else if (columnID === "col-2") {
    cells.forEach((cell) => {
      if (col2.contains(cell)) {
        cellArr.push(cell);
      }
    });
    pickCell(piece);
  } else if (columnID === "col-3") {
    cells.forEach((cell) => {
      if (col3.contains(cell)) {
        cellArr.push(cell);
      }
    });
    pickCell(piece);
  } else if (columnID === "col-4") {
    cells.forEach((cell) => {
      if (col4.contains(cell)) {
        cellArr.push(cell);
      }
    });
    pickCell(piece);
  } else if (columnID === "col-5") {
    cells.forEach((cell) => {
      if (col5.contains(cell)) {
        cellArr.push(cell);
      }
    });
    pickCell(piece);
  } else if (columnID === "col-6") {
    cells.forEach((cell) => {
      if (col6.contains(cell)) {
        cellArr.push(cell);
      }
    });
    pickCell(piece);
  } else if (columnID === "col-7") {
    cells.forEach((cell) => {
      if (col7.contains(cell)) {
        cellArr.push(cell);
      }
    });
    pickCell(piece);
  }
}

function pickCell(piece) {
  let emptyCells = cellArr.filter((cell) => !cell.hasChildNodes());
  let correctCell = [...emptyCells].pop();
  if (correctCell == null) {
    return;
  }
  correctCell.appendChild(piece);
}
