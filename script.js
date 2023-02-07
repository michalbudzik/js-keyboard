const containerKeys = document.getElementById('container-keys');
const keys = containerKeys.querySelectorAll('button');

document.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  keys.forEach(button => {
    if (button.value.toLowerCase() === e.key) {
      button.focus();
    }
  });
});

document.addEventListener('keyup', () => {
  document.activeElement.blur();
});

