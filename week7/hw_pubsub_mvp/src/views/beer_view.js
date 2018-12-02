const PubSub = require('../helpers/pub_sub.js');
const BeerRenderView = require('./beer_render_view.js');

const BeerView = function(container){
  this.container = container
  this.beers = null;
};

BeerView.prototype.bindEvents = function () {
  PubSub.subscribe("Beers:all-beer-ready", (event) => {
    this.beers = event.detail;
     this.clearView();
    this.createBeerView(this.beers);
  });
};

BeerView.prototype.clearView = function () {
  this.container.innerHTML = ' ';
};

BeerView.prototype.createBeerView = function (beerData) {
  for (const beer of beerData) {
    const div = document.createElement('div');
    div.className = "particular-beer";
    const beerView = new BeerRenderView();
    beerView.populate(div, beer);
    this.container.appendChild(div);
  }
};

module.exports = BeerView;
