import fs from "fs/promises"

// we can directly use await inside module, no need of async function
let a = await fs.readFile("saksham.txt")

let b = await fs.appendFile("saksham.txt", "\n\n\n\nthis is a amazing promise, prevents callback hell")
// I can append as much as I run program number of times
console.log(a.toString(), b)