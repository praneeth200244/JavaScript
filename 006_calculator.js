const prompt = require('prompt-sync')();

let m = Number.parseInt(prompt("Enter first number: ", "10"));
let n = Number.parseInt(prompt("Enter second number: ", "20"));

let operator = prompt("Enter the operator:")

switch (operator) {
    case '+' : console.log(m , "+", n, "=", (m+n)); break;
    case '-' : console.log(m , "-", n, "=", (m-n)); break;
    case '*' : console.log(m , "*", n, "=", (m*n)); break;
    case '/' : if (n == 0) {
                    console.log("Invalid input....!Second number should be non-zero");
                } else {
                    console.log(m , "/", n, "=", (m/n)); 
                }
                break;
    case '%' : if (n == 0) {
                    console.log("Invalid input....!Second number should be non-zero");
                } else {
                    console.log(m , "%", n, "=", (m%n)); break;
                }
                break;
    default : console.log("Invalid operator....!"); break;
}