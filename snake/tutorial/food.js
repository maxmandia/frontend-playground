let food = getNewPosition();
const expansionRate = 1;
import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
export function update() {
  if (onSnake(food)) {
    expandSnake(expansionRate);
    food = getNewPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  //   foodElement.innerHTML = "wooo";
  gameBoard.appendChild(foodElement);
  console.log("boo");
}

function getNewPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
