const prompt = require('prompt-sync')();

// for loop
let n = Number.parseInt(prompt("Enter number of fibonacci terms: "))
let a = Number.parseInt(prompt("Enter 0th fibonacci term: "))
let b = Number.parseInt(prompt("Enter 1st fibonacci term: "))

for (let i=0; i<n; i++) {
    console.log(a)
    let c = a + b;
    a = b;
    b = c;
}
console.log("\n");

// for-in loop
const x = {
    'Aravind Bolar' : 54,
    'Bhojaraj Vamanjoor' : 50,
    'Devdas Kapikad' : 60,
    'Naveen D Padil' : 48,
    'Arjun Kapikad' : 30
}

for (let key in x) {
    console.log("Age of " + key + " is " + x[key]);
}
console.group("\n");

// for of loop
for (let b of "Aravind Bolar") {
    console.log(b);
}
console.log("\n");

//while loop
let i = 1;
while (i <= n) {
    console.log(i);
    i++;
}
console.log("\n");

//do-while loop
i = 1;
do {
    console.log(i);
    i++;
}while (i <= n);

