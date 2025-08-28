function Account(iban, owner, balance) {
  return {
    iban,
    owner,
    balance,
    deposit(amount) {
      this.balance += amount;
    },
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        return true;
      } else {
        return false;
      }
    },
    getBalance() {
      return this.balance;
    }
  };
}

const acc1 = Account("DE001", "Анна", 1000);
const acc2 = Account("DE002", "Олег", 500);
const acc3 = Account("DE003", "Ирина", 300);

const accounts = [acc1, acc2, acc3];

console.log("Все счета:");
accounts.forEach((acc, i) => {
  console.log(`Счет ${i + 1}:`);
  console.log(`  IBAN: ${acc.iban}`);
  console.log(`  Владелец: ${acc.owner}`);
  console.log(`  Баланс: ${acc.getBalance()}€`);
});

function transfer(from, to, amount) {
  let result = {
    account1: from,
    account2: to,
    amount,
    transactionInfo: function () {
      if (this.error) {
        console.log("❌ Перевод не выполнен: " + this.error);
      } else {
        console.log(`✅ Успешный перевод ${this.amount}€`);
        console.log(`  Со счета: ${this.account1.owner} (${this.account1.iban})`);
        console.log(`  На счет: ${this.account2.owner} (${this.account2.iban})`);
      }
    }
  };

  if (from.withdraw(amount)) {
    to.deposit(amount);
  } else {
    result.error = "Недостаточно средств";
  }

  return result;
}

let transaction1 = transfer(acc1, acc2, 300);
transaction1.transactionInfo();

let transaction2 = transfer(acc3, acc1, 1000);
transaction2.transactionInfo();