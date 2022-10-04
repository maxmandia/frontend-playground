const timer = document.querySelector("h2");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let timerID;
let time = 1;
let lastTimerStartTime = Date.now();

// start.addEventListener("click", () => {
//   stop.disabled = false;
//   reset.disabled = false;
//   start.disabled = true;
//   intObj = setInterval(() => {
//     timer.innerHTML = time++;
//   }, 1000);
// });

//new
start.addEventListener("click", () => {
  stop.disabled = false;
  reset.disabled = false;
  start.disabled = true;
  timerID = requestAnimationFrame(updateTimer);
});

stop.addEventListener("click", () => {
  start.disabled = false;
  stop.disabled = true;

  cancelAnimationFrame(timerID);
});

reset.addEventListener("click", () => {
  stop.disabled = true;
  start.disabled = false;
  reset.disabled = true;
  timer.innerHTML = "0:00:000";
  time = 1;
  cancelAnimationFrame(timerID);
  let resetvar = true;
  updateTimer(resetvar);
});

function updateTimer(idk) {
  let mElapsed;
  let sElapsed;
  let minElapsed;
  if (idk === true) {
    mElapsed = 0;
    sElapsed = 0;
    minElapsed = 0;
    return;
  }
  mElapsed = Date.now() - lastTimerStartTime;
  sElapsed = mElapsed / 1000;
  minElapsed = sElapsed / 60;
  let mText = formatNumber(mElapsed % 1000, 2);
  let sText = formatNumber(Math.floor(sElapsed) % 60, 2);
  let minText = formatNumber(Math.floor(minElapsed) % 60, 2);
  timer.textContent = `${minText}:${sText}:${mText}`;
  timerID = requestAnimationFrame(updateTimer);
}

function formatNumber(number, desiredLength) {
  let stringNumber = number.toString();
  if (stringNumber.length > desiredLength) {
    return stringNumber.slice(0, desiredLength);
  } else {
    return stringNumber.padStart(desiredLength, 0);
  }
}

let nummm = 2;
console.log(nummm.toString().length);
