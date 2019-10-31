let carro = new Image();
carro.src = 'images/car.png';

class Coche {
  constructor(xIndex) {
    this.xIndex = xIndex;
  }

  drawCar() {
    ctx.drawImage(carro, this.xIndex, 550, 60, 110);
  }

  moveRight() {
    if (this.xIndex !== 440) {
      this.xIndex += 10;
    } else {
      this.xIndex = this.xIndex;
    }
  }

  moveLeft() {
    if (this.xIndex !== 0) {
      this.xIndex -= 10;
    } else {
      this.xIndex = this.xIndex;
    }
  }
}

class Obstacles {
  constructor(x) {
    this.randomX = x;
  }

  spawn() {
    ctx.fillStyle = 'red';
    ctx.fillRect(x, 0, this.randomX, 60);
  }
}
