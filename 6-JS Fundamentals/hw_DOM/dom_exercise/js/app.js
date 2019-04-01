document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', formSubmitHandler);

  seedData.forEach((animal) => {
    const li = createListItem(animal);
    addListItem(li);
  });
});
