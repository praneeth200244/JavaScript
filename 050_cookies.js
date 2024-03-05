console.log(document.cookie);

let key = prompt("Enter the key: ");
let value = prompt("Enter the value: ");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

console.log(decodeURIComponent(document.cookie));


// Cookie Options
// Set a cookie that lasts for 7 days
document.cookie = "username=John; expires=" + new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();

// Set a cookie that can only be used on example.com and its subdomains
document.cookie = "theme=dark; domain=.example.com";

// Set a cookie that can only be accessed on the /products page
document.cookie = "cartItems=3; path=/products";
