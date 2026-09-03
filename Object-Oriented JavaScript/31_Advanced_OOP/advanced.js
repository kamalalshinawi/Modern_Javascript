//  getBalance - deposit - withdraw -logTransaction - getLogTransactionHistory
// Balance => number - Transactions []

class BankAccount {
  #balance = 0; // private field
  #tranSactions = []; // private field
  constructor(initialBalance) {
    if (initialBalance <= 0) {
      throw new Error(`initial balance must be greater than 0`);
    }
    this.#balance = initialBalance;
  }

  getBalance() {
    return `your account balance is ${this.#balance}`;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error(`deposit amount must be greater than 0`);
    }
    this.#balance += amount;
    this.#logTransaction("deposit", amount);
    // this.#tranSactions.push({
    //   type: "deposit",
    //   amount: amount,
    //   date: new Date(),
    // });
    return this.#balance;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.#balance) {
      throw new Error(
        `withdraw amount must be greater than 0 and less than or equal to your balance`,
      );
    }

    this.#balance -= amount;
    this.#logTransaction("withdraw", amount);
    // this.#tranSactions.push({
    //     type: "withdraw",
    //     amount: amount,
    //     date: new Date(),
    //   });
    return this.#balance;
  }

  #logTransaction(type, amount) {
    // private method
    this.#tranSactions.push({
      type: type,
      amount: amount,
      date: new Date(),
      currentBalance: this.#balance,
    });
  }

  getLogTransactionHistory() {
    return [...this.#tranSactions];
  }
}

let accountMostafa = new BankAccount(1000);
console.log(accountMostafa.getBalance());
console.log(accountMostafa.deposit(500));
console.log(accountMostafa.getBalance());
console.log(accountMostafa.withdraw(200));
console.log(accountMostafa.getBalance());
console.log(accountMostafa.getLogTransactionHistory());

// console.log(accountMostafa.#logTransaction("deposit", 100)); // can't access private method
