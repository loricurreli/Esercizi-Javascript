class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {

    try{
      if (amount < 0) {
        throw new NegativeAmountError('The amount provided cannot be negative'); // Use custom Error class
      }
  
      this.#amount += amount;
    }
    catch(e){
      console.log(e.message);
      console.log(e.name);
    }
    
  }

  withdraw(amount) {

    try{
      if (amount < 0) {
        throw new NegativeAmountError('The amount provided cannot be negative'); // Use custom Error class
      }
  
      if (this.#amount < amount) {
        throw new WithdrawNotPermittedError('You cannot withdraw more than account balance'); // Use custom Error class
      }
  
      this.#amount -= amount;
    }
    catch(e){
      console.log(e.message);
      console.log(e.name);
    }
    
  }

  view() {
    console.log(this.#amount);
  }
}

// classe per un importo negativo

class NegativeAmountError extends Error {
  constructor(message) {
    super(message);
    this.name = "NegativeAmountError";

    
  }
}

// classe per importo superiore al saldo

class WithdrawNotPermittedError extends Error {
  constructor(message) {
    super(message);
    this.name = "WithdrawNotPermittedError";
  }
}


try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log('Something went wrong during bank account operations');
}