const PubSub = require('../helpers/pub_sub.js');
const BeerListView = require('./beer_list_view.js');

const BeerView = function (container) {
  this.container = container;
};

BeerView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-ready', event => {
    const beers = event.detail;
    this.render(beers);
  });
}

BeerView.prototype.render = function (beers) {
  this.container.innerHTML = '';
  // beers.forEach(beer => {
  for (i=0; i< beers; i++){
    // console.log(beers);
    const beerItem = new BeerView(this.container)
    beerItem.render(i);

  }
};


module.exports = BeerView;
