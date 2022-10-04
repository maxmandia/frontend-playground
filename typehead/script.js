const url = "https://api.frontendexpert.io/api/fe/glossary-suggestions";

const cont = document.querySelector(".container");
const getData = async () => {
  const resp = await fetch(url);
  const data = await resp.json();

  const joke = document.createElement("h3");
  joke.innerHTML = data.joke;
  cont.appendChild(joke);
};

getData();
