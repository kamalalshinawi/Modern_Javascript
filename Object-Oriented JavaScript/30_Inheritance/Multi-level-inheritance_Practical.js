class Parent {
  constructor(fname) {
    this.fname = fname;
    this.age = 200;
  }

  getFullName() {
    this.age = this.age - 50;
  }
}

class firstChild extends Parent {
  constructor(fname, gender, sName) {
    super(fname);
    this.gender = gender;
    this.sName = sName;
    // this.age = age;
  }

  getFullSecondName() {
    super.getFullName();
    return `Full Name: ${this.fname} and Age: ${this.age} and Gender: ${this.gender} and Second Name: ${this.sName}`;
  }
}

const ahmed = new firstChild("Ahmed", 25, "Male", "Ali");
console.log(ahmed);
console.log(ahmed.getFullSecondName());
