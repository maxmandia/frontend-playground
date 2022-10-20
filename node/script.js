const http = require("http");

const server = http.createServer((req, resp) => {
  if (req.url === "/") {
    resp.write("hello user");
    resp.end();
  }

  if (req.url === "/courses") {
    console.log("courses");
    resp.write(JSON.stringify([1, 2, 3]));
    resp.end();
  }
});

server.listen(3000);

console.log("listening on port 3000");
