const date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toLocaleString());
console.log(date.getTime());
console.log(typeof date);
console.log(date.getTime());
console.log(
  date.toLocaleString("default", {
    weekday: "long",
  })
);

const customDate = new Date(2022, 1, 25, 12, 40, 45); //YYYY-MM-DD HH-MM-SS Month starts from 0
// const customDate = new Date("01-01-2022"); //YYYY-MM-DD HH-MM-SS Month starts from 0
// const customDate = new Date("2022-01-01"); //YYYY-MM-DD HH-MM-SS Month starts from 0
console.log("\n\n", customDate);
console.log(customDate.toDateString());
console.log(customDate.toLocaleString());

const myTimeStamp = Date.now();
console.log("\n\n", myTimeStamp); // Output in millisecond
console.log(Math.floor(myTimeStamp / 1000)); // Output in second
