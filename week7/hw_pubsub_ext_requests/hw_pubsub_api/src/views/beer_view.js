const PubSub = require('../helpers/pub_sub.js');
const BeerListView = require('./beer_list_view.js');

const BeerView = function (container) {
  this.container = container;
};

BeerView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-ready', (event) => {
    const beers = event.detail;
    this.render(beers);
  });
}

BeerView.prototype.render = function (beers) {
  //  this.container.innerHTML = '';
  for (beer in beers){
    const beerItem = new BeerListView(beer)
    this.container.appendChild(beer);
  }
};

BeerView.prototype.createBeerListItem = function (beer) {
  const beerListView = new BeerListView();
  const beerDetail = beerDetailView.createBeerList(beer);
  return beerDetail;
};

module.exports = BeerView;
