class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId)
        this.ctx = this.canvas.getContext("2d")
        this.road = new Road(this.ctx)
        this.car = new Car(this.ctx)
        this.obstacles = []
        this.intervalId = null
        this.score = 0
    }
    
    draw() {
        let count = 0
        this.intervalId = setInterval(() => {
            this.clear()
            this.road.draw()
            this.car.draw()
            if (count % 100 === 0) {
                this.addObstacles()
            }
            this.moveObstacles()
            this.drawObstacles()
            this.drawScore(this.score)
            this.checkCollisions()
            if(count % 25 === 0) {
                this.score++
            }
            count++
        }, 25)
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    callEventListeners() {
        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowRight") {
                this.car.moveRight()
            } else if (event.key === "ArrowLeft"){
                this.car.moveLeft()
            }
        })
    }

    addObstacles() {
        const obstacle = new Obstacle(this.ctx)
        this.obstacles.push(obstacle)
    }

    drawObstacles() {
        this.obstacles.forEach((obstacle) => {
            obstacle.draw()
        })
    }

    moveObstacles() {
        this.obstacles = this.obstacles.filter(obstacle => obstacle.y < this.road.height - 20)
        this.obstacles.forEach((obstacle) => obstacle.move())
    }

    checkCollisions() {
        this.obstacles.forEach(obstacle => {
            if (obstacle.isColliding(this.car)) {
                this.gameOver()
            }
        })
    }

    drawScore(score) {
        this.ctx.fillStyle = "white"
        this.ctx.font = "24px Arial"
        this.ctx.fillText(`score: ${score}`, 80, 30)
    }

    gameOver() {
        clearInterval(this.intervalId)
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(52, 200, 400, 200)
        this.ctx.fillStyle = "red"
        this.ctx.fillText("GAME OVER",  175, 260)
        this.ctx.fillStyle = "white"
        this.ctx.fillText("your final score",  168, 300)
        this.ctx.fillText(this.score, 240, 340)
    }
}