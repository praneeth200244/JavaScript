const prompt = require('prompt-sync')()

console.log("*****Guess the Number*****")

let randomNumber = Math.floor(Math.random() * (100-1) + 1);

let numberOfGuesses = 0;
do {
    numberOfGuesses++;
    number = Number.parseInt(prompt("Enter any number(in range 1-100): "))
    if (randomNumber == number) {
        console.log("You have guessed it correctly.....")
    } else if (randomNumber > number) {
        console.log("The number you have entered is lesser than the generated number")
    } else {
        console.log("The number you have entered is greater than the generated number")
    }
} while (randomNumber != number);

console.log("Your score: ", (100-numberOfGuesses))