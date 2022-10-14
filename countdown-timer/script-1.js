const start = document.querySelector("#start");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const inputValues = document.querySelectorAll("input");
const btnContainer = document.querySelector(".btn-container");
const pause = document.createElement("button");
const reset = document.createElement("button");
pause.innerHTML = "pause";
reset.innerHTML = "reset";
let inputArr = [];
let intervalID;
let secondCounter = 0;

start.addEventListener("click", (e) => {
  e.preventDefault();
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      new Notification("starting timer");
    }
  });
  countdown();
  btnContainer.removeChild(start);
  btnContainer.appendChild(pause);
  btnContainer.appendChild(reset);
});

function countdown() {
  intervalID = setInterval(() => {
    updateSeconds();
    updateMinutes();
    updateHours();
  }, 1000);
}

function updateHours() {
  if (seconds.value === "0" && minutes.value === "60") {
    console.log("hours updates");
    hours.value = hours.value - 1;
  }
}

function updateMinutes() {
  if (seconds.value === "00") {
    minutes.value = minutes.value - 1;
  }
}

function updateSeconds() {
  if (seconds.value === "00" && minutes.value === "00") {
    clearInterval(intervalID);
    new Notification("timer has ended");
    return;
  } else if (seconds.value === "00") {
    console.log("go to 59");
    seconds.value = "59";
  } else if (seconds.value > 10) {
    seconds.value = seconds.value - 1;
  } else {
    seconds.value = `0${seconds.value - 1}`;
  }
  console.log(minutes.value, seconds.value);
}

reset.addEventListener("click", () => {
  clearInterval(intervalID);
  console.log("hey");
  seconds.value = 10;
});
