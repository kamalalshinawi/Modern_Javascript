// Static methods are called on the class itself, not on instances of the class. They are often used for utility functions that don't require an instance of the class to work.
class MathHelper {
  // Static methods are called on the class, not instances
  static square(x) {
    return x * x;
  }

  static isPositive(x) {
    return x > 0;
  }
}

// Use static methods without creating an instance
console.log(MathHelper.square(5)); // 25
console.log(MathHelper.isPositive(-3)); // false

// This won't work:
const math = new MathHelper();
// math.square(5); // Error!
