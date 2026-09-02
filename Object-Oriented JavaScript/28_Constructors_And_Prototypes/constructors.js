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
