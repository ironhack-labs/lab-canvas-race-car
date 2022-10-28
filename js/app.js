const App = {
    appName: "Mi primer canvas",
    version: "1.0.0",
    license: undefined,
    author: 'Christian Briones López',
    description: 'Canvas where a car gets hit by random obstacles',
    ctx: undefined,
    obstacles: [],
    imageInstance: undefined,
    canvasSize: { w: 500, h: 700 },
    carData: { pos: { x: 200, y: 500 }, image: "./images/car.png", size: { w: 100, h: 150 } },
    intervalId: undefined,
    gameScore: 0,
    framesCounter: 0,
    init() {
        this.setContext()
        this.drawCar()
        this.setEventHandlers()
        this.createObstacles()
        this.startGame()
    },
    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
    },
    startGame() {
        this.intervalId = setInterval(() => {
            this.framesCounter++
            if (this.framesCounter % 300 == 0) this.createObstacles()
            this.clearAll()
            this.drawAll()
            this.obstacles.forEach((elm) => {
                elm.moveObstacle()
                if (this.checkCollision(elm)) this.finishGame()
                this.setScore(elm)
            })

        }, 30)

    },
    finishGame() {
        this.gameActive = false
        this.drawFinishSreen()
        this.obstacles = []
        this.gameScore = 0
        clearInterval(this.intervalId)
    },
    setEventHandlers() {
        document.onkeydown = event => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.moveLeft()
                    break;
                case 'ArrowRight':
                    this.moveRight()
                    break;
                case 'ArrowUp':
                    this.carData.pos.y -= 10
                    break;
                case 'ArrowDown':
                    this.moveDown()
                    break;
            }
        }
    },
    drawRoad() {
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

        this.ctx.fillStyle = "gray"
        this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h)

        this.ctx.fillStyle = "white"
        this.ctx.fillRect(50, 0, 20, this.canvasSize.h)
        this.ctx.fillStyle = "white"
        this.ctx.fillRect((this.canvasSize.w - 70), 0, 20, this.canvasSize.h)

        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.lineWidth = 15
        this.ctx.strokeStyle = "white"
        this.ctx.setLineDash([30, 25])
        this.ctx.stroke()

    },
    drawCar() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.carData.image
    },
    moveLeft() {
        if (this.carData.pos.x == 0) return
        this.carData.pos.x -= 10
    },
    moveRight() {
        if (this.carData.pos.x >= (this.canvasSize.w - this.carData.size.w)) return
        this.carData.pos.x += 10
    },
    moveDown() {
        if (this.carData.pos.y >= this.canvasSize.h - this.carData.size.h) return
        this.carData.pos.y += 10
    },
    moveUp() {
        if (this.carData.pos.y == 0) return
        this.carData.pos.y -= 10
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll() {
        this.drawRoad()
        this.ctx.drawImage(this.imageInstance, this.carData.pos.x, this.carData.pos.y, this.carData.size.w, this.carData.size.h)
        this.obstacles.forEach((elm) => elm.drawObstacle())
        this.drawScore(`Score : ${this.gameScore}`)
    },
    createObstacles() {
        this.obstacles.push(new Obstacle(this.ctx, this.canvasSize))
    },
    moveObstacles() {
        this.obstacles.forEach((elm) => elm.obstaclePos.y += 5)
    },
    checkCollision(obstacle) {
        if (this.carData.pos.x < obstacle.obstaclePos.x + obstacle.obstacleSize.w &&
            this.carData.pos.x + this.carData.size.w > obstacle.obstaclePos.x &&
            this.carData.pos.y < obstacle.obstaclePos.y + obstacle.obstacleSize.h &&
            this.carData.size.h + this.carData.pos.y > obstacle.obstaclePos.y)

            return true
    },
    setScore(obstacle) {
        if (obstacle.obstaclePos.y === this.canvasSize.h) this.gameScore++

        return this.gameScore
    },
    drawScore(text) {
        this.ctx.fillStyle = "white";
        this.ctx.font = "16px sans-serif";
        this.ctx.fillText(text, 100, 50);
    },
    drawFinishSreen() {
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = "red"
        this.ctx.font = "64px sans-serif"
        this.ctx.textAlign = "center"
        this.ctx.fillText("You lost", this.canvasSize.w / 2, this.canvasSize.h / 2)
        this.ctx.fillStyle = "white"
        this.ctx.font = "32px sans-serif"
        this.ctx.fillText("Your final score is: " + this.gameScore, this.canvasSize.w / 2, (this.canvasSize.h / 2) + 100)
    }

}