function sum(a,b,c=1) { //c is default value
    console.log(a+b)
    return a+b+c 
}
let result= sum(5,2)
console.log("The sum of two num is:",result)
//arrow function,
const func1 = (x)=>{
    console.log("Hi i am arrow func",x)
}
func1(55)