class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.background = new Background(this.ctx);
    this.player = new Player(this.ctx);
    this.obstacles = [];
    this.tickObstacle = 1
  }

  start(){
    this.intervalId = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
      this.move();
      this.tickObstacle++;

      if (this.tickObstacle % 60 === 0) {
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
    this.obstacles.forEach(obs => obs.move())
  }

  draw() {
    this.background.draw()
    this.player.draw()
    this.obstacles.forEach(obs => obs.draw())
  }

  addObstacle() {
    this.obstacles.push(new Obstacle(this.ctx))
  }

  /* gameOver() {
    clearInterval(this.intervalId);
    this.intervalId = null
  } */

}