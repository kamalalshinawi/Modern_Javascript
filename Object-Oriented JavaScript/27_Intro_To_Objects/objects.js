// This is a constructor function - note the capital letter
function Person(name, age) {
    // 'this' will refer to the new object being created
    this.name = name;
    this.age = age;
}

// Adding a method to Person's prototype
Person.prototype.greet = function() {
    console.log(`Hello, I'm ${this.name}`);
};

// Creating new Person objects using the 'new' keyword
const john = new Person('John', 30);
const jane = new Person('Jane', 25);

john.greet(); // "Hello, I'm John"
jane.greet(); // "Hello, I'm Jane"



console.log(john.hasOwnProperty('name')); // true - directly on john
console.log(john.hasOwnProperty('greet')); // false - on the prototype

// Check john's prototype
console.log(Object.getPrototypeOf(john) === Person.prototype); // true

// Check the prototype chain
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true



// Adding a new method to Person.prototype
Person.prototype.introduce = function() {
    console.log(`I am ${this.age} years old`);
};

// Both existing objects get the new method!
john.introduce(); // "I am 30 years old"
jane.introduce(); // "I am 25 years old"

// Compare memory usage
console.log(john.greet === jane.greet); // true - same function!
