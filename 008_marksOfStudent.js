// Program to print marks of students in an object using for loop
let marks = {
    'Kannada' : 125,
    'English' : 100,
    'Hindi' : 100,
    'Science' : 100,
    'Social Science' : 100,
    'Mathematics' : 100
} 

for (let i=0; i<Object.keys(marks).length; i++) { 
    console.log("Marks in", Object.keys(marks)[i], ":", marks[Object.keys(marks)[i]]);
}

console.log("\n");

for (let a in marks) {
    console.log("Marks in", a, ":", marks[a]);
}