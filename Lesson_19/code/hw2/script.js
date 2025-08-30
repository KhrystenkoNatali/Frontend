/*
### 2 (по желанию)
a)
Создай функцию-конструктор объектов Account(iban,owner, balance), 
которая возвращает объект с:
- номер счета (iban)
- именем владельца (owner)
- балансом (balance)  
методами:
- **deposit**(amount) — пополнение счёта
- **withdraw**(amount) — снятие денег (если хватает баланса)
- **getBalance**() — вывод текущего баланса

Создайте несколько объектов счетов. Создайте массив из
счетов. Выведите информацию о всех счетах в консоль

b) напишите функцию, transfer, которая получает два счета, 
и выполняет перевод между счетами вызывая методы deposit и
withdraw соответственно. 

с) (чуть сложнее)
 В качестве результата функции transaer, в случае успешной 
операции, должен cформироваться объект: 
- account1 (счет списания), 
- account2 (счет зачисления),
- amount (сумма)
- transactionInfo() (функция, которая выводит информацию о транзакции)  

Если транзакция прошла неуспешно, объект должен содержать 
еще и поле error c информацией об ошибке. Естественно,
transactionInfo() должна в этом случае выводить информацию 
о неуспешной транзакции. В случае, если транзакция успешна, 
поля error не должно быть.

*/

function Account(iban, owner, balance){
    this.owner = owner;
    this.iban = iban;
    this.balance = balance;

    this.deposit = function(amount){
        if(amount<=0){
            return false;
        } else {
            this.balance += amount;
            return true;
        }
    };

    this.withdraw = function(amount){
        if(amount <= 0 || this.balance < amount){
            return false;
        } else {
            this.balance -= amount;
            return true;
        }
    }

    this.getBalance = function(){
        return this.balance;
    }

}

const jackAccount = new Account("DE12345", "jack",10000);
console.log(jackAccount);
console.log('+1000', jackAccount.deposit(1000));
console.log(jackAccount.getBalance())
console.log('-1500', jackAccount.withdraw(1500));
console.log(jackAccount.getBalance())
console.log("------ перевод --------");
const annAccount = new Account("DE12345", "ann", 0);

const transaction = transfer(jackAccount, annAccount, 10000);
console.log(transaction);
console.log(annAccount);
console.log(transaction.transactionInfo());







function transfer(acc1,acc2,amount){
    if (acc1.withdraw(amount)){
        acc2.deposit(amount);
        return new Transaction(acc1,acc2,amount);
    } else {
        return new Transaction(acc1,acc2,amount, "не достаточно средств");
    }
}



function Transaction(acc1, acc2, amount, error){
    this.account1 = acc1;
    this.account2 = acc2;
    this.amount = amount;
    if(error!==undefined){
        this.error = error;
    }

    this.transactionInfo = function(){
       const iban1 = this.account1.iban || "счет не определен";
       const iban2 = this.account2.iban || "счет не определен";
       const msg = ('error' in this)? ` - error: ${this.error} `:'';
       return `Перевод с ${iban1} на  ${iban2}  на сумму ${amount}${msg}`; 
    }

}