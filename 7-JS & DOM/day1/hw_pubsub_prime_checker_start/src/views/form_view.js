const PubSub = require('../helpers/pub_sub.js');

const FormView = function(){

}
//constructor object for submite event handler
FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();//prevent the event's default behaviour
    const numberCheck = event.target.number.value;
    console.log('inputted text:', numberCheck);//to check while building
    PubSub.publish('FormView:number-submitted', numberCheck);

  });
};

module.exports = FormView;//ensure mod can be sent to dependecies
