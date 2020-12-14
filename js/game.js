class Game {
    constructor(ctx) {
      this.ctx = ctx
      this.road = new Road(ctx)
      this.car = new Car(ctx)
  
      this.interval = null
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
      this.road.draw()
      this.car.draw(ctx, 100, 50)
    }
  
    move() {
      this.road.move()
      this.car.move()
    }

    setListeners() {
      document.onkeydown = event => {
        if (event.keyCode === RIGHT) { this.car.vx = 10 }
        if (event.keyCode === LEFT) { this.car.vx = -10 }
      }
  
      document.onkeyup = event => {
        if (event.keyCode === RIGHT || LEFT) { this.car.vx = 0 }
      }
    }
  }

const RIGHT = 39
const LEFT = 37