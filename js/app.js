const controlledApp = {
    name: 'Canvas Race Car',
    description: 'Basic Canvas app for element controlling',
    version: '1.0.0',
    license: undefined,
    author: 'Álvaro',
    canvasTag: undefined,
    ctx: undefined,
    carInstance: undefined,
    canvasSize: { w: 500, h: 700 },
    carPosition: { x: 210, y: 500 },
    carSize: { w: 80, h: 140 },
    framesIndex: 0,
    obstaclesSpeed: undefined,
    init() {
        this.setContext()
        this.createCar()
        this.star()
        this.setEventListeners()

    },
    setContext() {
        this.canvasTag = document.querySelector('canvas')
        this.ctx = this.canvasTag.getContext('2d')
    },

    drawSquare() {
        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(40, 0, 420, 700)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(50, 0, 10, 700)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(this.canvasSize.w - 60, 0, 10, 700)
    },
    drawDashedLines() {
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 8
        this.ctx.setLineDash([30, 15])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    createCar() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
    },
    drawAll() {
        this.drawSquare()
        this.drawDashedLines()
        this.drawCar()
        this.createObstacles()
    },
    drawCar() {
        this.ctx.drawImage(this.carInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    star() {
        setInterval(() => {
            this.drawAll()
            this.framesIndex++

            if (this.framesIndex % 100 === 0) this.createObstacles()
        }, 10)
    },
    setEventListeners() {
        document.onkeydown = e => {
            if (e.key === 'ArrowLeft') this.carPosition.x -= 10
            if (e.key === 'ArrowRight') this.carPosition.x += 10
            if (e.key === 'ArrowUp') this.carPosition.y -= 10
            if (e.key === 'ArrowDown') this.carPosition.y += 10
        }
    },


}