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

// InstrumentInfoView.prototype.createMusicalList = function (list){
//   const listInstruments = document.createElement('h3');
//   listInstruments.innerHTML = `<h4>Instrument include: <hr> </h4><br> <li>${list.instruments} </li>`;
//   this.container.appendChild(listInstruments);
//   return listInstruments;
// }
//render  list of instruments for each family eg)synth keyboard...
InstrumentInfoView.prototype.createMusicalList = function (listData){
  const unordered = document.createElement('ul')
  console.log(listData);
  //loop over instrumnet object and for each element in index add (append) to container as list
  listData.instruments.forEach((instrument, index) => {
    const ele = document.createElement('li');
    ele.textContent =instrument;
    ele.value = index;
    unordered.appendChild(ele);
  })
  return unordered;
}

module.exports = InstrumentInfoView;
