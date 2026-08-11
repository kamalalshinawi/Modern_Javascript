let user = {
  name: "John",
  age: 30,
};

// Using hasOwnProperty method
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("height")); // false

// Using Object.hasOwn (modern way)
console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "height")); // false

// Using 'in' operator
console.log("name" in user); // true
console.log("height" in user); // false




let user = {
  name: "John",
  age: 30,
  city: "New York",
};

// Get all keys
console.log(Object.keys(user)); // ["name", "age", "city"]

// Get all values
console.log(Object.values(user)); // ["John", 30, "New York"]

// Get key-value pairs as arrays
console.log(Object.entries(user)); // [["name", "John"], ["age", 30], ["city", "New York"]]




let user = {
  name: "John",
  age: 30,
};

// Creating a copy using spread operator
let userCopy = { ...user };
userCopy.name = "Jane";

console.log(user.name); // "John"
console.log(userCopy.name); // "Jane"




let user = {
  name: "John",
  age: 30,
  // Method using function declaration
  sayHi: function () {
    console.log("Hi! I'm " + this.name);
  },
  // Shorthand method syntax (ES6+)
  greet() {
    console.log(`Hello! I'm ${this.name} and I'm ${this.age} years old`);
  },
};

user.sayHi(); // Hi! I'm John
user.greet(); // Hello! I'm John and I'm 30 years old




let calculator = {
  value: 0,
  add(number) {
    this.value += number;
  },
  subtract(number) {
    this.value -= number;
  },
  getCurrentValue() {
    return this.value;
  },
};

calculator.add(5);
console.log(calculator.getCurrentValue()); // 5
calculator.subtract(2);
console.log(calculator.getCurrentValue()); // 3




let name = "John";
let age = 30;

// Before ES6
let user1 = {
  name: name,
  age: age,
};

// With ES6
let user2 = {
  name, // same as name: name
  age, // same as age: age
};



// Before ES6
let user1 = {
  sayHi: function () {
    console.log("Hi!");
  },
};

// With ES6
let user2 = {
  sayHi() {
    // no need for 'function' keyword
    console.log("Hi!");
  },
};



let propName = "age";
let prefix = "user";

let user = {
  [propName]: 30, // use variable as property name
  [prefix + "Id"]: 1, // compute property name
  ["get" + propName.toUpperCase()]() {
    // computed method name
    return this[propName];
  },
};

console.log(user.age); // 30
console.log(user.userId); // 1
console.log(user.getAGE()); // 30
