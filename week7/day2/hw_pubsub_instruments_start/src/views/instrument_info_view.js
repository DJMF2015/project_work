const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container) {
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:selected-instrument-ready', (event) => {
    const instrument = event.detail;
    this.render(instrument);
  });
};

InstrumentInfoView.prototype.render = function(instrument) {
  this.container.innerHTML = '';
  // ${instrument.description}, ${instrument.instruments} `;
  const infoDescription = this.createDescription(instrument);
  const infoHeading = this.createHeader(instrument);
  const infoMusicalList =  this.createMusicalList(instrument);

  this.container.appendChild(infoDescription);
  this.container.appendChild(infoHeading);
  this.container.appendChild(infoMusicalList);
};

InstrumentInfoView.prototype.createHeader = function(instrument){
  const heading = document.createElement('h2');
  heading.textContent =  instrument.name;
  return heading;
};

//render description of instrument
InstrumentInfoView.prototype.createDescription = function(instrument){
  const paraDescript = document.createElement('p');
  paraDescript.textContent = instrument.description;
  return paraDescript;
}
//render  list of instruments for each family eg)synth keyboard...
InstrumentInfoView.prototype.createMusicalList = function (list){
  const listInstruments = document.createElement('h3');
  listInstruments.innerHTML = `<h4>Instrument include: <hr> </h4><br> ${list.instruments} `;
  this.container.appendChild(listInstruments);
  return listInstruments;
}


module.exports = InstrumentInfoView;
