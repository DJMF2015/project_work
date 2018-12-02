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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

eval("const Beer = __webpack_require__(/*! ./models/beer.js */ \"./src/models/beer.js\");\nconst BeerView = __webpack_require__(/*! ./views/beer_view.js */ \"./src/views/beer_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('JavaScript Loaded');\n\n  const beer = new Beer();\n  beer.bindEvents();\n\n  const listContainer = document.querySelector('div#beers-list');\n  const beerView = new BeerView(listContainer);\n  beerView.bindEvents();\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

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

eval("const RequestHelper = function (url) {\n  this.url = url\n}\n\nRequestHelper.prototype.get = function (onComplete) {\n  return fetch(this.url)\n    .then(response => response.json());\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/beer.js":
/*!****************************!*\
  !*** ./src/models/beer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\nconst RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\")\n\nconst Beer = function () {\n  this.beer = null;\n}\n\nBeer.prototype.bindEvents = function () {\n  const requestHelper = new RequestHelper(\"https://api.punkapi.com/v2/beers\");\n  requestHelper.get().then((data) => {\n    this.beer = data;\n    PubSub.publish(\"Beers:all-beer-ready\", data);\n\n  });\n};\n\nmodule.exports = Beer;\n\n\n//# sourceURL=webpack:///./src/models/beer.js?");

/***/ }),

/***/ "./src/views/beer_render_view.js":
/*!***************************************!*\
  !*** ./src/views/beer_render_view.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const BeerRenderView = function(element, beer){\n\n}\n\nBeerRenderView.prototype.populate = function (div, beer) {\n  div.appendChild(this.createCustomElement(\"h2\", \"textContent\", beer.name));\n\n  const list = document.createElement(\"ul\");\n  \n  list.appendChild(this.createCustomElement(\"p\", \"textContent\", `Tagline: ${beer.tagline}`));\n  list.appendChild(this.createCustomElement(\"p\", \"textContent\", `Volume: ${beer.volume}`));\n  list.appendChild(this.createCustomElement(\"p\", \"textContent\", `${beer.description}`));\n  list.appendChild(this.createCustomElement(\"p\", \"textContent\", `Brewed: ${beer.first_brewed}`));\n  list.appendChild(this.createCustomElement(\"p\", \"textContent\", `Ingredients: ${beer.ingredients}`));\n  list.appendChild(this.createCustomElement(\"p\", \"textContent\", `Brewers Tips: ${beer.brewers_tips}`));\n  div.appendChild(list);\n\n  const image = this.createCustomElement(\"img\", \"src\", `${beer.image_url}`)\n\n  div.appendChild(image);\n};\n\n\nBeerRenderView.prototype.createCustomElement = function (type, attr, value) {\n  const element = document.createElement(type);\n  element[attr] = value;\n  return element;\n};\nmodule.exports = BeerRenderView;\n\n\n//# sourceURL=webpack:///./src/views/beer_render_view.js?");

/***/ }),

/***/ "./src/views/beer_view.js":
/*!********************************!*\
  !*** ./src/views/beer_view.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst BeerRenderView = __webpack_require__(/*! ./beer_render_view.js */ \"./src/views/beer_render_view.js\");\n\nconst BeerView = function(container){\n  this.container = container\n  this.beers = null;\n};\n\nBeerView.prototype.bindEvents = function () {\n  PubSub.subscribe(\"Beers:all-beer-ready\", (event) => {\n    this.beers = event.detail;\n     this.clearView();\n    this.createBeerView(this.beers);\n  });\n};\n\nBeerView.prototype.clearView = function () {\n  this.container.innerHTML = ' ';\n};\n\nBeerView.prototype.createBeerView = function (beerData) {\n  for (const beer of beerData) {\n    const div = document.createElement('div');\n    div.className = \"individual-beer\";\n    const beerView = new BeerRenderView();\n    beerView.populate(div, beer);\n    this.container.appendChild(div);\n  }\n};\n\nmodule.exports = BeerView;\n\n\n//# sourceURL=webpack:///./src/views/beer_view.js?");

/***/ })

/******/ });