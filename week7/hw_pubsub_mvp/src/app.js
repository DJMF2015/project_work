const Beer = require('./models/beer.js');
const BeerView = require('./views/beer_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const beer = new Beer();
  beer.bindEvents();

  const listContainer = document.querySelector('div#beers-list');
  const beerView = new BeerView(listContainer);
  beerView.bindEvents();
});
