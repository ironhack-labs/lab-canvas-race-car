class obstacles {

    constructor(ctx, obstaclesPosX, obstaclesPosY, obstaclesWidth, obstaclesHeight, obstaclesSpeed, canvasSize) {
        this.ctx = ctx
        this.obstaclesSize = {
            w: obstaclesWidth,
            h: obstaclesHeight
        }
        this.obstaclesPos = {
            x: obstaclesPosX,
            y: obstaclesPosY
        }
        this.obstaclesSpeed = obstaclesSpeed
        this.canvasSize = canvasSize

        this.init()
    }

    init() {
        this.drawSquares()
    }

    drawSquares() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(0, 100, this.canvasSize.w, 3)
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(10, 10, 10, 10)
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(100, 100, 100, 100)

    }
    drawAll() {
        this.drawSquares()
    }

    move() {


    }

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 30)
    }
}
