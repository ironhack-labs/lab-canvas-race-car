class Game {
  constructor(ctx) {
    this._ctx = ctx

    this._intervalId = null

    this._bg = new Background(ctx)
    this._obs = [new Obstacles(ctx)]
    this._car = new Car(ctx)

    this.add = 0
  }

  start() {
    this._intervalId = setInterval(() => {
      this._clear()
      this._draw()
      this._move()
    }, 1000 / 60)
  }

  _clear() {
    this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height)
  }

  _draw() {
    this._bg.draw()
    this._car.draw()
    this._obs.forEach((el) => el.draw())

    this.add++

    if (this.add > 100) {
      this.add = 0
      this._obs.push(new Obstacles(this._ctx))
    }
  }

  _move() {
    this._bg.move()
    this._car.move()
    this._obs.forEach((el) => el.move())
  }
}
