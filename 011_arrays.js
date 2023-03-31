//Declaring and defining an array
let arr = [false, Number.parseInt(1234), undefined, 1234, null, Symbol('@#$%'), "Apple"];
console.log(arr)
console.log(typeof arr)

console.log(arr.length)

console.log(arr[arr.length]) //This gives undefined as 7 is not a valid index

//Accessing values of array
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4], "\n")

//Accessing values of array using for loop
for (let i=0; i<arr.length; i++) {
    console.log(arr[i])
}
console.log("\n");

for (let key in arr) {
    console.log(arr[key])  //    console.log(key) prints index
}
console.log("\n");

for (let key of arr) {
    console.log(key)  
}
console.log("\n");


//Changing values in the array (arrays are mutable)
arr[3] = 4123;
console.log(arr)

//Adding new value to the array
arr[arr.length] = 123456;
console.log(arr, "\n\n")

//Array methods
arr = [1, 2, 3, 4, 50];

let a = arr.toString()
console.log(typeof a, '---->  ', a)

a = arr.join('<-------->') 
console.log(typeof a, '---->  ', a)

//Removes and returns last element of the array
a = arr.pop()
console.log(typeof a, a, arr)

//Appends new element and returns new length of the array
a = arr.push(100)
console.log(typeof a, a, arr)

//Removes and returns first element of the array
a = arr.shift()
console.log(typeof a, a, arr)

//Adds new element to the start of the array and returns new length
a = arr.unshift(12345)
console.log(typeof a, a, arr)


let m = ['a', 'b', 'c', 'd'];
let n = ['e', 'f', 'g', 'h'];
let w = ['i', 'j', 'k', 'l'];


let newArray = m.concat(n)
console.log(newArray)
console.log(m)
console.log(n)
console.log(m.concat(m,n,w,newArray),"\n\n")

//sort() method sorts alphabetically 
console.log((m.concat(m,n,w,newArray)).sort()) //Modifies original array
t = [100, 25, 563, 8, 592, 1 , 2552]
console.log(t.sort())
console.log(t)
u = [1,2,3,4,5,6,'a','b']
console.log(u.sort())

//To sort array in ascending/descending order
let compare = (a,b) => {
    return a-b; // for ascending order
    //return b-a;  for descending order
}

u = [1,12,83,94,5,6]
console.log(u.sort(compare))

//Reverses original array
console.log(u.reverse(), "\n\n")

let num = [1,2,3,5,4,2,6,8,12]
let deletedValues = num.splice(2,4,1022,1036,425,758,4125,963,152)
console.log("Deleted values: ", deletedValues, 'Type:', typeof deletedValues)
console.log("Modified original array: ", num, "\n\n")

let j = [1,5,6,8,9,4,6,5,6]
console.log(j.slice(2)) //Creates newarray
console.log(j.slice(2,6)) //Creates newarray
console.log(j)







