const Game = {
    width: 500,
    height: 700,
    FPS: 60,
    canvas: undefined,
    ctx: undefined,
    intervalId: undefined,
    framesCounter: 0,
    road: undefined,
    car: undefined,
    secs: 0,


    init() {
        this.canvas = document.querySelector("#canvas")
        this.ctx = this.canvas.getContext("2d")

        this.start()

    },
    start() {
        this.generateAll()
        this.intervalId = setInterval(() => {
            this.clearAll()
            this.drawAll()

            this.framesCounter++
            if (this.framesCounter % 60 === 0) {
                this.secs++
            }
            this.checkCollision()
        }, 1000 / this.FPS)

    },
    drawAll() {
        this.road.draw(this.framesCounter, this.secs)
        this.car.draw()
        this.drawObstacles()
    },
    generateAll() {
        this.road = new Road(this.ctx, this.width, this.height)
        this.car = new Car(this.ctx, this.width, this.height)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },
    drawObstacles() {
        this.road.obstacles.forEach(obstacle => obstacle.draw())
    },
    checkCollision() {
        this.road.obstacles.forEach(obstacle => {
            if (obstacle.posX < this.car.posX + this.car.width &&
                obstacle.posX + obstacle.width > this.car.posX &&
                obstacle.posY < this.car.posY + this.car.height &&
                obstacle.height + obstacle.posY > this.car.posY) this.gameOver()
        })

    },
    gameOver() {
        clearInterval(this.intervalId)
        this.clearAll()
        this.ctx.font = "40px arial";
        this.ctx.fillText("Game Over", this.width / 2 - 100, this.height / 2);
        this.ctx.fillText("Score: " + this.secs, this.width / 2 - 70, this.height / 2 + 50);
        setTimeout(() => {
            location.reload()
        }, 2000)
    }
}