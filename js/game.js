class Game{
    constructor(ctx){
        this.ctx =ctx
        this.board= new Board(ctx)
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
        this.board.draw()
      }
    
      move() {
        this.board.move()
      }
}

