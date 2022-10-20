const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(msg) {
    console.log(msg);

    this.emit("messageLogged", {
      id: "1",
      url: "someURL",
    });
  }
}

//raise an events

module.exports = Logger;
