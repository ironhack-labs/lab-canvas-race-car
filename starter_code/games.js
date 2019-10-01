class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.intervalId = null;
    this.tick = 0;
    this.score = 0;

    this.bg = new Background(ctx)
    this.car = new Car(ctx)
    this.obstacles = []
  }

  run(){
    this.intervalId = setInterval(() => {
      this.clear()
      this.draw()
      this.move()
      this.addObstacle()
      this.checkCollisions()
      this.sumScore()
      this.clearObstacles()

      if (this.tick++ > 10000) {
        this.tick = 0
      }

    }, 1000 / 60)
  }

  clearObstacles(){
    this.obstacles = this.obstacles.filter(o => {
      return o.y + o.h >= 0
    })
  }

  addObstacle(){
    if (this.tick % 100) return 

    this.obstacles.push(
      new Obstacle(this.ctx)
    )
  }

  clear(){
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  draw(){
    this.bg.draw(); 
    this.car.draw();
    this.obstacles.forEach(o => o.draw()); 
  }

  move(){
    this.bg.move();
    this.car.move();
    this.obstacles.forEach(o => o.move());
  }

  //checkBoundaries
  checkCollisions(){
    const col = (
      this.obstacles.some(o => o.collide(this.car)) || this.car.checkBoundaries()
    )

    if (col) {
      this.gameOver()
    }
  }

  sumScore(){
    this.obstacles.forEach(o => {
      this.score ++
    })
  }

  gameOver() {
    clearInterval(this.intervalId)

    this.ctx.font = "40px Arial";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    )

    this.ctx.font = "40px Arial";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      `SCORE ${this.score}`,
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 3
    )
  }
  
}