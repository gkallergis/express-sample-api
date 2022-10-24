const os = require("os");
const express = require("express");

const app = express();
const hostname = os.hostname();

app.get("/", (req, res) => {
  res.send(`I'm alive! Hello from ${hostname}!`);
});

app.get("/new", (req, res) => {
  res.status(200);
  res.send(`New from ${hostname}!`);
});

app.get("/health", (req, res) => {
  res.status(200);
  res.send("Ola Kalws!");
});

app.listen(8000, () => {
  console.log("Service started on port 8000");
});
