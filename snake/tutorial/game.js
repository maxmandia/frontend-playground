let lastRenderTime = 0;
import {
  snakeSpeed,
  update as updateSnake,
  draw as drawSnake,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
const gameBoard = document.querySelector("#game-board");
let gameOver = false;
import { getSnakeHead, snakeIntersection } from "./snake.js";
import { outsideGrid } from "./grid.js";
function main(currentTime) {
  if (gameOver) {
    alert("you lost!");
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / snakeSpeed) {
    return;
  }
  lastRenderTime = currentTime;
  console.log("render");
  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkForDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkForDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
