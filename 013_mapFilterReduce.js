let arr = [1,2,3,4,5,]

//map method creates new array (ForEach loop doesn't create new array)
let newArray = arr.map((value, index, array) => {
    console.log(value*value+index, index, array)
    return (value**3)
})
console.log(newArray)
console.log(arr,"\n\n")

// filter method creates new array 
arr = [1,2,5,9,6,15,46,98,52]
newArray = arr.filter((val) => {
    return val > 10
})
console.log(newArray)
console.log(arr,"\n\n")

//reduce method
arr = [1,2,5,9,6,15,46,98,52]
newValue = arr.reduce((a,b) => {
    return a + b
})
console.log(newValue)
console.log(arr,"\n\n")

arr = [10,20,30,40,50,60,70,80]
const sum = (a,b) => {
    return a+b;
}
newValue = arr.reduce(sum)
console.log(newValue)
console.log(arr,"\n\n")

