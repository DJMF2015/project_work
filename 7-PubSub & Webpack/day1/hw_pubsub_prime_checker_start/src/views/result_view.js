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
  numberResult.textContent = `${result}`;
};
module.exports = ResultView;
