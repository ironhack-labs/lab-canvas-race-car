class Game {
  constructor(ctx) {
    this.ctx = ctx
    this.background = new Board(ctx)

    this.img = new Image()
    this.img.src = './images/car.png'

    this.car = new Car(this.ctx, 210, 500, 80, 160, this.img)

    this.interval = undefined
  }

  start() {
    this.setListeners()

    this.inverval = setInterval(() => {
      this.clear()

      this.drawBackground()
      
      this.move()

      this.drawCar()

    }, 1000 / 60)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  drawBackground() {
    this.background.draw()
  }

  drawCar() {
    this.car.draw()
  }

  move() {
    this.background.move()
  }

  setListeners() {
    document.onkeydown = event => {
      switch (event.keyCode) {
        case RIGHT:
          this.car.move(vel)
          break;
        case LEFT:
          this.car.move(-vel)
          break;
      }
    }
  }
}

const RIGHT = 39
const LEFT = 37
const vel = 10