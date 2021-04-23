



class Game {
    
    constructor(canvasId) {
        this.intervalId = null

        const canvas = document.getElementById(canvasId)
        const ctx = canvas.getContext('2d')
    
        canvas.width = 500
        canvas.height = 700

        this.background = new Background(this.ctx)
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
    }

    /* move() {} */


}