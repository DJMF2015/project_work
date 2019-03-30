var Bank = function() {
  this.accounts = [];
}

//adding 4 accounts too arrayPASS
Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
}

//finds account by owner name//  keith PASS
Bank.prototype.accountByName = function(accName){
  let accname = this.accounts;
  for (const account of this.accounts){
    if (acc.name !== accname.name){
      accname = account;
    }
  }
  return accname;
}
//same as above
Bank.prototype.accountByName = function( accname){
  let accountname = this.accounts.find(function(account){//es5s
    return account.name === accname;
  });
  return accountname;
}

Bank.prototype.largestAccount = function(){ //PASS
  let largest = this.accounts[0];
  for (const amount of this.accounts){
    if (amount.value > largest.value){
      largest = amount;
    }
  }
  return largest;
}

// Bank.prototype.payInterest = function(){
//   this.accounts = this.accounts.map(function(account){
//     let interestValue = account.value * 1.1;
//     return new Account(account.name, interestValue, account.type)
//   });
// };

Bank.prototype.businessAccounts = function(busAccount) {
  return this.accounts.filter(function(business){
    return business.type === 'business';
  });
}

Bank.prototype.totalValue = function () {
  return this.accounts.reduce(function(accumulator, currentAccount){
    return accumulator += currentAccount.value; //value account in Accounts
 //155
  }, 0);
}

Bank.prototype.averageValue = function (){
  return this.totalValue() / this.accounts.length; //length of array accounts
}
module.exports = Bank;
