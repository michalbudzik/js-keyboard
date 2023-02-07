const containerKeys = document.getElementById('container-keys');
const keys = containerKeys.querySelectorAll('button');

document.addEventListener('keydown', (e) => {
  // Stop if event is repeating so it triggers piano key press only once
  if (e.repeat) return;
  // Search for button with value same as key pressed
  keys.forEach(button => {
    if (button.value.toLowerCase() === e.key) {
      // Trigger focus on selected button
      button.focus();
    }
  });
});

// Reset current active DOM element when key is up
document.addEventListener('keyup', () => {
  document.activeElement.blur();
});

