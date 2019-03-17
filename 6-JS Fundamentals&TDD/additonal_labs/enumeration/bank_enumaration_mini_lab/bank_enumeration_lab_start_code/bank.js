var Bank = function() {
  this.accounts = [];
}

//adding 4 accounts too array
Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
}

//finds account by owener name//  keith
Bank.prototype.accountByName = function(accName){
  let accname = this.accounts;
  for (const acc of this.accounts){
    if (acc.name !== accname.name){
      accname = acc;
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

Bank.prototype.largestAccount = function(account3){
  let largest = this.accounts[0];
  // for (let i = 0; i <this.accounts.length;i++){
  for (const amount of this.accounts){
    console.log(largest.value)
    if (amount.value > largest.value){
      largest = amount;
    }
  }
  return largest;
}

Bank.prototype.payInterest = function(){


}

module.exports = Bank;
