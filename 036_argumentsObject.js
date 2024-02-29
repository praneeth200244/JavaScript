function sum() {
    console.log(arguments)

    let sum = 0;
    for (let i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum)
}
// Array methods are not applicable for an arguments object and arguments is not allowed inside arrow functions
// function sum () {
//     return arguments.reduce((total,element) => (total + element))
// }

sum (1,2,3,4,5,6,7,8,9,0)