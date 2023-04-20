class Carro {
  constructor() {
    this.x = 230;
    this.y = 600;

    const carro = new Image();
    carro.addEventListener("load", () => {
      this.carro = carro;
    });
    carro.src = "images/car.png";
  }

  moveLeft() {
    this.x -= 10;
  }

  moveRight() {
    this.x += 10;
  }

  draw() {
    ctx.drawImage(this.carro, this.x, this.y, 40, 80);
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.h;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.w;
  }

  moveLimiter() {
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x >= canvas.width - 40) {
      this.x = canvas.width - 40;
    }
  }
}
