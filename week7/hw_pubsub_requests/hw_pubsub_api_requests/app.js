const Beers = require('./models/beers.js');
const BeerView = require('./views/beer_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const beer = new Beers();
  beer.bindEvents();
  beer.getBeers();

  const beerContainer = document.querySelector('#beer-container');
  const beerView = new BeerView(beerContainer);
  beerView.bindEvents();


  const beerSelect = document.querySelector('#beers');
  const beerSelectView = new SelectView(beerSelect);
  beerSelectView.bindEvents();
});
