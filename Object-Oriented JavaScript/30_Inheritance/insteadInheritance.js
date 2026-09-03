const canFly = {
  fly() {
    console.log("i can fly with this ", this.speed);
  },
};

const canRun = {
  run() {
    console.log(`i can run with this ${this.friend}`);
  },
};

class Animal {
  constructor(speed) {
    this.speed = speed;
    Object.assign(this, this.testMethod(), canFly);
  }
  testMethod() {
    console.log("this is a test method");
  }
}

class Runner {
  constructor(friend) {
    this.friend = friend;
    Object.assign(this, canRun);
  }
}

const lion = new Animal(100);
const Ahmed = new Runner("Mostafa");
lion.fly();
Ahmed.run();
lion.testMethod();
console.log(lion); // the test method not added to the lion object because it is not a property of the object, it is a method of the class.
console.log(Ahmed);
