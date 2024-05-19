const input = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyBoxes(); // Очищаємо попередні елементи

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    return;
  }

  createBoxes(amount);
  input.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);
