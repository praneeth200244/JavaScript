const prompt = require('prompt-sync')()

// Passing functions as arguments
fun = (readNumbers,printNumbers) => {
    let a = readNumbers();
    console.log("Main functions: ", a);
    printNumbers(a);
}

const readNumbers = function () {
    let a = []
    a.unshift(Number.parseInt(prompt("Enter value for a: ")));
    a.unshift(Number.parseInt(prompt("Enter value for b: ")));
    return a
}

function printNumbers(a) {
    console.log(a);
}

fun(readNumbers,printNumbers);

// Returning function as return value
function sum(a,b) {
    return function(num){
        return a*b*num;
    }
}

hof = sum(10,15);
console.log(hof(10));

const myObject = {
    sum : function(a,b) {
        return a+b;
    },
    product (a,b) {
        return a*b;
    }
}

console.log(myObject["product"](5,6))
console.log(myObject.sum(5,6))
