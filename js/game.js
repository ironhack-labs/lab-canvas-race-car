class Game {
    constructor(canvasId) {
        //Accedemos a nuestro Canvas a traves del DOM
        this.canvas = document.getElementById(canvasId)
        //Declaramos nuestro contexto Canvas en 2D
        this.ctx = this.canvas.getContext('2d')

        this.background = new Background(ctx)
        //Establecemos medidas Canvas
        this.canvas.width = 800
        this.canvas.height = 400
        //Intervalo de pintado en la renderizacion
        this.interval = undefined
        //Renderización
        this.fps = 1000 / 60
    }
    start(){
      this.interval = setInterval(() => {
          this.clear()
          this.draw()
          this.move()
      }, this.fps)
    }
    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }
    draw() {
        this.background.draw()
    }

    move() {
        this.background.move()
    }
}