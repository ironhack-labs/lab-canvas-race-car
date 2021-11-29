class Game {
    constructor(ctx) {
        this.ctx = ctx

        this.background = new Background(ctx)    
        this.player = new Player(ctx, 225, 550)

        this.intervalId = undefined
    }
  
    start() {
        this.startListeners()
    }

    startListeners() {
        window.addEventListener('keydown', event => {
            console.log(event.which)
            this.player.move(event.which)
        })
    }

    move() {

    }

    clear() {}


  }