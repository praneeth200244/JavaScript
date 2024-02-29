// Spread with function calls
const arr = [1,2,3,4,5,6,7,8,9,0]

console.log("O_1",arr)

console.log("O_2",...arr)

console.log("O_3",Math.max(arr))

console.log("O_4",Math.min(arr))

console.log("O_5",Math.max(...arr))

console.log("O_6",Math.min(...arr))

console.log("0_7",...'Aravind Bolar',"\n\n")

// Spread with array literals
const x = ['a','b','c','d','e'];
console.log(x)
console.log(...x)
const y = [...x,...["A",'A','A','A','A']]
console.log(y)

console.log(...arr,...x,...arr.slice(1,4),..."Namma Metro\n\n")

//Spread with objects
const a = {
    'A': 'apple',
    'B' : 'ball'
}
const b = {
    'C': 'cat',
    'D' : 'dog'
}
console.log(a)
console.log(b)

// console.log(...a,...b)
// console.log(...b,...a)

let c = {...a, 'C' : 'cat'}
console.log(c)
c = {...a, ...b, 'C' : 'cat'}
console.log(c)
c = {...a, ...b, 'E' : 'egg'}
console.log(c)

console.log({...[1,2,3,4,5,6,7,8,9,0]}) //Creates an object
console.log({..."Udupi"})//Creates an object