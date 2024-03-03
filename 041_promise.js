let promise = new Promise(function (resolve, reject) {
  console.log("Start");
  resolve(100); //Callback Function
  reject(100); //Callback Function
  console.log("End");
});

console.log("Aravind Bolar-1");

setTimeout(function () {
  console.log("Aravind Bolar-2");
}, 2000);

console.log("Aravind Bolar-3");

setTimeout(function () {
  console.log("Aravind Bolar-4");
}, 1000);

console.log(promise);
