class Game {
  constructor(ctx) {
    this.ctx = ctx

    this.bg = new Street(ctx)
    this.newCar = new Car(ctx)
    this.obstacles = [
      new Obstacle(ctx)
    ]

    this.intervalId = null

    this.tick = 1

    this.score = 0

  }

  run() {
    this.intervalId = setInterval(() => {
      this._clear()
      this._draw()
      this._move()
      this._addObstacle()
      this._clearObstacles()
      this._checkCollisions()
      this._AddScore()
      if (this.tick++ > 100) {
        this.tick = 0
      }
    }, 1000 / 60)
  }

  _clearObstacles() {
    this.obstacles = this.obstacles.filter(o => {
      return o.y + o.h >= 0
    })
  }

  _clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  _draw() {
    this.bg.draw()
    this.newCar.draw()
    this.obstacles.forEach(o => o.draw())    
  }

  _move() {
    this.bg.move()
    this.newCar.move()  
    this.obstacles.forEach(o=> o.move())
  }

  _addObstacle() {
    if (this.tick % Math.floor(Math.random() * 100 + 200) === 0) {
      this.obstacles.push(new Obstacle(this.ctx))
    }  
  }

  _checkCollisions() {
    const col = this.obstacles.some(o => {
      return o.collide(this.newCar)
    })

    if (col) {
      this._gameOver()
    }
  }

  _AddScore(){
    this.obstacles.forEach(o => {
      if (o.obstaclePassed(this.newCar)) {
        this.score ++
      }
    })
  }

  _gameOver() {
    clearInterval(this.intervalId)

    this.ctx.font = "40px Comic Sans MS";
    this.ctx.fillStyle = "red"
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      `GAME OVER!`,
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    )
    this.ctx.fillStyle = "black"
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      `Your final score: ${this.score}`,
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 1.5
    )
  }
}