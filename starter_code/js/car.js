/* eslint-disable no-undef */

class Car {
  constructor(game) {
    this.game = game;
    this.x = 205;
    this.y = 420;
    this.image = new Image();
    this.image.src = './images/car.png';
    this.controls = new Controls(this);
    this.controls.setKeyBindings(); 
  }
  drawCar() {
    this.game.context.drawImage(this.image, this.x, this.y, 50, 75);
  }
  }

  