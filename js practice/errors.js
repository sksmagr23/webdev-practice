let a = prompt("Enter the first number");
let b = prompt("Enter the second number");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry this is not allowed");
} //this shows error if string is entered rather than showing NaN. We are throwing error by ourselves

let sum = parseInt(a) + parseInt(b); // parseInt converts the string type of prompt to integer to perform sum rather than append of b to a.
console.log("The sum is", sum);

try {
  console.log("The sum is", sum * y);
} catch (error) {
  console.log("there is an error");
}

function main() {
  let x = 1;
  try {
    console.log("The sum is ", sum * x);
    return true;
  } catch (error) {
    console.log("Error hai");
    return false;
  } finally {
    console.log("files are being closed and db connection is being closed");
  } //finally helps in giving the final message and is mainly used inside function as return will not further evaluate finction 
}
let c = main();
