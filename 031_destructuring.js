// Destructuring arrays
const alphabets = ['Apple','Banana','Cat','Dog','Eggs','Fish','Grapes','Hen','Ice cream']
console.log(alphabets)

const [a,b,...remaining] = alphabets;
console.log(a)
console.log(b)
console.log(remaining)
const [a1, , , , ...remaining1] = alphabets
console.log("A1: ",a1)
console.log("Remaining1:" ,remaining1)

// Destructuring objects

const x = {
    'A': 'apple',
    'B' : 'ball',
    'C': 'cat',
    'D' : 'dog'
}

const {A:p, B:q, C} = x;
// console.log(A) A is replaced by p
// console.log(B) B is replaced by q
console.log(C)
console.log(p)
console.log(q)

// const {A:l, B:m, P='N/A', C='N/A'} = x; Error: C is already defined. Value cannot be assigned to the existing property 
const {A:l, B:m, P:z='N/A', Q="Aravind Bolar"} = x;
console.log(l)
console.log(z)
console.log(m)
console.log(Q,"\n\n")

// Destructuring parameters
function fullName_1(person) {
    return `${person.firstName} ${person.lastName}`
}
function fullName_2(person) {
    const {firstName, lastName} = person;
    return `${firstName} ${lastName}`
}
function fullName_3({firstName,lastName,age}) {
    return `${firstName} ${lastName}-${age}`
}
const w = {
    firstName : 'Aravind',
    lastName : 'Bolar',
    age : '55',
    'Profession' : 'Actor'
}


console.log(fullName_1(w))
console.log(fullName_2(w))
console.log(fullName_3(w))

k = [
    {
        firstName : 'Aravind',
        lastName : 'Bolar',
        age : '55',
        'Profession' : 'Actor',
        BirthPlace : 'Mangalore'
    },
    {
        firstName : 'Naveen',
        lastName : 'Padil',
        age : '50',
        'Profession' : 'Actor',
        BirthPlace : 'Padil'
    }
]
console.log(k.map(({firstName,lastName,age}) => `${firstName} ${lastName} is ${age} years old`))
