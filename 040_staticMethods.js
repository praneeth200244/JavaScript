class Animal {
    constructor(name) { // Corrected the constructor declaration
        this._name = Animal.capitalize(name);
    }

    walk() {
        console.log("Animal " + this._name + " is walking");
    }

    eat() {
        console.log("Animal " + this._name + " is eating");
    }

    set name (name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1);
    }
}

let a1 = new Animal("Kariya");
let a2 = new Animal("Biliya");

console.log(a1 == a2);
console.log(a1 === a2);
console.log(a1.eat == a2.eat);
console.log(a1.eat === a2.eat);

a1.eat();
a2.walk();
console.log(a1.name)
a2.name = "BiliKariya"
console.log(a2.name)

let a3 = new Array(1,2,3,4,5)
console.log(a3)

console.log(a1 instanceof Animal)
console.log(a3 instanceof Animal)