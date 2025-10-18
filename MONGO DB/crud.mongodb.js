// CRUD OPERATIONS
use("CRUDdb") // Database name
// console.log(db) //Output:- CRUDdb


// CREATE
db.createCollection("courses") //creating new collection

db.courses.insertOne({
    name: "WEB course",
    price: 0,
    assignments: 12,
    projects: 45
})   // inserting single data object,inserts same data as much file is runned

db.courses.insertMany([
    {
        "name": "Python Programming",
        "price": 0,
        "assignments": 10,
        "projects": 30
    },
    {
        "name": "Data Science Fundamentals",
        "price": 0,
        "assignments": 15,
        "projects": 40
    },
    {
        "name": "Machine Learning Basics",
        "price": 0,
        "assignments": 8,
        "projects": 25
    },
    {
        "name": "Java Development",
        "price": 0,
        "assignments": 12,
        "projects": 35
    },
    {
        "name": "iOS App Development",
        "price": 0,
        "assignments": 14,
        "projects": 40
    },
    {
        "name": "Android App Development",
        "price": 0,
        "assignments": 13,
        "projects": 38
    },
    {
        "name": "Database Management",
        "price": 0,
        "assignments": 11,
        "projects": 30
    },
    {
        "name": "Cybersecurity Essentials",
        "price": 0,
        "assignments": 10,
        "projects": 35
    },
    {
        "name": "UI/UX Design",
        "price": 0,
        "assignments": 12,
        "projects": 40
    },
    {
        "name": "Cloud Computing Basics",
        "price": 0,
        "assignments": 9,
        "projects": 30
    }
]) // insering many datas


// READ
let a = db.courses.find({price:0})

console.log(a) //to find specific data
console.log(a.count())
console.log(a.toArray())

let b = db.courses.findOne({price:0})
console.log(b) //find first data with price 0


// UPDATE
db.courses.updateOne({price:0}, {$set:{price:100}})

db.courses.updateMany({price:0}, {$set:{price:1000}})


// DELETE
db.courses.deleteOne({price: 100})  //it deletes data one by one as we run the js file

db.courses.deleteMany({price: 1000})