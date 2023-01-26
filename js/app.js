const app = {
    name: 'Race car app',
    author: 'Gonzalo',
    canvasTag: undefined,
    ctx: undefined,
    canvasSize: {
        width: 500,
        heigth: 700
    },
    carInstance: undefined,
    carPos: {
        x: 210,
        y: 500
    },
    carSize: {
        width: 80,
        heigth: 160
    },
    frameIndex: 0,
    canMoveLeft: false,
    canMoveRight: false,
    obstacle: [],


    init() {
        this.setContext()
        this.setDimensions()
        this.setEventListeners()
        this.createCar()
        this.start()
    },
    setContext() {
        this.canvasTag = document.querySelector('canvas')
        this.ctx = this.canvasTag.getContext('2d')
    },
    setDimensions() {
        this.canvasSize
    },
    start() {
        setInterval(() => {
            if (!this.crash()) {
                this.clearAll()
                this.drawAll()
                if (this.canMoveLeft) {
                    this.carPos.x -= 10
                }
                if (this.canMoveRight) {
                    this.carPos.x += 10
                }
                this.frameIndex++
                if (this.frameIndex % 60 === 0) this.createObstacle()
                this.obstacle.forEach(elm => elm.move())
            }





        }, 17)
    },
    drawAll() {
        this.drawRoad()
        this.drawCar()
        this.obstacle.forEach(elm => elm.generateObstacle())
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.heigth)
    },
    createCar() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
    },
    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.width, this.canvasSize.heigth)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(30, 0, this.canvasSize.width - 60, this.canvasSize.heigth)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(45, 0, this.canvasSize.width - 90, this.canvasSize.heigth)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(60, 0, this.canvasSize.width - 120, this.canvasSize.heigth)
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([50, 30])
        this.ctx.moveTo(this.canvasSize.width / 2, 10)
        this.ctx.lineTo(this.canvasSize.width / 2, this.canvasSize.heigth - 10)
        this.ctx.stroke()
    },
    drawCar() {
        this.ctx.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.width, this.carSize.heigth)
    },

    setEventListeners() {
        document.onkeydown = (event) => {
            switch (event.key) {
                case 'ArrowRight':
                    this.canMoveRight = true
                    break;
                case 'ArrowLeft':
                    this.canMoveLeft = true
                    break;
            }
        }
        document.onkeyup = (event) => {
            switch (event.key) {
                case 'ArrowRight':
                    console.log("ME PARO DCHA")
                    this.canMoveRight = false
                    break;
                case 'ArrowLeft':
                    console.log("ME PARO IZQ")
                    this.canMoveLeft = false
                    break;
            }
        }
    },
    createObstacle() {
        this.obstacle.push(new Obstacle(this.ctx, this.canvasSize))
    },
    crash() {
        this.obstacle.forEach(obs => {
            if (this.carPos.x < obs.obstaclePos.x + obs.obstacleSize.x &&
                this.carPos.x + this.carSize.width > obs.obstaclePos.x &&
                this.carPos.y < obs.obstaclePos.y + obs.obstacleSize.y &&
                this.carPos.y + this.carSize.heigth > obs.obstaclePos.y) {
                this.stopInterval()
                alert('Game Over')
                location.reload()
            }
        })
    },
    stopInterval() {
        clearInterval(1)
    },
    drawText(text) {
        this.ctx.font = '50px arial'
        this.ctx.fillText(text, 100, 100)
    }

}