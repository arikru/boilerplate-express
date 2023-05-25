let express = require('express');
let app = express();


// console.log("Hello World");

let absolutePath = __dirname + '/views/index.html';
let assetPath = __dirname + "/public";

app.use("/public", express.static(assetPath));

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
})

































 module.exports = app;
