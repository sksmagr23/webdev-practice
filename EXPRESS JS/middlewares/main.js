const express = require("express");
const app = express();
const port = 3000;

// app.use(express.static("public"));

// Middleware 1 - Logger for our application, it can be used for all requests
app.use((req, res, next) => {
  console.log(req.headers) 
  req.sak = "middleware used in request" 
  console.log("m1");
  console.log(`${Date.now()} is a ${req.method}}`)
  // res.send("REquest done at m1") se yahi final response aayega aur agar next kiye to error aayega
  next();
});   //if next not used response fas jayega aage ka

// Middleware 2
app.use((req, res, next) => {
  console.log("m2");
  req.sak = " middleware 2 baad me chala to jo order me last me chala vo hi print hoga"
  next();
});


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello about!"+ req.sak);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
