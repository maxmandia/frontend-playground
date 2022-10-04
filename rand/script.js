url = "https://v2.jokeapi.dev/joke/Programming";
const cont = document.querySelector(".container");
const getData = async () => {
  const resp = await fetch(url);
  const data = await resp.json();

  const joke = document.createElement("h3");
  joke.innerHTML = data.joke;
  cont.appendChild(joke);
};

getData();
