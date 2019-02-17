// const PubSub = require('../helpers/pub_sub.js');
import PubSub from '../helpers/pub_sub.js';

//refactored
class InstrumentFamilyView {
  constructor(container) {
    this.container = container;
  }

  //unrefactored
  // InstrumentFamilyView.prototype.bindEvents = function () {
  //   PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) => {
  //     const instrumentFamily = evt.detail;
  //     this.render(instrumentFamily);
  //   });
  // };

//refactored
  bindEvents() {
    PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) => {
      const instrumentFamily = evt.detail;
      this.render(instrumentFamily);
    });
  };

//DESTRUCTURED F
//refactored
  render({description, instruments, name = family}) {
     this.container.innerHTML = '';

     const familyName = this.createElement('h2', name);
     this.container.appendChild(familyName);

     const familyDescription = this.createElement('p', description);
     this.container.appendChild(familyDescription);

     const instrumentListTitle = this.createElement('h3', 'Instruments include:');
     this.container.appendChild(instrumentListTitle);

     const instrumentList = this.createInstrumentList(instruments);
     this.container.appendChild(instrumentList);
}
  //unrefactored
  // render(family) {
  //   this.container.innerHTML = '';
  //   const familyName = this.createElement('h2', family.name);
  //   this.container.appendChild(familyName);
  //
  //   const familyDescription = this.createElement('p', family.description);
  //   this.container.appendChild(familyDescription);
  //
  //   const instrumentListTitle = this.createElement('h3', 'Instruments include:');
  //   this.container.appendChild(instrumentListTitle);
  //
  //   const instrumentList = this.createInstrumentList(family.instruments);
  //   this.container.appendChild(instrumentList);
  // };

  //unrefactored
  // InstrumentFamilyView.prototype.createElement = function (elementType, text) {
  //   const element = document.createElement(elementType);
  //   element.textContent = text;
  //   return element;
  // };

  //refactored
  createElement(elementType, text) {
    const element = document.createElement(elementType);
    element.textContent = text;
    return element;
  };

  //unrefactored
  //   InstrumentFamilyView.prototype.createInstrumentList = function (instruments) {
  //     const list = document.createElement('ul');
  //
  //     instruments.forEach((instrument) => {
  //       const listItem = document.createElement('li');
  //       listItem.textContent = instrument;
  //       list.appendChild(listItem);
  //     });
  //
  //     return list;
  //   };
  //
  // };

    //refactored
  createInstrumentList(instruments) {
    const list = document.createElement('ul');
    instruments.forEach((instrument) => {
      const listItem = document.createElement('li');
      listItem.textContent = instrument;
      list.appendChild(listItem);
    });

    return list;
  };

};

// Syntax: export default class {}
// module.exports = InstrumentFamilyView;
export default InstrumentFamilyView;
