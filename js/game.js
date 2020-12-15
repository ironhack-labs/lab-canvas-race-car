class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId)
        this.ctx = this.canvas.getContext('2d')

        this.canvas.width = 500
        this.canvas.height = 700

        this.drawInterval = undefined
        this.fps = 1000/60

        this.background = new Background(this.ctx)

        this.car = new Car(this.ctx, (this.canvas.width/2) - 25, this.canvas.height - 150)
    }

    start() {
        if (!this.drawInterval) { //  para que no haya bucles raros. Si el juego no esta arrancado. Compruebo que no hay draw interval
            this.drawInterval = setInterval(() => {
                this.clear()
                this.move()
                this.draw()
            }, this.fps)
        }
        /*
        limpio 
        muevo
        pinto 
        animo
        chequeo colisiones
        */
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    draw() {
        this.background.draw()
        this.car.draw()
    }

    move() {
        this.background.move()
        this.car.move()
    }

    onKeyEvent(event) {
        this.car.onKeyEvent(event)
    }

}