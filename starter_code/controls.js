window.addEventListener('keydown', (event) => {
    // Stop the default behavior (moving the screen to the left/up/right/down)
    event.preventDefault();
    // React based on the key pressed
    switch (event.keyCode) {
      case 37:
        car.moveLeft();
        drawEverything()
        break;
      case 39:
        car.moveRight();
        drawEverything()
        break;
    }
  });