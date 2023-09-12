//Program to find mean of 'N' numbers
const prompt = require('prompt-sync')();
const readComputeMean = (N) => {
    let sum = 0;
    for (let i=0; i<N; i++) {
        let n = Number.parseInt(prompt("Enter number-" + (i+1) + ": "));
        sum += n;
    }
    return (sum/N);
}


let N = Number.parseInt(prompt("Enter a value for 'N': "));
let meanOfNumbers = readComputeMean(N)
console.log("Mean of",N,"numbers:", meanOfNumbers);
console.log("Mean of",N,"numbers (round-off):", Math.round(meanOfNumbers));

