
class Game {
    
    constructor(canvasId) {
        this.intervalId = null

        const canvas = document.getElementById(canvasId)
         this.ctx = canvas.getContext('2d')
    
        canvas.width = 500
        canvas.height = 700

        this.background = new Background(this.ctx)
        this.car = new Car(this.ctx)
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear()
            this.move()
            this.draw()
        } , 1000 / 60)
    }
    stop() {
        clearInterval(this.intervalId)
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
        this.car.move()
    } 
    onKeyEvent(event) {
        this.car.onKeyEvent(event)
    }

}