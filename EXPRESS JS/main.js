const express = require('express')
const app = express()
const port = 3000 ;

app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (request, res) => {
  res.send('Hello World')
})

app.get('/about', (request, res) => {
  res.send('Hello about')
})

app.get('/contact', (request, res) => {
  res.send('Hello contact!')
})

app.get('/blog', (request, res) => {
  res.send('Hello blogs')
})

app.get('/blog/:slug/', (request, res) => {
  // logic to fetch {slug} from the db
  // FOR URL: http://localhost:3000/blog/intro-to-saksham?mode=dark&region=in
  console.log(request.params) //will otuput { slug: 'intro-to-saksham' }
  console.log(request.query) // { mode: 'dark', region: 'in' }
  res.send(`Hello ${request.params.slug}`)
})

// app.get('/blog/intro-to-js', (request, res) => {
//   // logic to fetch intro to js from the db
//   res.send('Hello js developer')
// })
// app.get('/blog/intro-to-python', (request, res) => {
//   // logic to fetch intro to python from the db
//   res.send('Hello python developer')
// })

app.listen(port, () => {
  console.log(`Example app listening on my port ${port}`)
})