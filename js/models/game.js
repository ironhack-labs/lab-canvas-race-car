class Game {
    constructor(canvasId) { 
        this.intervalId = null 

        const canvas = document.getElementById(canvasId) 

        this.ctx = canvas.getContext("2d")

        this.tick = 0

        this.background = new Background(this.ctx) 
        this.car = new Car(this.ctx)
        this.obstacles = []

    } 

    start() {
        this.intervalId = setInterval(() => {
            this.clear()
            this.move()
            this.draw()
            this.addObstacle()
            if (this.tick++ > 10000) {
                this.tick = 0;
              }
        },1000/60)
    }

    draw() {
        this.background.draw()
        this.car.draw()
        this.obstacles.draw()
    }

    move() {
        this.car.move()
    }

    addObstacle() {
        if (this.tick %100) {
            return
        }
        this.obstacles.push(new Obstacle(this.ctx))
    }

    onKeyEvent() {
        this.car.onKeyEvent(event)
    }

    clear() {
        this.ctx.clearRect(0 , 0 ,this.ctx.canvas.width, this.ctx.canvas.height)
    }
}