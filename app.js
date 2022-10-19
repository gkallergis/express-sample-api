const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("I'm alive!"));

app.get("/health", (req, res) => {
  res.status(200);
  res.send("Ola Kalws!");
});

app.listen(8000, () => {
  console.log("Service started on port 8000");
});
