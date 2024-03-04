let promise_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Base Promise");
    resolve(1000);
  });
});

promise_1.then((value) => {
  console.log(value);
  console.log("Handler-1\n");
});

promise_1.then((value) => {
  console.log(value);
  console.log("Handler-2\n");
});

promise_1.then((value) => {
  console.log(value);
  console.log("Handler-3\n");
});

promise_1.then((value) => {
  console.log(value);
  console.log("Handler-4\n");
});
