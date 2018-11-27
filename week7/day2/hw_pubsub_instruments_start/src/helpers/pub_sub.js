const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
}

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Instrument:all-instruments', (event) => {
    const allInstruments = event.detail;
  })
}
