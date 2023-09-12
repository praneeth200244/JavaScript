let key = prompt("Enter the key: ")
let value = prompt("Enter the value: ")

localStorage.setItem(key, value)

document.write(localStorage.getItem("A"))
localStorage.removeItem("A")

document.write(localStorage.key(2))

console.log(localStorage.length)

localStorage.A = "ANT"
delete localStorage.A


const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

const personString = JSON.stringify(person);
localStorage.setItem("personData", personString);

const storedPersonString = localStorage.getItem("personData");
const storedPerson = JSON.parse(storedPersonString);

console.log(storedPerson.name); 
console.log(storedPerson.age); 
console.log(storedPerson.city); 



localStorage.clear()