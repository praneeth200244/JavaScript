let promise_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise-1");
    resolve(100);
  }, 2000);
});

promise_1
  .then((value) => {
    return new Promise((resolve, reject) => {
      console.log(value);
      console.log("Promise-2");
      resolve(200);
    });
  })
  .then((value) => {
    return new Promise((resolve, reject) => {
      console.log(value);
      console.log("Promise-3");
      resolve(300);
    });
  })
  .then((value) => {
    return new Promise((resolve, reject) => {
      console.log(value);
      console.log("Promise-4");
      reject(300);
    });
  })
  .catch((error, value) => {
    console.log("Some error occured");
    console.log(error);
  });
