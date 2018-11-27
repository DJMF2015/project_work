const PubSub = require('../helpers/pub_sub.js'); //require dependencies

const ResultView = function (){

};
//set up function to 'subscribe' to PrimeCheck for validation
ResultView.prototype.bindEvents = function (){
  PubSub.subscribe('PrimeCheck:number-calculated', (event) => {
    const evenNumbers = event.detail;
    this.showResult(evenNumbers);
    
  });
};
//function showResult that will be respon. for displaying number on page
ResultView.prototype.showResult = function (result) {
  const numberResult = document.querySelector('#result');//access Dom ele. with ID
  if (result) {
    numberResult.textContext = `Your number ${result} a prime number.`;
  } else{
<<<<<<< HEAD
    numberResult.textContent = `not a Prime!`;
=======
    numberResult.textContent = `${result} is not even!`;
>>>>>>> 309021b92a350e210181d62f3f537922bce25c13
  }
};
module.exports = ResultView;
