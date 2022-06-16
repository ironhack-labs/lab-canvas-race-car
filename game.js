class Game {
  constructor(ctx) {
    this.ctx = ctx;

  }

  start(){
    this.intervalId = setInterval(() => {
      this.clear();
      this.draw();
      this.checkCollisions()
      this.move();
      this.tickObstacle++;

      if (this.tickObstacle % 100 === 0) {
        this.addObstacle()
      }
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
    this.obstacle.forEach(obs => obs.move())
  }

  draw() {
    this.background.draw()
    this.player.draw()
    this.obstacles.forEach(obs => obs.draw())
  }

  gameOver() {
    clearInterval(this.intervalId);
    this.intervalId = null
  }

}