document.addEventListener('DOMContentLoaded'), ()=> {
  const newItem = document.querySelector('#new-item');
  newItem.addEventListener('submit', handleFormSubmitItem);

  const clearAllBtn = document.querySelector('#delete')
  clearAllBtn.addEventListener('click',handleClearAllItems );
})

const handleFormSubmitItem = function(event){
  event.preventDefault();

  const primatesListItem = createPrimateListItem(event.target);
  const primateList = document.querySelector('#list-of-primates');
  primateList.appendChild(primatesListItem);

  event.target.reset();
}
const createPrimateListItem = function(form){
  const primatesListItem = document.createElement('li')
  primatesListItem.classList.add('list-of-primates');

  const ape = document.createElement('h2');
  ape.textContent = form.ape.value;
  primatesListItem.appendChild(ape);

  const genus = document.createElement('h3');
  genus.textContent=form.genus.value;
  primatesListItem.appendChild(genus);








}
