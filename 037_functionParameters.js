// Default parameters
function sum(numberOfSides) {
    if (numberOfSides == undefined) {
        numberOfSides = 6;
    }
    console.log(Math.floor(Math.random() * numberOfSides) + 1);
}

sum(15);
sum();

console.log("\n");

function multiply(numberOfSides=6) {
    console.log(Math.floor(Math.random() * numberOfSides) + 1);
}

multiply(15);
multiply();

console.log("\n");

// It's convinient to mention default parameters in the right-end side in order to maintain order and get correct output
function product(a, numberOfSides=6) {
    console.log(Math.floor(Math.random() * numberOfSides * a) + 1);
}

product(15);
product(5);
product(5,6);

// function product(numberOfSides=6,a) {
//     console.log(`a=${a}, number of sides=${numberOfSides}`)
//     console.log(Math.floor(Math.random() * numberOfSides * a) + 1);
// }

// product(15);
// product(5,6);
product(a=10,numberOfSides=15);