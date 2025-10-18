async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}
/*IIFE:-An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined
Expression-  
(function () {
  //code
})()                      */
(async function main() {
  let a = await sleep();
  console.log(a);
  let b = await sleep();
  console.log(b);
})();


// Destructuring
let [x, y, ...rest] = [1, 5, 7, 8, 9, 10];
console.log(x, y, rest); // rest = [7,8,9,10]

let obj = {
  p: 1,
  q: 2,
  r: 3,
};
let { p, q } = obj;
console.log(p, q);


// Spread Syntax
const sum = async (a, b, c) => {
  return a + b + c;
};
let arr = [1, 4, 6];
console.log(sum(arr[0], arr[1], arr[2]));
console.log(sum(...arr)); //... is spread operator: The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.


//Hoisting:-
/* JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code. 
Var supports hoisting while const ,let and class are non-hoisting */
