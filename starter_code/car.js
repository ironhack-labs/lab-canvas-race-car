var $canvas = document.querySelector('canvas');
var context = $canvas.getContext('2d');

class Car {
  constructor(x) {
    this.x = 210;
    this.y = 490;
    this.width = 80;
    this.height = 100;
    this.setKeyboardEventListeners();
  }

  moveRight(right) {
    this.x += 20;
  }

  moveLeft(left) {
    this.x -= 20;
  }

  drawCar() {
    const imageCar = './images/car.png';
    const image = new Image();
    image.src = imageCar;

    image.addEventListener('load', () => {
      context.drawImage(image, this.x, this.y, this.width, this.height);
    });
    context.drawImage(image, this.x, this.y, this.width, this.height);
  }

  setKeyboardEventListeners() {
    window.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 37:
          console.log('im left');
          if (this.x > 10) {
            this.moveLeft();
          }
          if (this.positionY + this.dimensions < context.canvas.height) {
            this.positionY += this.speed;
          }
          break;
        case 39:
          console.log('im right');
          if (this.x < 400) {
            this.moveRight();
          }
          if (this.positionY > 0) {
            this.positionY -= this.speed;
          }
          break;
      }
    });
  }
}
