// Primitive types
let a = true;
let b = BigInt(2565) + BigInt(2532); 
let c = undefined;
let d = 1235;
let e = null;
let f = Symbol("I am a symbol");
let g = "Aravind Bolar"

console.log(typeof a,"--->", a);
console.log(typeof b,"--->", b);
console.log(typeof c,"--->", c);
console.log(typeof d,"--->", d);
console.log(typeof e,"--->", e);
console.log(typeof f,"--->", f);
console.log(typeof g,"--->", g);

console.log();
// Non-primitive data type ---> Objects
const person = {
    firstName:"Aravind", 
    lastName:"Bolar", 
    age:50, 
    birthplace : ['Kasargod','Kerala','India','Asia'],
    "Film Industry":"Coastalwood"
};

console.log(person['firstName']);
console.log(person['first' + 'Name']);
console.log(person['middleName']);
console.log(person['Film Industry'])
console.log(person['birthplace'])
console.log(person.age)
console.log(person.birthplace)

let years = 'age';
console.log(person[years])

//Updating
person['birthplace'] = ['Kasargod'];
console.log(person['birthplace'])
person.birthplace = ['Kasargod','Kerala'];
console.log(person['birthplace'])

//Adding new property
person.title = 'Tulunada Maanikya'
person['famous dialogue'] = 'Enk shilpa bode'

console.log(person,"\n\n")

delete person['birthplace']
delete person.title

console.log(person)

