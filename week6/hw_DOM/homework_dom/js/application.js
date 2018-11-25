//add event listeners
document.addEventListener('DOMContentLoaded', ()=> {
  const newItem = document.querySelector('#new-item');
  newItem.addEventListener('submit', handleFormSubmitItem);

  const clearAllBtn = document.querySelector('#delete')
  clearAllBtn.addEventListener('click', handleClearAllItems );

  //loop of radio btn options and on click register color change
  let btns = document.querySelectorAll("[name=color]");
  for (let button of Array.from(btns)) {
    button.addEventListener('change', ()=> {
      document.body.style.background=button.value;
    });
  }
})
//submit function for form
const handleFormSubmitItem = function (event){
  event.preventDefault();//prevent page reloading immediately
  const primatesListItem = createPrimateListItem(event.target);
  const primateList = document.querySelector('#list-of-primates');
  primateList.appendChild(primatesListItem);

  event.target.reset();
}
//form functions
const createPrimateListItem = function (form){
  const primatesListItem = document.createElement('li')
  primatesListItem.classList.add('list-of-primates-item');
  const ape = document.createElement('h2');
  ape.textContent = form.ape.value;
  primatesListItem.appendChild(ape);

  const genus = document.createElement('h3');
  genus.textContent =form.genus.value;
  primatesListItem.appendChild(genus);

  const habitat = document.createElement('h4')
  habitat.textContent = form.habitat.value;
  primatesListItem.appendChild(habitat);

  const apetype = document.createElement('p');
  apetype.textContent = form.apetype.value;
  primatesListItem.appendChild(apetype);

  return primatesListItem; //return list items for above elements created
}
//delete function
const handleClearAllItems = function (event){
  const primateList = document.querySelector('#list-of-primates');
  primateList.textContent = ''; //primateList.innerHTML = ''
}
//add event listeners. add to document object as in the above
document.addEventListener('DOMContentLoaded', ()=> {
  //add const for referencing elementbyTag
  const monk1 = document.getElementById('monk1');
  const monk2 = document.getElementById('monk2');
  const monk3 = document.getElementById('monk3');
  //add evenetlisteners to 'listen' for event click in photosink function
  monk1.addEventListener('click', photosLink);
  monk2.addEventListener('click', photosLink);
  monk3.addEventListener('click', photosLink);

  //function to loop over all images by selector and display when 'clicked-on'-otherwise 'hide'
  function photosLink (){
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
  }
});
