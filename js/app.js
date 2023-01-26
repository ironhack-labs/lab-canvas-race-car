const raceCarApp = {
    name: 'Race Car',
    description: 'Basic race car',
    version: '1.0.0',
    license: undefined,
    author: 'Daniel de Miguel',
    canvasTag: undefined,
    ctx: undefined,
    framesIndex: 0,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    carInstance: undefined,
    carPosition: { x: 215, y: 570 },
    carSize: { w: 70, h: 120 },

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
        this.canvasSize = {
            w: 500,
            h: 700
        }
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++

            if (this.framesIndex % 100 === 0) this.generateObstacle()
        }, 10)
    },



    drawAll() {
        this.drawRoad()
        this.drawDashLine()
        this.drawCar()
        this.generateObstacle()

    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawRoad() {
        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w - 450, this.canvasSize.h)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(450, 0, this.canvasSize.w - 450, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(70, 0, this.canvasSize.w - 480, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(410, 0, this.canvasSize.w - 480, this.canvasSize.h)
    },

    drawDashLine() {
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([60, 20])
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
        this.ctx.drawImage(this.carInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)

    },

    setEventListeners() {
        document.onkeydown = evt => {
            if (evt.key === 'ArrowLeft' && this.carPosition.x > 90) this.carPosition.x -= 10
            if (evt.key === 'ArrowRight' && this.carPosition.x < 340) this.carPosition.x += 10
        }
        console.log('holaaaa')
    },

    generateObstacle() {

        

}