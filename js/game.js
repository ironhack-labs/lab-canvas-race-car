
class Game {
    constructor(ctx) {
      this.ctx = ctx
      this.background = new Background(ctx)
  
      this.interval = undefined

      this.car = new Car(ctx)
    }
  
    start() {
      this.inverval = setInterval(() => {
        this.clear()
  
        this.draw()
        
        this.move()
      }, 1000 / 80)
    }
  
    clear() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }
  
    draw() {
      this.background.draw();
      this.car.draw()
    }
  
    move() {
      this.background.move()
      //this.car.move()
    }
  }