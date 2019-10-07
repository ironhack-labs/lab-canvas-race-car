class Game {
  constructor(ctx) {
    this.ctx = ctx;
    
    this.bg = new Background(ctx)
    this.car = new Car(ctx)
    this.intervalId = null;
    
    this.obstacles = [
      new Obstacle(ctx)
    ]
    
    this.tick = 0
    this.points = 0
    this.score = new Score(ctx, this.points)
  }

  run() {
    this.intervalId = setInterval(() => {
      this._clear()
      this._draw()
      this._move()
      this._clearObstacles()
      this._checkCollisions()
    }, 1000 / 60)
  }

  _clearObstacles() {
    this.obstacles = this.obstacles.filter(o => {
      return o.y < this.ctx.canvas.height
    })
  }

  _clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  _draw() {
    this.bg.draw()
    this.car.draw()
    this.score.draw()
    this.obstacles.forEach(o => o.draw())
    this.tick++

    if (this.tick > Math.random() * 400 + 200) {
      this.tick = 0
      this._addObstacle()
    }

  }

  _checkCollisions() {
    const col = this.obstacles.some(o => {
      return o.collide(this.car)
    })

    if (col) {
      this._gameOver()
    }
  }

  _addObstacle() {
    this.obstacles.push(
      new Obstacle(this.ctx)
    )
  }

  _move() {
    this.bg.move()
    this.car.move()
    this.obstacles.forEach(o => o.move())
  }
  _gameOver() {
    clearInterval(this.intervalId)
    this.ctx.font = "40px Comic Sans MS";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
  }
}