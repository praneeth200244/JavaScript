let a = "Aravind Bolar";
console.log(a, "\n");

console.log(a[0], "\n");

// Template literals
let x = "Arjun Kapikad";
let y = "Devdas Kapikad";
console.log(`Arjun's father is Devdas\n`);

//String interpolation
console.log(`${x}'s father is ${y}`); 
console.log(`${x}\n${y}\n`);

//Escape sequence characters
console.log('Arjun\'s father is Devdas\n'); 

//String methods
let name = "Arjun Mangaluru"
//name[0] = 'a' This is invalid

console.log(name.length)

console.log(name.toUpperCase())

console.log(name.toLowerCase())

console.log(name.slice(2,5))

console.log(name.slice(2))

console.log(name.replace("a","A")) //Replaces only first occurence of character

let friend = "Bhojaraj"
console.log(name.concat(" Encha uller"," Yaan soukyaaa ", friend, " anna"))

let trimName = "       Avv erag ave....undu ragale ijjiiii.....             "
console.log(trimName.trim())

console.log(friend.indexOf('c'))
console.log(friend.indexOf('a'))

let sentence = "Bengaluru is the capital of Karnataka"
let word = "Karnataka"
console.log(`${word} ${sentence.includes(word) ? "is" : " is not"} in the sentence`);

console.log(sentence.endsWith("a"))
console.log(sentence.startsWith("B"))

//Strings are immutable
console.log(name)