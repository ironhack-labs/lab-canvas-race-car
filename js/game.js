class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.background = new Background(ctx)
        this.player = new Player(ctx)
        
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
        this.player.draw()
    }

    move() {
        this.background.move()
        this.player.move()
    }

    setListeners() {
    document.onkeydown = (event) => {
      switch(event.keyCode) {
        case RIGHT:
          this.player.vx = 5
          break;
        case LEFT:
          this.player.vx = -5
          break;
      }
    }

    document.onkeyup = (event) => {
        if (event.keyCode) {
            this.player.vx = 0
        }
    }
  }
}