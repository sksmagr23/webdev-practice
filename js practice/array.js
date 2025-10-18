//Arrays
let a = [1, 93, 5, 6, 88]

for (let i = 0; i < a.length; i++) {
     const element = a[i];
     console.log(element)
    
 }

a.forEach((value, index, arr)=>{
     console.log(value, index, arr)
 })

let obj = {
     a: 1,
     b: 2,
     c: 3
 }
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
         const element = obj[key]; 
         console.log(key, element)
    }
 }

for (const value of a) {
    console.log(value)
}

// MAP FILTER REDUCE 
let arr = [1, 13, 5 ,7, 11];
let Arr2 = []
for (let index = 0; index < arr.length; index++) {
     const element = arr[index];
     Arr2.push(element**2)
}

let newArr = arr.map((e, index, array)=>{
    return e**2
})

console.log(newArr)
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5,6]
const red = (a, b)=>{
    return a+b
}
console.log(arr2.reduce(red))
