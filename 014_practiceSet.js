const prompt = require('prompt-sync')();

//Problem-1
let n = Number.parseInt(prompt("Enter value for n: "))

let arr = [];

for (let i=0; i<n; i++) {
    arr.push(Number.parseInt(prompt(`Enter value-${i+1}: `)))
}
console.log("The array elements:", arr, "\n\n")

//Problem-2
let number;
arr = []
do {
    number = Number.parseInt(prompt("Enter any number: "));
    arr.push(number)
} while(number != 0);
console.log("The array elements:", arr, "\n\n")

//Problem-3
let func = (value) => {
    return (value%10 == 0)
}
console.log("The numbers that are divisible by 10:", arr.filter(func), "\n\n")

//Problem-4
func = (value) => {
    return (value**2)
}
console.log("The square of numbers of array:", arr.map(func), "\n\n")

//Problem-5
arr = [1,2,6,9,8,4,3,7]
let product = arr.reduce((a,b) => {
    return (a*b)
})
console.log("Product of numbers: ", product);