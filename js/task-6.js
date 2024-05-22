const input = document.querySelector('#controls input');
const createButton = document.querySelector('#controls [data-create]');
const destroyButton = document.querySelector('#controls [data-destroy]');
const boxesContainer = document.getElementById('boxes');

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const createBoxes = (amount) => {
  // Create a DocumentFragment to hold the elements
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  // Append the entire fragment to the boxesContainer in one operation
  boxesContainer.appendChild(fragment);
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
};

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value, 10);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    return; // Invalid input value
  }

  createBoxes(amount);
  input.value = ''; // Clear input
});

destroyButton.addEventListener('click', destroyBoxes);
