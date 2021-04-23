class Game {
    constructor(canvasId) { //canvasId es el Id del canavs que estoy llamando en el index en cuanto se cargue el DOM
        this.intervalId = null // pongo el interval en null para poderlo reutilizar
        this.intervalId2 = null

        const canvas = document.getElementById(canvasId) //encuentro el canvas

        this.ctx = canvas.getContext("2d") // creo el contexto

        this.background = new Background(this.ctx) // creo un nuevo background

        this.car = new Car(this.ctx)

        this.obstacle = new Obstacle(this.ctx)
    }

    startGame() {
        this.intervalId = setInterval(() => {
            this.clear()
            this.move()
            this.draw()
        }, 1000 / 60)

        
    }

    draw() {
        this.background.draw() //llamo la funcion draw de this.background
        this.car.draw()
        this.obstacle.draw()
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    move() {
        this.car.move()
        this.obstacle.move()
    }

    onKeyEvent(event) {
        this.car.onKeyEvent(event)
    }
}