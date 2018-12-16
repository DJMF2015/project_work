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
  this.container.innerHTML = '';
  const div = document.createElement('div');
  this.container.appendChild(div);

  for (beer of beers){ //in
    const beerItem = new BeerListView(beer, this.container)
    beerItem.render(); //wasn't being called in BeerListView
  }
};

// BeerView.prototype.createBeerListItem = function (beer) {
//   const beerListView = new BeerListView();
//   const beerDetail = beerDetailView.createBeerList(beer);
//   return beerDetail;
// };

module.exports = BeerView;
