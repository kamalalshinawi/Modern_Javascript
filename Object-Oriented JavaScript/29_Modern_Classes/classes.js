class Calc {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    this.result = 0;
  }

  add() {
    this.result = this.num1 + this.num2;
    return this.result;
  }

  subtract() {
    this.result = this.num1 - this.num2;
    return this.result;
  }

  multiply() {
    this.result = this.num1 * this.num2;
    return this.result;
  }

  divide() {
    return new Promise((resolve, reject) => {
      if (this.num2 === 0) {
        reject(new Error("Cannot divide by zero"));
      }
      this.result = this.num1 / this.num2;
      resolve(this.result);
    });
  }
}

let calc = new Calc(10, 5);
console.log(calc.add()); // 15
console.log(calc.subtract()); // 5
console.log(calc.multiply()); // 50
calc
  .divide()
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));

let calc2 = new Calc(10, 0);
calc2
  .divide()
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message)); // "Cannot divide by zero"
