const express = require("express");
const mongoose = require("mongoose");

const app = express();

const user = "man";
const pas = "qqq";
const host = "mongo";
const port = 27017;

mongoose
  .connect(`mongodb://${user}:${pas}@${host}:${port}`)
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello qq");
  console.log("Hello qq!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
