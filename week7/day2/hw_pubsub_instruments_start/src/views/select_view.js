const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
}

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Instrument:all-instruments-ready', (event) => { //context
    const allInstruments = event.detail;
    this.displayInstrument(allInstruments);
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value //store value ofrom addlistener
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.displayInstrument = function (instrumentData) {
  //loop over array of instrument object and retrieve index of obj.
  instrumentData.forEach((instrument, index)) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = SelectView;
