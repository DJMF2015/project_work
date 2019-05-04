//app.js is the 'entry point' for the application

//instantiate formview
const FormView = require('./views/form_view.js');
const PrimeCheck = require('./models/prime_numb_check.js');
const ResultView = require('./views/result_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const formView = new FormView(); //initialise new formView obj.
  console.log('JavaScript Loaded');
  formView.bindEvents();//to add behaviour to form's 'submit' by 'binding'

  const primeChecker = new PrimeCheck();
  primeChecker.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

});
