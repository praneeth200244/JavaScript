//Lexical Scope
function fun_1(){ //Function declaration
    let a = "Aravind Bolar_1" //Block Scope
    console.log(a)

    fun_2 = () => { //Arrow function
        console.log("Fun_2",a);
        a = "Bhijaraj Vamanjoor"
        console.log("Fun_2",a);
        let b = "Aravind Bolar_2"
        console.log(b);

        const sum = function(a,b) { //Function expression
            console.log(a+b);
        }
        sum(5,10);
    }
    return fun_2;
}
let x = fun_1()
x() //CLosures: Function with it's lexical environement