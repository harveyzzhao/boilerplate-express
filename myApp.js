let express = require("express");
let app = express();

require("dotenv").config(); // load env vars
// console.log("Hello World");

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });


// middleware (to be declared first)
app.use((req, res, next) => {
  console.log(req.method + req.path + " - " + req.ip);
  next();
});

app.use("/public", express.static(__dirname + "/public"));


// router handlers (APIs)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});

module.exports = app;
