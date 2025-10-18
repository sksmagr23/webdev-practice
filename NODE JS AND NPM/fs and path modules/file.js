const fs = require("fs")
//console.log(fs)

console.log("starting")
//fs.writeFileSync("saksham.txt", "Hello developer") //not synchronus,waits here until file is made

fs.writeFile("saksham2.txt", "hello bhau", ()=>{
    console.log("done")
    fs.readFile("saksham2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("saksham.txt", "WEB dev", (e, d)=>{
    console.log(d)
}) //to add data/text in created file

console.log("ending")

/* Output order:-when writeFile is used
starting
ending
done*/ //Aynchronus 