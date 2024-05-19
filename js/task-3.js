const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  const name = nameInput.value.trim(); // Очищаємо значення від пробілів

  if (name) {
    nameOutput.textContent = name;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});