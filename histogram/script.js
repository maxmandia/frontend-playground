const url =
  "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new";

let responses = [];
let something;
const chart = document.querySelector(".chart");

function getData() {
  fetch(url)
    .then((response) => response.text())
    .then((resp) => (something = resp.split(/\r?\n/)))
    .then(() => handleResponses());
  // .then((resp) => responses.push(resp.split(/\r?\n/)));
  //   console.log(something);
  //   responses[0].forEach((resp) => {
  //     console.log(resp);
  //   });
}

getData();

function handleResponses() {
  something.forEach((n) => {
    let column = document.createElement("div");
    column.classList.add("column");
    column.style.height = `${n * 50}px`;
    column.style.width = "20px";

    chart.appendChild(column);
  });
}
