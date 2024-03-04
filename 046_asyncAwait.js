// async function always returns a promise
async function asyncAwait() {
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise-1");
      resolve(100);
    }, 2000);
  });

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise-2");
      resolve(200);
    }, 4000);
  });

  const pa1 = await p1; // await doesn't return a promise
  const pa2 = await p2;

  return [pa1, pa2];
}

async function executeAsyncAwait() {
  console.time("run");
  try {
    const value = await asyncAwait();
    console.log(value);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Execution completed");
  }
  console.timeEnd("run");
}

executeAsyncAwait();
