const prompt = require('prompt-sync')();

console.log("Operators in Js")
// Arithmetic Operators 
let a = 10;
let b = 4;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a / b = ", a / b);
console.log("a ** b = ", a ** b);
console.log("a % b = ", a % b);
console.log("a ^ b = ", a ^ b);
console.log("++a = ", ++a);
console.log("a++ = ", a++);
console.log("--a = ", --a);
console.log("a-- = ", a--);
console.log("a = ", a, "\n");

// Assignment Operators 
let p = 1;
p += 5;
console.log("p = ", p);
p -= 5;
console.log("p = ", p);
p *= 5;
console.log("p = ", p);
p /= 5;
console.log("p = ", p, "\n");

// Comparison Operators 
let comp1 = 6;
let comp2 = 7;
// let comp2 = "7";
console.log("comp1 == comp2 is ", comp1 == comp2);
console.log("comp1 != comp2 is ", comp1 != comp2);
console.log("comp1 === comp2 is ", comp1 === comp2);
console.log("comp1 !== comp2 is ", comp1 !== comp2);
console.log("comp1 > comp2 is ", comp1 > comp2);
console.log("comp1 < comp2 is ", comp1 < comp2);
console.log("comp1 >= comp2 is ", comp1 >= comp2);
console.log("comp1 <= comp2 is ", comp1 <= comp2, "\n");

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5);
console.log(x>y || x==5);
console.log(!false);
console.log(!true);
console.log(5);
console.log(!5, "\n ");

let q = prompt("Enter your age: ");
q = Number.parseInt(q);
console.log("You are", (q < 18 ? "not eligible" : "eligible"), "to vote\n\n");

//delete operator
let arr = [1,2,3,4,5,6,7,8,9,0]
console.log(arr.length)
delete arr[5]
console.log(arr.length,'---->', arr, "\n\n")

