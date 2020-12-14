class Game {
  constructor(ctx) {
    this.ctx = ctx

    this.background = new Background(ctx)
    this.car = new Car(ctx)

    this.interval = undefined
  }

  start() {

    this.setListeners()

    this.inverval = setInterval(() => {
      this.clear()
      this.draw()
      this.move()
    }, 1000 / 60)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  draw() {
    this.background.draw()
    this.car.draw()
  }

  move() {
    this.background.move()
    this.car.move()
  }


  setListeners() {
    document.onkeydown = event => {
      switch (event.keyCode) {
        case TOP:
          this.car.vy = -10
          break;
        case RIGHT:
          this.car.vx = 10
          break;
        case LEFT:
          this.car.vx = -10
          break;
        case BOTTOM:
          this.car.vy = 10
          break;
      }
    }

    document.onkeyup = event => {
      switch (event.keyCode) {
        case RIGHT:
        case LEFT:
          this.car.vx = 0
          break;
        case BOTTOM:
        case TOP:
          this.car.vy = 0
          break;
      }
    }
  }
}


const TOP = 38
const RIGHT = 39
const BOTTOM = 40
const LEFT = 37