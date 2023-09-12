// Declaring a variable using 'var'
var x;
console.log("x =",x);

// Redeclaring and updating x
var x = 2000;
console.log("x =",x)

{
    // Accessing 'var' variable inside block
    console.log("x =",x)
    // Updating the value of x
    x=100;
    console.log("x =",x);

    // Declaring variable y using 'let'
    let y;
    console.log("y =",y);

    // Redeclaring and initializing varibale y
    // let y=200; Gives error
    console.log("y =",y);

    // Declaring and initializing varibale z using 'const'
    const z=1000;
    console.log("z =",z);
}
// Accessing variables outside the block
console.log("x =",x);
// console.log("y =",y); Gives error
// console.log("z =",z); Gives error