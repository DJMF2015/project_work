const PubSub = require('../helpers/pub_sub.js');
const BeerListView = require('./beer_list_view.js');

const BeerView = function (container) {
  this.container = container;
};
BeerView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beer-ready', event => {
    const beers = event.detail;
    this.render(beers);
  });
}

BeerView.prototype.render = function (beers) {
  this.container.innerHTML = '';
  beers.forEach(beer => {
    const beerItem = new BeerView(this.container)
    beerItem.render(beer);
  });
};

module.exports = BeerView;
