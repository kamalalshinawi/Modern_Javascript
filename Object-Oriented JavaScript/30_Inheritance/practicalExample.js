class Runner {
  constructor(friend) {
    this.friend = friend;
    Object.assign(this, canRun);  // run() on INSTANCE
  }
}

const Ahmed = new Runner("Mostafa");
const Sara = new Runner("Ahmed");

// 1. Mutating prototype - affects all
Runner.prototype.walk = function() {
  console.log(`${this.friend} is walking`);
};
Ahmed.walk();  // ✅ "Mostafa is walking"
Sara.walk();   // ✅ "Ahmed is walking"

// 2. Reassign instance prototype - only affects that instance
Object.setPrototypeOf(Ahmed, { swim() { console.log(`${this.friend} is swimming`); } });
Ahmed.swim();  // ✅ "Mostafa is swimming"
Sara.swim();   // ❌ TypeError

// 3. Class still works normally for future instances
const Khalid = new Runner("Khalid");
Khalid.walk();  // ✅ "Khalid is walking" (still has prototype methods)