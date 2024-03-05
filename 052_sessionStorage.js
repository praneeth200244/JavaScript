let key = prompt("Enter the key: ")
let value = prompt("Enter the value: ")

sessionStorage.setItem(key, value)

document.write(sessionStorage.getItem("A"))
sessionStorage.removeItem("A")

document.write(sessionStorage.key(2))

console.log(sessionStorage.length)

sessionStorage.A = "ANT"
delete sessionStorage.A


const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

const personString = JSON.stringify(person);
sessionStorage.setItem("personData", personString);

const storedPersonString = sessionStorage.getItem("personData");
const storedPerson = JSON.parse(storedPersonString);

console.log(storedPerson.name); 
console.log(storedPerson.age); 
console.log(storedPerson.city); 

window.onstorage = (e) => {
    console.log(e)
    alert("Session Storage Updated")
}

sessionStorage.clear()