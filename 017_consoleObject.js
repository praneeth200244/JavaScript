console.log("Console Object");
console.info("This is an informational message");

console.error("Console Error");

console.assert("Console Assert False");
console.assert("Console Assert True");

const alphabets = {
    'A':'Apple',
    'B':'Banana',
    'C':'Cat',
    'D':'Dog'
};

console.table(alphabets);

console.warn("Warn");

console.time("forLoop")
for (let i=0; i<500; i++) {
    console.log(500)
}
console.timeEnd("forLoop")

console.clear();