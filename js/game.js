class Game {
  constructor(ctx) {
    this._ctx = ctx

    this._intervalId = null

    this._bg = new Background(ctx)
    this._obs = [new Obstacles(ctx)]
    this._car = new Car(ctx)

    this.add = 0

    this._imgArr = [
      "./images/giphy-01.gif",
      "./images/giphy-02.gif",
      "./images/giphy-03.gif",
      "./images/giphy-04.gif"
    ]

    this._img = new Image()
    this._img.src = this._imgArr[
      Math.floor(Math.random() * this._imgArr.length)
    ]
  }

  start() {
    this._intervalId = setInterval(() => {
      this._clear()
      this._draw()
      this._move()
      this._collide()
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

  _collide() {
    this._obs.forEach((el) => {
      if (
        el.x < this._car.x + this._car.w &&
        el.x + el.w > this._car.x &&
        el.y < this._car.y + this._car.h &&
        el.y + el.h > this._car.y
      ) {
        this._gameOver()
      }
    })
  }

  _gameOver() {
    clearInterval(this._intervalId)
    this._clear()

    this._ctx.fillText(
      "GAME OVER",
      this._ctx.canvas.width / 2,
      this._ctx.canvas.height / 2
    )
  }
}
