typeof "hello" // "string"
typeof 42      // "number"
typeof null    // "object"  <-- this is a historical bug in JS
typeof []      // "object"
Array.isArray([]) // true


// 1️⃣ String - Text data
let name = "Ziyad"; // ya 'Ziyad'
console.log(typeof name); // "string"

// 2️⃣ Number - Integer ya floating point number
let age = 25;
let price = 99.99;
console.log(typeof age);   // "number"
console.log(typeof price); // "number"

// 3️⃣ BigInt - Bahut bade numbers ke liye
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"

// 4️⃣ Boolean - True ya False (logic ke liye)
let isLoggedIn = true;
let isAdmin = false;
console.log(typeof isLoggedIn); // "boolean"

// 5️⃣ Undefined - Jab variable declare ho par value assign na ho
let city;
console.log(city);        // undefined
console.log(typeof city); // "undefined"

// 6️⃣ Null - Jab variable intentional empty ho
let user = null;
console.log(user);        // null
console.log(typeof user); // ⚠️ "object" (JavaScript ka purana bug)

// 7️⃣ Symbol - Unique aur immutable value (mostly for object keys)
let id = Symbol("id");
console.log(typeof id); // "symbol"

// 8️⃣ Object - Key-value pairs (complex data types)
let person = {
  name: "Ziyad",
  age: 25
};
console.log(typeof person); // "object"

// 9️⃣ Array - Object ka special type (ordered list)
let fruits = ["apple", "banana", "mango"];
console.log(typeof fruits);       // "object"
console.log(Array.isArray(fruits)); // true

// 🔟 Function - Function bhi JS me object hota hai
function greet() {
  console.log("Hello!");
}
console.log(typeof greet); // "function"
