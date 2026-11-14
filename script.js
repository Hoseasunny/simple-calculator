function createBankAccount(initialBalance){
    let balance= initialBalance;
    let isActive= true;

    return {
        deposit(amount){
            if (amount <= 0 || !Number.isFinite(amount)){
                
                return "Invalid deposite amount";
            }
            
            balance += amount;
            return balance;

        },
        withdraw(amount){
            if (amount<=0 || !Number.isFinite(amount)){
                return "Invalid withdrawal amount";
            }
            if (amount>balance){
                return `insufficient funds. available balance : ${balance}`;
            }
            balance-=amount

        },
        getBalance(){
            return balance;
        },
        transfer(amount,anotherAccount){
            if (amount<=0 || !Number.isFinite(amount)){
                return "Invalid withdrawal amount";
            }
            if (amount>balance){
                return `insufficient funds. available balance : ${balance}`;
            }
            else if (amount<=balance){
                anotherAccount.deposit(amount);
                balance-=amount;
                console.log(`Confirmed transaction of amount ${amount}. current balance ${balance}`)
                return balance;
            }
            
        },
        getAccountInfo(){
           return{
            balance,
            isActive: true?"Active":"Inactive"
           }
        }
        
    }
}

const account1 = createBankAccount(5000);
const account2 = createBankAccount(1000);

account1.transfer(1500,account2);
console.log(account2.getBalance());

account1.withdraw(3500);
console.log("\n");
console.log(account1.getBalance());