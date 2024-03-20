console.log(Array.from("Mangaluru"));
console.log(Array.isArray("Mangaluru"));
let a = 100;
let b = 200;
let c = 300;
let d = 400;
console.log(Array.of(a, b, c, d));

const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat()); // Output: [1, 2, 3, 4, [5, 6]]

console.log(arr.flat(2)); // Output: [1, 2, 3, 4, 5, 6]
