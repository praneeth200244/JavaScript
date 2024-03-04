let p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 1");
      resolve(1);
      // reject(1);
      // reject(new Error("Sorry"));
    }, 1000);
  });
};

let p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 2");
      resolve(2);
    }, 2000);
  });
};

let p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 3");
      resolve(3);
    }, 3000);
  });
};

let promiseAll = Promise.all([p1(), p2(), p3()]); // Invoke the functions to create Promises
//Promise.all() will be fullfilled iff all the promises are resolved

promiseAll
  .then((value) => {
    console.log("All promises are fulfilled", value);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

console.log("\n\n\n\n");

let promiseAllSettled = Promise.allSettled([p1(), p2(), p3()]); // Invoke the functions to create Promises

promiseAllSettled
  .then((value) => {
    console.log("***************", value);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

let promiseRace = Promise.race([p1(), p2(), p3()]); // Invoke the functions to create Promises

promiseRace
  .then((value) => {
    console.log("***************", value);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

let promiseAny = Promise.any([p1(), p2(), p3()]); // Invoke the functions to create Promises

promiseAny
  .then((value) => {
    console.log("***************", value);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

console.log("\n\n");

let promiseResolve = Promise.resolve(100);
promiseResolve
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

let promiseReject = Promise.reject(new Error("This is an custom error"));
promiseReject
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
