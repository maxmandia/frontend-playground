const start = document.querySelector("button");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const inputValues = document.querySelectorAll("input");
let inputArr = [];
let intervalID;

start.addEventListener("click", (e) => {
  e.preventDefault();
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      new Notification("starting timer");
    }
  });
  countdown();
});

function countdown() {
  intervalID = setInterval(() => {
    updateSeconds();
    updateMinutes();
    console.log(minutes.value, seconds.value);
    updateHours();
  }, 1000);
}

function updateHours() {
  console.log("it is", minutes.value, seconds.value);

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
    console.log("go to 60");
    seconds.value = "60";
  } else if (seconds.value > 10) {
    seconds.value = seconds.value - 1;
  } else {
    seconds.value = `0${seconds.value - 1}`;
  }
  console.log(minutes.value, seconds.value);
}
