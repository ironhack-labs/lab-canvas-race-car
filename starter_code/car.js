let carro = new Image();
carro.src = 'images/car.png';

class Carobject {
  constructor(game) {
    this.x = 240;
  }

  drawCar() {
    ctx.drawImage(carro, this.x, 550, 60, 110);
  }

  moveRight() {
    if (this.x < 440) {
      this.x += 15;
    } else {
      this.x = this.x;
    }
  }

  moveLeft() {
    if (this.x > 0) {
      this.x -= 15;
    } else {
      this.x = this.x;
    }
  }
}
