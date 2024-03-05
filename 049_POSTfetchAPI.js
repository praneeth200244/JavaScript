let options = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    title: "Udupi",
    reg_no: "KA 20",
    language: {
      1: "Tulu",
      2: "Kannada",
    },
  }),
};

// fetch('https://jsonplaceholder.typicode.com/posts',options)
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch((error)=>{
//         console.log(error)
//       })

const postData = async () => {
  console.log("****Start****\n");
  try {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      options
    );
    let r = await response.json();
    console.log(r);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("\n****End****");
  }
};

postData();
