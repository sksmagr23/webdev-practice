const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/company");
const Employee = require("./models/Employee");

const port = 3000;

app.set("view engine", "ejs");

const getRandom = (arr) => {
  let rno = Math.floor(Math.random() * (arr.length - 1));
  return arr[rno];
};

app.get("/", async (req, res) => {
  const insertedData = await Employee.find();
  res.render("index", { employee: insertedData });
});

app.get("/generate", async (req, res) => {
  // clear the collection employee
  await Employee.deleteMany({});

  // generate random data
  let randNames = ["saksham", "akash", "sarif", "hinto"];
  let randLang = ["python", "js", "c++", "java"];
  let randCities = ["varansi", "delhi", "mumbai", "kolkata"];

  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
      name: getRandom(randNames),
      salary: Math.floor(Math.random() * 22000),
      language: getRandom(randLang),
      city: getRandom(randCities),
      isManager: Math.random > 0.5 ? true : false,
    });
    console.log(e);
  }
  
  res.render("index", { foo: "FOO" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
