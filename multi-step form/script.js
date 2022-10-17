const title = document.querySelector("h3");
const input = document.querySelector("input");
const nextBtn = document.querySelector(".next");
const backContainer = document.querySelector(".back-container");
let backBtn = document.createElement("button");
let resultObj = {};
let responses = [];
let page = 1;

nextBtn.addEventListener("click", () => {
  page++;
  responses.push(input.value);
  console.log(responses);
  if (page === 2) {
    handleSecondPage();
  } else if (page === 3) {
    handleThirdPage();
  } else if (page === 4) {
    handleFourthPage();
  } else {
    handleSubmit();
  }
});

function handleFirst() {
  title.textContent = "name";
  backContainer.removeChild(backBtn);
}

function handleSecondPage() {
  title.textContent = "email";
  backBtn.textContent = "back";
  backContainer.appendChild(backBtn);
  backBtn.addEventListener("click", () => {
    handleFirst();
  });
}

function handleThirdPage() {
  title.textContent = "";
  input.placeholder = "mm/dd/yy";
  backBtn.addEventListener("click", () => {
    handleSecondPage();
  });
}

function handleFourthPage() {
  title.textContent = "password";
  input.placeholder = "";
  nextBtn.textContent = "submit";
  backBtn.addEventListener("click", () => {
    handleThirdPage();
  });
}

function handleSubmit() {
  resultObj = {
    name: responses[0],
    email: responses[1],
    bday: responses[2],
    password: responses[3],
  };
  console.log(resultObj);
}
