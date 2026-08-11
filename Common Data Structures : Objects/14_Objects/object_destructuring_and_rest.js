let user = {
  name: "John",
  age: 30,
  city: "New York",
};

// Basic destructuring
let { name, age } = user;
console.log(name); // "John"
console.log(age); // 30

// Destructuring with different variable names
let { name: userName, age: userAge } = user;
console.log(userName); // "John"
console.log(userAge); // 30

// Destructuring with default values
let { name, country = "USA" } = user;
console.log(country); // "USA" (default value used)



let user = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
};

// Using rest operator
let { name, age, ...rest } = user;
console.log(name); // "John"
console.log(age); // 30
console.log(rest); // { city: "New York", country: "USA" }