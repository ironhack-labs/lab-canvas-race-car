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

  }

  run() {
    this.intervalId = setInterval(() => {
      this._clear()
      this._draw()
      this._move()
      this._clearObstacles()
    }, 1000 / 60)
  }

   _clearObstacles() {
    this.obstacles = this.obstacles.filter(o => {
      return o.x + o.w >= 0
    })
  }

  _clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
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
}