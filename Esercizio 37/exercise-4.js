class BankAccount{
    constructor(importo_iniziale){
        this.saldo = importo_iniziale;
    }

    deposit (amount){
        this.saldo+=amount;
    }
    withdraw (amount){
        this.saldo-=amount;
    }
    view(){
        console.log("Saldo attuale: ", this.saldo);
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();