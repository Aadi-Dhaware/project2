// added new backend code - button
// added new backend code - form
const express = require("express");
const Mongoose = require("mongoose");
const app = express();
const port = 3000;
const MongooseURL = "mongodb://localhost:27017/mydatabase";

app.listen(port, () => {
  Mongoose.connect(MongooseURL);
  console.log(`Server is running on port ${port}`);
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.post("/submit", (req, res) => {
  res.send("Form submitted successfully");
});
