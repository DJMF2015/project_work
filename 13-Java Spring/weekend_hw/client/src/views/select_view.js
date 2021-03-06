// const PubSub = require('../helpers/pub_sub.js');
import PubSub from '../helpers/pub_sub.js';

//refactored
class SelectView{
  constructor(element) {
    this.element = element;
  }

//refactored
  SelectView(element) {
    this.element = element;
  };

//refactored
  bindEvents() {
    PubSub.subscribe('InstrumentFamilies:data-ready', (evt) => {
      const allInstrumentFamilies = evt.detail;
      this.populate(allInstrumentFamilies);
    });

    //unrefactored
    // SelectView.prototype.bindEvents = function () {
    //   PubSub.subscribe('InstrumentFamilies:data-ready', (evt) => {
    //     const allInstrumentFamilies = evt.detail;
    //     this.populate(allInstrumentFamilies);
    //   });

//refactored
    this.element.addEventListener('change', (evt) => {
      const selectedIndex = evt.target.value;
      PubSub.publish('SelectView:change', selectedIndex);
    });
  };

//unrefactored
//   this.addEventListener('change', (evt) => {
//     const selectedIndex = evt.target.value;
//     PubSub.publish('SelectView:change', selectedIndex);
//   });
// };

//refactored
  populate(instrumentFamilyData) {
    instrumentFamilyData.forEach((familiy, index) => {
      const option = document.createElement('option');
      option.textContent = familiy.name;
      option.value = index;
      this.element.appendChild(option);
    });
  }
}
//unrefactored
// SelectView.prototype.populate = function (instrumentFamilyData) {
//   instrumentFamilyData.forEach((familiy, index) => {
//     const option = document.createElement('option');
//     option.textContent = familiy.name;
//     option.value = index;
//     this.element.appendChild(option);
//   });
// };

// Syntax: export default class {}
// module.exports = SelectView;
export default SelectView ;
