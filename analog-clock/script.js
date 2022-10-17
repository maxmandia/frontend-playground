const secondLine = document.querySelector(".seconds");
const minutesLine = document.querySelector(".minutes");
const hoursLine = document.querySelector(".hours");

let seconds = new Date().getSeconds();
let secondsShift = new Date().getSeconds();
let minutes = new Date().getMinutes();
let minutesShift = new Date().getMinutes() * 6;

let hours = new Date().getHours();
let hoursShift = new Date().getHours() * 30;

minutesLine.style.transform = `rotate(${minutesShift}deg)`;
hoursLine.style.transform = `rotate(${hoursShift}deg)`;

setInterval(() => {
  if (seconds > 0 && seconds % 60 === 0) {
    minutes++;
    minutes += 6;
    minutesLine.style.transform = `rotate(${minutes}deg)`;
  }
  if (minutes > 0 && minutes % 0 === 0) {
    // hours++;
    // hoursLine.style.transform = `rotate(${hours}deg)`;
  }
  seconds++;
  secondsShift += 6;
  secondLine.style.transform = `rotate(${secondsShift}deg)`;
}, 1000);

console.log(new Date().getSeconds());
