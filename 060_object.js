const obj1 = {
  A: "Apple",
  B: "Banana",
};

const obj2 = {
  C: "Cat",
  D: "Dog",
};

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
console.log(obj1);
console.log(obj2);

const obj4 = { ...obj1, ...obj2 };
console.log(obj4);
console.log(Object.keys(obj4));
console.log(Object.values(obj4));
console.log(Object.entries(obj4));
console.log(obj4.hasOwnProperty("C"));
console.log(obj4.hasOwnProperty("E"));
