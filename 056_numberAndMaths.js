const x = 100;
console.log(x, typeof x);

const y = new Number(200);
console.log(y, typeof y);

const z = 100.2356;
console.log(z.toFixed(2));
console.log(z.toPrecision(4));

const a = 100000;
console.log(a.toLocaleString());
console.log(a.toLocaleString("en-IN"));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// Math
console.log(Math);
console.log(Math.abs(-96));
console.log(Math.round(56.235));
console.log(Math.round(56.635));
console.log(Math.ceil(56.235));
console.log(Math.floor(56.235));

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);
let minLimit = 10;
let maxLimit = 20;
console.log(Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit);
