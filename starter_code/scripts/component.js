class MyCar {
  constructor(game) {
    this.game = game;
    this.car = new Image();
    this.x = this.game.canvas.width / 2;
    this.y = this.game.canvas.height - 150;
  }

  carImg() {
    this.car.src = './images/car.png';
    this.game.ctx.drawImage(this.car, this.x, this.y, 100, 150);
  }
  drive() {
    document.addEventListener('keydown', event => {
      const key = event.keyCode;
      if (key === 37) this.x -= 20;
      else if (key === 39) this.x += 20;
    });
  }
}
