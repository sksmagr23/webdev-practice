const { name } = require('ejs');
const express = require('express')
const app = express()
const port = 4000

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.set('view engine', 'ejs');
// ejs is used to insert different data variables in templates files like index.html

app.get('/', (req, res) => {
  let siteName = "Adidas"
  let searchText = "Search Now" 
  let arr = [1,45,"hey"] 
  res.render("index", {siteName: siteName, searchText: searchText, arr})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})