class Account {
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements  = [];
    }

    deposit(val){
        this.movements.push(val);
    }
    
    withdraw(val){
        this.deposit(-val); 
    }
}

const acc1 = new Account('Rizz', 'INR', 123);
acc1.deposit(250);
acc1.withdraw(300);

console.log(acc1.movements);