const BeerListView = function (parent) {
  this.parent = parent;
};

BeerListView.prototype.bindEvents = function () {
  const container = document.createElement('div');
  container.classList.add('beer');

  const beerName = document.createElement('h2');
  beerName.textContent = beer.name;
  container.appendChild(beerName);

  const tagline = document.createElement('p');
  tagline.textContent = `Beer: ${beer.tagline}`;
  container.appendChild(tagline);

  const description = document.createElement('p');
  description.textContent = `Beer: ${beer.description}`;
  container.appendChild(description);
   console.log(description);
  this.parent.appendChild(container);


};

module.exports =  BeerListView;
