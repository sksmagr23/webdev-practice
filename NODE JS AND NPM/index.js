console.log("hello world")
//THIS IS A NPM PROJECT ex:- slugify

var slugify = require('slugify')

let a = slugify('some string')// some-string
console.log(a)

//If you prefer something other than '-' as operator
const b = slugify('some string', '_') //some_string
console.log(b)
//SLUGIFY MAKES A VALID SLUG