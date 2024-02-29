let numArray = [1,5,6,9,7,3,4,12,52,95,43]

console.log(numArray, "\n")

for (let i=0; i<numArray.length; i++) {
    console.log(numArray[i])
}
console.log("\n")

for (let key in numArray) {
    console.log(numArray[key])  //    console.log(key) prints index
}
console.log("\n");

for (let key of numArray) {
    console.log(key)  
}
console.log("\n");

numArray.forEach((element)=>{
    console.log(element*element)
})
console.log("\n")

let s = "Apple Banana"
console.log(Array.from(s))