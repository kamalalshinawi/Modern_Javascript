function User(name, age) {
  this.name = name;
  this.age = age;
}

// Add methods to the prototype, not the constructor
User.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};

User.prototype.isAdult = function () {
  return this.age >= 18;
};

const user1 = new User("John", 30);
const user2 = new User("Jane", 25);

// Now the methods are shared!
console.log(user1.greet === user2.greet); // true - memory efficient!

// We can still add unique properties to individual objects
user1.hobby = "reading";
console.log(user1.hobby); // "reading"
console.log(user2.hobby); // undefined



function Car(make, model) {
    // Instance properties (unique to each car)
    this.make = make;
    this.model = model;
    this.isRunning = false;
}

// Prototype methods (shared by all cars)
Car.prototype.start = function() {
    this.isRunning = true;
    console.log('Vroom!');
};

Car.prototype.stop = function() {
    this.isRunning = false;
    console.log('Stopping...');
};

const car1 = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Civic');

car1.start();
console.log(car1.isRunning); // true
console.log(car2.isRunning); // false


const car = new Car('Toyota', 'Camry');

// Check if property exists on object itself
console.log(car.hasOwnProperty('make')); // true
console.log(car.hasOwnProperty('start')); // false

// Check if property exists anywhere in prototype chain
console.log('start' in car); // true

// Get the prototype
console.log(Object.getPrototypeOf(car) === Car.prototype); // true

// Check if object is instance of constructor
console.log(car instanceof Car); // true
console.log(car instanceof Object); // true