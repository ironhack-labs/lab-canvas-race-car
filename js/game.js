class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.background = new Background(this.ctx);
    this.player = new Player(this.ctx);

  }

  start(){
    this.intervalId = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
    }, 1000 / 60)
  }

  clear() {
    this.ctx.clearRect(
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.heigth
    )
  }

  move() {
    this.background.move()
    this.player.move()
  }

  draw() {
    this.background.draw()
    this.player.draw()
  }

  gameOver() {
    clearInterval(this.intervalId);
    this.intervalId = null
  }

}