class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.interval = null;

    this.background = new Background(ctx);

    this.car = new Car(ctx);
  }

  start() {
    this.interval = setInterval(() => {
      this.clear();

      this.move();

      this.draw();
    }, 1000 / 60);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    this.background.draw();
    this.car.draw();
  }

  move() {
    this.background.move();
  }
}
