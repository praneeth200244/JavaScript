const prompt = require('prompt-sync')();


let place = prompt("Enter name of the place: ");
let promise = fetch(`https://goweather.herokuapp.com/weather/{place}`);

promise.then((response) => {
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers)
    return response.json(); // Parse response body as JSON
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.error("An error occurred:", error);
});
