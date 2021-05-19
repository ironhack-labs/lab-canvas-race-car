class Game {
    constructor(canvasId) {
        //Accedemos a nuestro Canvas a traves del DOM
        this.canvas = document.getElementById(canvasId)
        //Declaramos nuestro contexto Canvas en 2D
        this.ctx = this.canvas.getContext('2d')

        this.background = new Background(this.ctx)
        //Establecemos medidas Canvas
        this.canvas.width = 600
        this.canvas.height = 500
        //La y la fijamos en 300, ya que el coche esquiva desplazandose izda-dcha 
        //y el fondo es el que se mueve dando efectua visual de que es el coche desplazandose por y
       this.car = new Car(this.ctx, this.x,this.y )
       // console.log("background")
       
        //Intervalo de pintado en la renderizacion
        this.interval = undefined
        //Renderización
        this.fps = 1000 / 60
    }
    start() {
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
     this.car.draw()
    }

    move() {
        this.background.move()
     //this.car.move()
    }
}