class MyCar {
  constructor(game) {
    this.game = game;
    this.car = new Image();
  }

  carImg() {
    this.car.src = './images/car.png';
    this.game.ctx.drawImage(
      this.car,
      this.game.canvas.width / 2,
      this.game.canvas.height - 150,
      100,
      150
    );
  }
}
