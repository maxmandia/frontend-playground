let url =
  "https: //api.nasa.gov/insight_weather/?api_key=4QjgQVKmSLbO0yrw0hUrTO6nx5NPdRwhA4U5vft6&feedtype=json&ver=1.0";

let url2 =
  "https://api.nasa.gov/techtransfer/patent/?engine&api_key=4QjgQVKmSLbO0yrw0hUrTO6nx5NPdRwhA4U5vft6&&page=5";
async function getData() {
  let request = await fetch(url2).then((resp) => resp.json());
  console.log(request);
}

getData();
