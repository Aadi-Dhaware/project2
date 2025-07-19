// added new backend code - button
// added new backend code - form
const express = require("express");
const Mongoose = require("mongoose");
const app = express();
const port = 3000;
const MongooseURL = "mongodb://localhost:27017/mydatabase";

app.get("/feature", (req, res) => {
  res.send("On feature");
});

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});
