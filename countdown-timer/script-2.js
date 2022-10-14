const startBtn = document.querySelector("#start");
const container = document.querySelector(".btn-container");

const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

let startTimer;

function timer() {
  if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
    return;
  } else if (seconds.value != 0) {
    seconds.value--;
  } else if (minutes.value != 0 && seconds.value == 0) {
    minutes.value--;
    seconds.value = 59;
  } else if (hours.value != 0 && minutes.value == 0) {
    hours.value--;
    minutes.value = 59;
    seconds.value = 59;
  }
}

function stopTimer() {
  clearInterval(startTimer);
}

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  container.removeChild(startBtn);
  createBtn();

  function startInterval() {
    startTimer = setInterval(() => {
      timer();
    }, 1000);
  }
  startInterval();
});

function createBtn() {
  //pause btn
  let pause = document.createElement("button");
  pause.innerHTML = "pause";
  //reset btn
  let reset = document.createElement("button");
  reset.innerHTML = "reset";
  //append
  container.appendChild(pause);
  container.appendChild(reset);

  pause.addEventListener("click", () => {
    e.preventDefault();
    clearInterval(startTimer);
  });
}

function pauseHandler() {
  clearInterval(startTimer);
}
