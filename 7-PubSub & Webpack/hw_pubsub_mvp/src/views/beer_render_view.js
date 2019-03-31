const BeerRenderView = function(element, beer){

}

BeerRenderView.prototype.populate = function (div, beer) {
  div.appendChild(this.createCustomElement("h2", "textContent", beer.name));

  const list = document.createElement("ul");
  
  list.appendChild(this.createCustomElement("p", "textContent", `Tagline: ${beer.tagline}`));
  list.appendChild(this.createCustomElement("p", "textContent", `Volume: ${beer.volume}`));
  list.appendChild(this.createCustomElement("p", "textContent", `${beer.description}`));
  list.appendChild(this.createCustomElement("p", "textContent", `Brewed: ${beer.first_brewed}`));
  list.appendChild(this.createCustomElement("p", "textContent", `Ingredients: ${beer.ingredients}`));
  list.appendChild(this.createCustomElement("p", "textContent", `Brewers Tips: ${beer.brewers_tips}`));
  div.appendChild(list);

  const image = this.createCustomElement("img", "src", `${beer.image_url}`)

  div.appendChild(image);
};


BeerRenderView.prototype.createCustomElement = function (type, attr, value) {
  const element = document.createElement(type);
  element[attr] = value;
  return element;
};
module.exports = BeerRenderView;
