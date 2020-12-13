class Game{
    constructor(ctx){
        this.ctx =ctx

        this.board= new Board(ctx)
        this.car= new Car(ctx,this.ctx.canvas.width/2,this.ctx.canvas.height/2)
        this.interval = undefined
    }

    start() {
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
        this.board.draw();
        this.car.draw()
      }
    
      move() {
        this.board.move()
        this.car.move()
      }

      onKeyEvent(event){
        this.car.onKeyEvent(event)
        console.log()
      }
}

