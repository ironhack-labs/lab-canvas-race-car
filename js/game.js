const raceCarGame = {
    name: 'Island Racer',
    description: 'Mini game about moving a car around the obstacles',
    version: '1.0.0',
    license: undefined,
    author: 'Jaime Lloreda',
    canvasTag: undefined,
    ctx: undefined,
    frameIndex: 0,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    carInstance: undefined,
    carPosition: {
        x: 0,
        y: 0
    },
    carDimensions: {
        w: 70,
        h: 140
    },
    obstaclesArray: [],
    keyRight: undefined,
    keyLeft: undefined,
    init() {
        this.setContext()
        this.setDimensions()
        this.setEventListeners()
        this.setCarPosition()
        this.createCar()
        this.generateObstacle()
        this.start()
    },
    setContext() {
        this.canvasTag = document.querySelector('canvas')
        this.ctx = this.canvasTag.getContext('2d')

    },
    setDimensions() {
        this.canvasSize = {
            w: 500,
            h: 700
        }
    },
    setCarPosition() {
        this.carPosition.x = (this.canvasSize.w - this.carDimensions.w) / 2
        this.carPosition.y = this.canvasSize.h - this.carDimensions.h - 10
    },
    setEventListeners() {
        document.onkeydown = event => {

            if (event.key === 'ArrowRight') {
                this.keyRight = true
            }

            if (event.key === 'ArrowLeft') {
                this.keyLeft = true
            }
        }
        document.onkeyup = event => {
            if (event.key === 'ArrowRight') {
                this.keyRight = false
            }

            if (event.key === 'ArrowLeft') {
                this.keyLeft = false
            }
        }
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()

            this.frameIndex++
            if (this.frameIndex % 250 === 0) {
                this.generateObstacle()

                if (this.obstaclesArray.length > 4) {
                    this.obstaclesArray.shift()
                }
            }


            if (this.keyLeft) {
                if (this.carPosition.x > 0) {
                    this.carPosition.x -= 5
                }
            }
            if (this.keyRight) {
                if (this.carPosition.x < this.canvasSize.w - this.carDimensions.w) {
                    this.carPosition.x += 5
                }
            }
        }, 10)
    },
    drawAll() {
        this.drawBoard()
        this.drawLine()
        this.drawCar()
        this.drawObstacle()
    },
    drawBoard() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(60, 0, this.canvasSize.w - 120, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(80, 0, this.canvasSize.w - 160, this.canvasSize.h)
    },
    drawLine() {
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5
        this.ctx.setLineDash([20, 20])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    createCar() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
    },
    drawCar() {
        this.ctx.drawImage(this.carInstance, this.carPosition.x, this.carPosition.y, this.carDimensions.w, this.carDimensions.h)
    },
    generateObstacle() {
        let obstaclePosition = Math.floor(Math.random() * (this.canvasSize.w - 200))
        this.obstaclesArray.push(
            new Obstacle(this.ctx, this.canvasSize, obstaclePosition)
        )
    },
    drawObstacle() {
        this.obstaclesArray.forEach(elm => elm.draw())
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
}