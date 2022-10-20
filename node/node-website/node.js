const http = require("http");
const port = 3000;
const fs = require("fs");

const server = http.createServer((req, resp) => {
  if (req.url == "/index") {
    console.log("request for index recieved");
    fs.readFile("./index.html", (e, d) => {
      if (e) {
        console.log(e);
      } else {
        resp.write(d);
      }
    });
  } else if (req.url == "/about") {
    fs.readFile("./about.html", (e, d) => {
      if (e) {
        console.log(e);
      } else {
        resp.write(d);
      }
    });
  }
});

server.listen(port, (e) => {
  if (e) {
    console.log(e);
  } else {
    console.log("server is listening on" + port);
  }
});
