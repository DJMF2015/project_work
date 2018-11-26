// models/priem_number_check.js
//responsible for the handling of the business logic of app and rendering of page
const PubSub = require('../helpers/pub_sub.js');

const PrimeCheck = new function (){

};

PrimeCheck.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const evenNumber = event.detail;
    const result = this.primeChecking(evenNumber);
    PubSub.publish('PrimeCheck:number-calculated', result);
  });
};


PrimeCheck.prototype.primeChecking = function (prime){
  if (prime <= 1){
    return false;
  }
  for (let i = 2; i < prime; i++){
    if (prime % i === 0){
      return false; //if divisible by 0, return false
    }
  }
  return true; //if prime return
};


module.exports = PrimeCheck;
