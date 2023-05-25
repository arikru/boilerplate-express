let express = require('express');
let app = express();
require('dotenv').config()

// console.log("Hello World");
let absolutePath = __dirname + '/views/index.html';
let assetPath = __dirname + "/public";

let modString = "Hello json"
let baseJson = {"message": modString};

app.use("/public", express.static(assetPath));
app.use(function middleware(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
})

app.get("/json", (req, res) => {
  let messageStyle = process.env.MESSAGE_STYLE;
  console.log(messageStyle);
  if (messageStyle === "uppercase") {
    res.json({"message": modString.toUpperCase()});
  } else {
    res.json(baseJson);
  }
  
})































 module.exports = app;
