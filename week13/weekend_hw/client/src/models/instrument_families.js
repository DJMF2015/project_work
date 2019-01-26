// const PubSub = require('../helpers/pub_sub.js');
import PubSub from '../helpers/pub_sub.js';

//refactored
class InstrumentFamilies   {
  constructor(data){
    this.data = data;
  }

//refactored
  bindEvents() {
    PubSub.publish('InstrumentFamilies:data-ready', this.data);
    PubSub.subscribe('SelectView:change', (evt) => {
      const selectedIndex = evt.detail;
      this.publishFamilyDetail(selectedIndex);
    });
  }


  // BABEL example (of above) compiled from es6 to es2015 or previous
  // bindEvents();
  // PubSub.publish('InstrumentFamilies:data-ready', undefined.data);
  // PubSub.subscribe('SelectView:change', function (evt) {
  //   var selectedIndex = evt.detail;
  //   undefined.publishFamilyDetail(selectedIndex);
  // });

//refactored
  publishFamilyDetail(selectedIndex) {
    const selectedFamily = this.data[selectedIndex];
    PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
  };

  //unrefactored
  // InstrumentFamilies.prototype.publishFamilyDetail = function (selectedIndex) {
  //   const selectedFamily = this.data[selectedIndex];
  //   PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
  // };

};
// Syntax: export default class {}
// module.exports = InstrumentFamilies;
export default InstrumentFamilies;
