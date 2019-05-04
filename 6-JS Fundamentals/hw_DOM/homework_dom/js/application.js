//add event listeners
document.addEventListener('DOMContentLoaded', ()=> {
  const newItem = document.querySelector('#new-item');
  const clearAllBtn = document.querySelector('#delete')

  newItem.addEventListener('submit', handleFormSubmitItem);
  clearAllBtn.addEventListener('click', handleClearAllItems );

  //loop of radio btn options and on click register color change
  let btns = document.querySelectorAll("[name=color]");
  for (let button of Array.from(btns)) {
    button.addEventListener('change', ()=> {
      document.body.style.background=button.value;
    });
  }
  setupMonkeys()
});

// Add the event listener define function to respond to the evnt
const handleFormSubmitItem = function (event){
  event.preventDefault();//prevent page reloading immediately
  const primatesListItem = createPrimateListItem(event.target);
  const primateList = document.querySelector('#list-of-primates');
  primateList.appendChild(primatesListItem);

  event.target.reset();
};

//form functions
const createPrimateListItem = function (form){
  const primatesListItem = document.createElement('li')
  primatesListItem.classList.add('list-of-primates-item');

  const ape = document.createElement('h2');
  const genus = document.createElement('h3');
  const habitat = document.createElement('h4')
  const apetype = document.createElement('p');

  ape.textContent = form.ape.value;
  genus.textContent =form.genus.value;
  habitat.textContent = form.habitat.value;
  apetype.textContent = form.apetype.value;

  primatesListItem.appendChild(ape);
  primatesListItem.appendChild(genus);
  primatesListItem.appendChild(habitat);
  primatesListItem.appendChild(apetype);

  return primatesListItem; //return list items
}
// callback to reposnd to event when function is called
const handleClearAllItems = function (event){
  const primateList = document.querySelector('#list-of-primates');
  primateList.innerHTML = ''; //or primateList.textContent = ''
};


const photosLink = function(){
  let allImages = document.querySelectorAll('img');
  for (let i =0;i < allImages.length;i++){
    allImages[i].className= 'hide';
  }
  let picId = this.attributes['data-img'].value;
  let photo = document.getElementById(picId);
  if (photo.className === 'hide') {
    photo.className = '';
  } else {
    photo.className = 'hide';
  }
};

const setupMonkeys = function(){
  const monk1 = document.getElementById('monk1');
  const monk2 = document.getElementById('monk2');
  const monk3 = document.getElementById('monk3');
  //add evenetlisteners to 'listen' for event click in photosink function
  monk1.addEventListener('click', photosLink);
  monk2.addEventListener('click', photosLink);
  monk3.addEventListener('click', photosLink);

  //function to loop over all images by selector and display when 'clicked-on'-otherwise 'hide'
}

// //add event listeners. add to document object as in the above
// document.addEventListener('DOMContentLoaded', ()=> {
//   //add const for referencing elementbyTag
//   const monk1 = document.getElementById('monk1');
//   const monk2 = document.getElementById('monk2');
//   const monk3 = document.getElementById('monk3');
//   //add evenetlisteners to 'listen' for event click in photosink function
//   monk1.addEventListener('click', photosLink);
//   monk2.addEventListener('click', photosLink);
//   monk3.addEventListener('click', photosLink);
//
//   //function to loop over all images by selector and display when 'clicked-on'-otherwise 'hide'
//    function photosLink (){
//     let allImages = document.querySelectorAll('img');
//     for (let i =0;i < allImages.length;i++){
//       allImages[i].className= 'hide';
//     }
//     let picId = this.attributes['data-img'].value;
//     let photo = document.getElementById(picId);
//     if (photo.className === 'hide') {
//       photo.className = '';
//     } else {
//       photo.className = 'hide';
//     }
//   }
// });
