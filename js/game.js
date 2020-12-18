
class Game {
    constructor(ctx) {
      this.ctx = ctx
      this.background = new Background(ctx)
  
      this.drawInterval = undefined
      this.fps = 1000/60

      this.car = new Car(ctx)
    }
  
    start() {
      if (!this.drawInterval){
        this.drawInterval = setInterval(() => {
          this.clear()
          
          this.move()
          
          this.draw()
        }, this.fps)
      }
    }
  
    clear() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }
  
    draw() {
      this.background.draw();
      this.car.draw()
    }
  
    move() {
      this.car.move()
      this.background.move()
    }

    onKeyEvent(event){
      this.car.onKeyEvent(event)
    }
  }