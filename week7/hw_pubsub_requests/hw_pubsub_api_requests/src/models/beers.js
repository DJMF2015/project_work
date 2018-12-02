const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

//constructor should be Beers at that what you're exporting
const Beers = function () {
  this.beerData = [];
};

Beers.prototype.bindEvents = function () {
  // was missing brackets around event on next line
  PubSub.subscribe('Beers:SelectView:beers-selected', (event) => {
    const selectedBeers =  event.detail;
    const nameInChosenBeer = this.getListOfBeers(selectedBeers);
    console.log(nameInChosenBeer);
    PubSub.publish('Beers:names-ready', nameInChosenBeer);
  });
};

Beers.prototype.getBeers = function () {
  const requestHelper = new RequestHelper('https://api.punkapi.com/v2/beers');
   //console.log(requestHelper);
  requestHelper.get().then((beers) => { // should be .then((beers) => {})
    this.beerData = beers;
    const name = this.getListofNames();

     console.log(name);
    PubSub.publish('Beers:beers-ready', name);
    PubSub.publish('Beers:names-ready', this.beerData);
  });
};

Beers.prototype.getListofNames = function () {
  return this.beerData
  .map(brew => brew.name)
  .filter((beer, index, beers) => beers.indexOf(beer) === index);
};

Beers.prototype.getListOfBeers = function (index) {
  // was missing bracket end of next line
 const selected  = this.name[index];
 console.log(selected);
  return this.beerData.filter(brew => brew.name === name);

};

module.exports = Beers;
