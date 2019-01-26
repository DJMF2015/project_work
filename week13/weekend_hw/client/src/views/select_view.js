const PubSub = require('../helpers/pub_sub.js');

class SelectView{
  constructor(element) {
    this.element = element;
  }

  //unrefactored
  SelectView(element) {
    this.element = element;
  };

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


module.exports = SelectView;
