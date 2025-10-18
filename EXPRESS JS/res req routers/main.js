const express = require("express");
const blog = require('./routes/blog')

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use('/blog', blog)

app.get("/", (req, res) => {
  console.log("hey it is a get request");
  res.send("Hello saksham 1");
}); // get request has a limit

app.post("/", (req, res) => {
  console.log("hey it is a post request");
  res.send("post request test");
}); // can be tested in html

app.put("/", (req, res) => {
  console.log("hey it is a put request");
  res.send("put request test");
}); //used to update , also tested in html

// Can also make delete request
// get post put can be chained also

app.get("/index", (req, res) => {
  console.log("hey its index file");
  res.sendFile("templates/index.html", { root: __dirname });
}); // request for html files access

app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4 });
}); //api cannot be post requested



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
