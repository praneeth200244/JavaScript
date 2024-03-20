const s1 = Symbol("Mangaluru");

const o1 = {
  [s1]: "Kudla", //Using symbol as a key in object
  item1: "Apple",
};
console.log(o1[s1]); //Only way to access key (which is of type symbol)
console.log(o1["item1"]);
console.log(o1.item1);

Object.freeze(o1); // The object will be freezed and the changes cannot be made after freezing.
o1.item1 = "Banana";
console.log(o1);
