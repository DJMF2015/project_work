const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Beer = function () {
  this.beer = null;
}

Beer.prototype.bindEvents = function () {
  const requestHelper = new RequestHelper("https://api.punkapi.com/v2/beers");
  requestHelper.get().then((data) => {
    this.beer = data;
    PubSub.publish("Beers:all-beer-ready", data);

  });
};

module.exports = Beer;
