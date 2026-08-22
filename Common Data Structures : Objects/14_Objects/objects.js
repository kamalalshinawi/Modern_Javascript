// Object literal notation (most common way)
// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// Empty object
let empty = {};

// Object with different value types
let person = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "gaming"],
  address: {
    city: "New York",
    country: "USA",
  },
};



// let user = {
//   name: "John",
//   age: 30,
// };

// Dot notation
console.log(user.name); // John

// Bracket notation
console.log(user["age"]); // 30

// Dynamic property access
let key = "name";
console.log(user[key]); // John

// Property that doesn't exist
console.log(user.height); // undefined



let user = {
  name: "John",
};

// Adding new properties
user.age = 30;
user["isAdmin"] = true;

console.log(user)


// Modifying existing properties
user.name = "Jane";

// Deleting properties
delete user.isAdmin;

console.log(user); // { name: "Jane", age: 30 }