const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container) {
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:selected-instrument-ready', (event) => {
    const instrument = event.detail;
    instrument.renderWebView(instrument);
  });
};

InstrumentInfoView.prototype.renderWebView = function(instrument) {
  const infoPara = document.createElement('p');
  infoPara.textContent = `${instrument.name} `;
  this.container.innerHTML = '';
  this.container.appendChild(infoPara);
};





module.exports = InstrumentInfoView;
