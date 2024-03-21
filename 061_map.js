let newMap = new Map();
newMap.set("A", "Apple");
newMap.set("B", "Banana");
newMap.set("C", "Cat");
newMap.set("D", "Dog");

console.log(newMap, "\n\n");

for (const key of newMap) {
  console.log(key);
}
console.log("\n");

for (const [key, value] of newMap) {
  console.log(`${key} :- ${value}`);
}
console.log("\n");

// for (const key in newMap) {
//   console.log(key);
// }
// console.log("\n"); Invalid
