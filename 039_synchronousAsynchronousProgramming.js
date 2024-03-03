const prompt = require("prompt-sync")();

// Synchronous programming
let a = prompt("What's your name: ");
let b = prompt("How old are you: ");
let c = prompt("Which is your native place: ");
console.log(a + " is " + b + " years old and his native place is " + c + ".");

// Asynchronous programming
console.log("Start");
setTimeout(function () {
  console.log("Asynchronous function demonstartion....");
}, 1000);
console.log("End");
