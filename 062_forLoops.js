const obj1 = {
  A: "Apple",
  B: "Banana",
  C: "Cat",
  D: "Dog",
};

for (const key in obj1) {
  console.log(`${key} :- ${obj1[key]}`);
}
console.log("\n\n");

const array_1 = [1, 2, 3, 4, 5];
for (const key in array_1) {
  console.log(`${key} :- ${array_1[key]}`);
}
