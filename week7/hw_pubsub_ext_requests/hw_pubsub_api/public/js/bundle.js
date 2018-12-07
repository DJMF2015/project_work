/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Beers = __webpack_require__(/*! ./models/beers.js */ \"./src/models/beers.js\");\nconst BeerView = __webpack_require__(/*! ./views/beer_view.js */ \"./src/views/beer_view.js\");\nconst BeerListView = __webpack_require__(/*! ./views/beer_list_view.js */ \"./src/views/beer_list_view.js\");\nconst SelectView = __webpack_require__(/*! ./views/select_view.js */ \"./src/views/select_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  const beerSelect = document.querySelector('#beers');\n  const beerSelectView = new SelectView(beerSelect);\n  beerSelectView.bindEvents();\n\n  const beerContainer = document.querySelector('#beers-container');\n  const beerView = new BeerView(beerContainer);\n  beerView.bindEvents();\n\n  const beer = new Beers();\n  beer.bindEvents();\n  beer.getBeers();\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n  this.url = url;\n};\n\nRequestHelper.prototype.get = function () {\n  return fetch(this.url)\n    .then(res  => res.json());\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/beers.js":
/*!*****************************!*\
  !*** ./src/models/beers.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\n//constructor should be Beers at that what you're exporting\nconst Beers = function () {\n  this.beerData = [];\n  this.tagline = [];\n};\n\nBeers.prototype.bindEvents = function () {\n  PubSub.subscribe('Beers:SelectView:beers-selected', (event) => {\n    const selectedBeers =  event.detail;\n    console.log(selectedBeers);\n    const nameInChosenBeer = this.getListOfBeers(selectedBeers);\n    console.log(nameInChosenBeer);\n    PubSub.publish('Beers:beers-ready', nameInChosenBeer);//names ready instead of beers-ready\n  });\n};\n\nBeers.prototype.getBeers = function () {\n  const requestHelper = new RequestHelper('https://api.punkapi.com/v2/beers');\n  requestHelper.get().then((beers) => { // should be .then((beers) => {})\n    this.beerData = beers;\n    const name = this.getListofNames();\n\n    PubSub.publish('Beers:beers-ready', this.beerData);\n    //wasn't bening subscribed\n    // PubSub.publish('Beers:names-ready', this.beerData);\n  });\n};\n\nBeers.prototype.getListofNames = function () {\n  return this.beerData\n  .map(brew => brew.name)\n  .filter((beer, index, beers) => beers.indexOf(beer) === index);\n};\n\nBeers.prototype.getListOfBeers = function (name) {\n\n const selected  = this.name;\n // console.log(name);\n  return this.beerData.filter(brew => brew.name === name);\n\n};\n\nmodule.exports = Beers;\n\n\n//# sourceURL=webpack:///./src/models/beers.js?");

/***/ }),

/***/ "./src/views/beer_list_view.js":
/*!*************************************!*\
  !*** ./src/views/beer_list_view.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst BeerListView = function (beer, parentE) {\n  this.beerData = beer;\n  this.parentElement = parentE;\n};\n\nBeerListView.prototype.render = function () {\n  const container = document.createElement('div');\n  container.classList.add('beer');\n  container.classList.add('beer-list-view');\n  console.log(this.beerData);\n\n  const beerName = document.createElement('h2');\n  beerName.textContent = this.beerData.name;\n  container.appendChild(beerName);\n\n  const tagline = document.createElement('p');\n  tagline.textContent = `Beer: ${this.beerData.tagline}`;\n  container.appendChild(tagline);\n\n  const image = document.createElement('img');\n  image.src = `${this.beerData.image_url}`;\n  container.appendChild(image);\n\n  const description = document.createElement('p');\n  description.textContent = `Beer: ${this.beerData.description}`;\n  container.appendChild(description);\n\n  console.log(description);\n  this.parentElement.appendChild(container);\n\n\n};\n\nmodule.exports =  BeerListView;\n\n\n//# sourceURL=webpack:///./src/views/beer_list_view.js?");

/***/ }),

/***/ "./src/views/beer_view.js":
/*!********************************!*\
  !*** ./src/views/beer_view.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst BeerListView = __webpack_require__(/*! ./beer_list_view.js */ \"./src/views/beer_list_view.js\");\n\nconst BeerView = function (container) {\n  this.container = container;\n};\n\nBeerView.prototype.bindEvents = function () {\n  PubSub.subscribe('Beers:beers-ready', (event) => {\n    const beers = event.detail;\n    this.render(beers);\n  });\n}\n\nBeerView.prototype.render = function (beers) {\n  this.container.innerHTML = '';\n  const div = document.createElement('div');\n  this.container.appendChild(div);\n\n  for (beer of beers){ //in\n    const beerItem = new BeerListView(beer, this.container)\n    beerItem.render(); //wasn't being called in BeerListView\n  }\n};\n\nBeerView.prototype.createBeerListItem = function (beer) {\n  const beerListView = new BeerListView();\n  const beerDetail = beerDetailView.createBeerList(beer);\n  return beerDetail;\n};\n\nmodule.exports = BeerView;\n\n\n//# sourceURL=webpack:///./src/views/beer_view.js?");

/***/ }),

/***/ "./src/views/select_view.js":
/*!**********************************!*\
  !*** ./src/views/select_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst SelectView = function (element) {\n  this.element = element;\n};\n\nSelectView.prototype.bindEvents = function () {\n  PubSub.subscribe('Beers:beers-ready', event => {\n    const names = event.detail;\n    this.populate(names)\n  });\n\n  this.element.addEventListener('change', (event) => {\n    const selectedName = event.target.value;\n   console.log(selectedName);\n    PubSub.publish('Beers:SelectView:beers-selected', selectedName);\n  })\n};\n\nSelectView.prototype.populate = function (beers) {\n  beers.forEach((beer) => {\n    const option = document.createElement('option');\n    option.textContent = beer.name;\n    this.element.appendChild(option);\n  });\n};\n\nmodule.exports = SelectView;\n\n\n//# sourceURL=webpack:///./src/views/select_view.js?");

/***/ })

/******/ });