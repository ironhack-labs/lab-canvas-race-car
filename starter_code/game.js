class Game {
  constructor(ctx) {
    this.ctx = ctx

    this.bg = new Background(ctx)
    this.car = new Car(ctx)
    this.obstacles = []
    this.tick = 0
    this.points = 0
  }

  reset() {
    this.car.reset()
    this.obstacles = []
    this.points = 0
    clearInterval(this.intervalId)
  }

  run() {
    this.intervalId = setInterval(() => {
      this._clear()
      this._draw()
      this._move()
      this._checkCollisions()
      this._score()
      this._checkPoint()
    }, 1000 / 60)
  }

  _clearObstacles() {
    this.obstacles = this.obstacles.filter(o => {
      return o.y + o.h <= this.ctx.canvas.height
    })
  }

  _clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    this.bg.clearRoadLine()
    this._clearObstacles()
  }

  _addObstacle() {
    this.c = this._randomRgb()
    this.obstacles.push(new Obstacle(this.ctx, this.c))
  }

  _draw() {
    this.bg.draw()
    this.car.draw()
    this.obstacles.forEach(o => o.draw())

    this.tick++

    if (this.tick > Math.random() * 300 + 200) {
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

  _checkPoint() {
    const point = this.obstacles.some(o => {
      return o.win(this.car)
    })

    if (point) ++this.points
  }

  _score() {
    this.ctx.font = "30px Comic Sans MS"
    this.ctx.textAlign = "left"
    this.ctx.fillStyle = "black"
    this.ctx.fillText(`Score: ${this.points}`, 20, this.ctx.canvas.height * 0.1)
  }

  _gameOver() {
    clearInterval(this.intervalId)
    this.ctx.font = "40px Comic Sans MS"
    this.ctx.textAlign = "center"
    new Rectangle(
      this.ctx,
      this.ctx.canvas.width / 2 - 200,
      this.ctx.canvas.height / 2 - 200,
      400,
      400,
      "white"
    ).draw()
    this.ctx.fillStyle = "red"
    this.ctx.fillText(
      "GAME OVER!",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    )
    this.ctx.font = "20px Comic Sans MS"
    this.ctx.fillStyle = "black"
    this.ctx.fillText(
      `YOUR FINAL SCORE: ${this.points} POINTS`,
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 1.8
    )
  }

  _move() {
    this.bg.move()
    this.car.move()
    this.obstacles.forEach(o => o.move())
  }

  _randomColor() {
    return Math.random() * 255
  }

  _randomRgb() {
    const r = this._randomColor()
    const g = this._randomColor()
    const b = this._randomColor()

    return `rgb(${r}, ${g}, ${b})`
  }
}
