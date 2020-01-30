class Car {
  constructor() {
    this.carX = 250;
    this.carY = 300;
    this.carSpeed = 10;
    this.move();
  }
  move() {
    window.addEventListener('keydown', event => {
      // Stop the default behavior (moving the screen to the left/up/right/down)
      event.preventDefault();

      // React based on the key pressed
      switch (event.keyCode) {
        case 37:
          if (this.carX > 0) {
            this.carX -= this.carSpeed;
            break;
          }
        case 39:
          if (this.carX < 300) {
            this.carX += this.carSpeed;
            break;
          }
      }
    });
  }
}
