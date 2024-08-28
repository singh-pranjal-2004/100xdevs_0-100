// Approach 1 -> Wrapping another async function
// This approach uses a callback
// You have created a function where other people can send a callback
// This is good, but could lead to callback hel
function myOwnSetTimeout(fn, duration) {
  setTimeout(fn, duration);
}

myOwnSetTimeout(function () {
  console.log("Custom SetTimeout");
}, 1000);

// What if I tell you -
// Create a function that logs something after 2s
// And then waits for 3 seconds to log another thing
function myOwnSetTimeout1(fn, duration) {
  setTimeout(fn, duration);
}

myOwnSetTimeout1(function () {
  console.log("Logging First Work");
  myOwnSetTimeout(function () {
    console.log("Logging Second Work");
  }, 1000);
}, 2000);
// Callbacks lead to unnecessary indentation
// This is called callback hell

// Lets see how promises fix this
// Approach 2 -> Using Promises

function myOwnSetTimeout2(duration) {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
  return p;
}

myOwnSetTimeout2(4000).then(function () {
  console.log("Log the first thing using Promises");
});

// Approach 3 -> Async Await
function myOwnSetTimeout3(duration) {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
  return p;
}

async function main(){
    await myOwnSetTimeout3(5000);
    console.log("Log the Async Await Promise");
}
main();

// Only Time to do Asynchronous Calls
// 1. Do a network call
// 2. Sleep/Wait for some time
// 3. Read a file
// 4. Database Call
