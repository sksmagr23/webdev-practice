/*Promises:-
let promise = new Promise(function(resolve, reject)   
   ///do something
})
Parameters:
The promise constructor takes only one argument which is a callback function The callback function takes two arguments, resolve and reject.
It performs operations inside the callback function and if everything went well then call resolve.
If desired operations do not go well then call reject.  

A Promise has four states:
fulfilled: Action related to the promise succeeded
rejected: Action related to the promise failed
pending: Promise is still pending i.e. not fulfilled or rejected yet
settled: Promise has been fulfilled or rejected   

Promise Consumers: Promises can be consumed by registering functions using .then and .catch methods.
We also use the .finally() method if we want to just print our result irrespective of any error that occurred during promise execution.   */

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Harry");
    }, 2000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you 2");
  } else {
    setTimeout(() => {
      console.log("Yes I am done 2");
      resolve("Harry 2");
    }, 1000);
  }
});

let prom3 = Promise.all([prom1, prom2]);
prom3
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log(err);
  });
