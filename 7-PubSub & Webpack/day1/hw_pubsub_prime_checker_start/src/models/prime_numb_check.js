// models/prime_number_check.js
//responsible for the handling of the business logic of app and rendering of page
const PubSub = require('../helpers/pub_sub.js');

const PrimeCheck = function (){

};

PrimeCheck.prototype.bindEvents = function (){
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const evenNumber = event.detail;
    const result = this.primeChecking(evenNumber);
    PubSub.publish('PrimeCheck:number-calculated', result);
  });
};


PrimeCheck.prototype.primeChecking = function (prime){
  if (prime <= 1){
    return 'not prime';
  }
  for (let i = 2; i < prime; i++){
    if (prime % i === 0){
      return 'not prime'; //if divisible by 0, return false
    }
  }
  return 'is a prime'; //if prime return
};


module.exports = PrimeCheck;
