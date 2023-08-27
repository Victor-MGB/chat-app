


const express = require("express");
const path = require("path");
let app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // Provide an absolute path
});

app.listen(port, () => {
  console.log(`The server is now running on port ${port}`);
});
