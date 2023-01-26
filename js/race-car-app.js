const raceCarApp = {
    name: 'Basic Race Car',
    description: 'Race track with obstacules',
    version: '1.0.0',
    license: undefined,
    author: 'Miguel',
    canvasTag: undefined,
    ctx: undefined,
    canvasTag: undefined,
    canvasPosition: undefined,
    framesIndex: 0,
    canvasSize: { w: 500, h: 700 },
    carInstance: undefined,
    carSize: { w: 60, h: 100 },
    carPosition: { x: 220, y: 550 },
    obstacle: [],
    obstacleSize: { w: undefined, h: 30 },
    obstaclePosition: { x: undefined, y: 0 },
    frameIndex: 0,


    init() {
        this.createCar()
        this.setContext()
        this.setEventListeners()
        this.obstacleMove()
        this.drawAll()
        this.clearAll()
        this.createObstacle()
        this.start()

    },


    setContext() {
        this.canvasTag = document.querySelector('#canvas')
        this.ctx = this.canvasTag.getContext('2d')
    },


    setEventListeners() {
        document.onkeydown = evt => {
            if (evt.key === 'ArrowLeft' && this.carPosition.x > 10) this.carPosition.x -= 15
            if (evt.key === 'ArrowRight' && this.carPosition.x < 430) this.carPosition.x += 15
        }
    },


    start() {

        setInterval(() => {
            console.log(this.carInstance)
            this.clearAll()
            this.drawAll()
            if (this.framesIndex % 100 === 0) this.createObstacle()
            this.framesIndex++
        }, 10)
    },


    createCar() {

        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
    },


    createObstacle() {


        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(10, 0, 200, 30)




    },


    obstacleMove() {
        this.obstaclePosition.y += 5
        this.drawObstacle()
    },


    clearAll() {

        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },


    drawAll() {
        this.drawRoad()
        this.drawDashedLine()
        this.drawCar()
        this.drawObstacle()
    },


    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(60, 0, 10, this.canvasSize.h)

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(430, 0, 10, this.canvasSize.h)
    },


    drawDashedLine() {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
    },


    drawCar() {
        this.ctx.drawImage(this.carInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)
    },


    drawObstacle() {

        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.obstaclePosition.x, this.obstaclePosition.y, 200, 30)

    },
}