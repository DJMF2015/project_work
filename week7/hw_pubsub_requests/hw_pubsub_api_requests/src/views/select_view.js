const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-ready', event => {
    const names = event.detail;
    this.fill(names)
  });

  this.element.addEventListener('change', (event) => {
    const selectedName = event.target.value;
    PubSub.publish('Beers:SelectView:beers-selected', selectedName);
  })
};

SelectView.prototype.fill = function (beers) {
  beers.forEach((beer) => {
    const option = document.createElement('option');
    option.textContent = beer;
    this.element.appendChild(option);
  });
};

module.export = SelectView;
