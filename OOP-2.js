class BankAccount {
  constructor(accountNumber, ownerName, balance = 0) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
    if (this.constructor === BankAccount) {
      throw new Error("BankAccount 클래스는 직접 인스턴스화할 수 없습니다");
    }
  }
  
  deposit(amount) {
    if (amount <= 0) {
      throw new Error("입금액은 0보다 커야 합니다");
    }
    this.balance += amount;
    return this.balance;
  }
  
  withdraw(amount) {
    if ( amount <= 0 && amount <= this.balance) {
      throw new Error("출금액은 0보다 크고, 잔고 보다 적어야 합니다");
    }
    this.balance -= amount;
    return this.balance;
    
  }
  
  getBalance() {
    return this.balance;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, ownerName, balance, price) {
    super(accountNumber, ownerName, balance);
    this.price = price;
    
  }

  CheckingAccount(price){
    console.log(`${price} 원 어치 수표 발행입니다.`);
  };
}

class Bank {
  constructor() {
    this.accounts = {}; // 계좌번호: BankAccount 인스턴스
  }

  addAcc(account) {
    this.accounts[account.accountNumber] = account;
  }

  checkAcc(accountNumber) {
    return this.accounts[accountNumber]?.getBalance();
  }

  remittance(fromAcc, toAcc, amount) {
    const sender = this.accounts[fromAcc];
    const receiver = this.accounts[toAcc];

    if (!sender || !receiver) throw new Error("계좌를 찾을 수 없습니다");

    sender.withdraw(amount);
    receiver.deposit(amount);
  }
}


const bank = new Bank();

const acc1 = new CheckingAccount("111", "철수", 1000, 0);
const acc2 = new CheckingAccount("222", "영희", 500, 0);

bank.addAcc(acc1);
bank.addAcc(acc2);

bank.remittance("111", "222", 300);

console.log(bank.checkAcc("111")); // 700
console.log(bank.checkAcc("222")); // 800
