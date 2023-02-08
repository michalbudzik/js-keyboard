const containerKeys = document.getElementById('container-keys');
const keys = containerKeys.querySelectorAll('button');
let keyPressed = '';

document.addEventListener('keydown', (e) => {
  // Stop if event is repeating so it triggers piano key press only once
  if (e.repeat) return;
  // Search for button with value same as key pressed
  keys.forEach(button => {
    if (button.value.toLowerCase() === e.key) {
      // Trigger focus on selected button
      button.focus();
      // Update current key pressed
      keyPressed = e.key;
    }
  });
});

// Reset current active DOM element when key is up
document.addEventListener('keyup', (e) => {
  // Check if key being released is last key pressed 
  if (e.key === keyPressed) {
    document.activeElement.blur();
  }
});

