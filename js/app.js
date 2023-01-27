const carApp = {
    name: 'controlled app',
    description: 'Basic canvas app for car controlling',
    version: '1.0.0',
    license: undefined,
    author: 'Adrian',
    canvasTag: undefined,
    ctx: undefined,
    framesIndex: 0,
    canvasSize: { w: 500, h: 700 },
    carInstance: undefined,
    carPosition: { x: 210, y: 550 },
    carSize: { w: 80, h: 100 },
    obstacle: [],
    init() {
        this.setContext()
        this.setDimensions()
        this.createCar()
        this.setEventListeners()
        this.createObstacles()
        this.start()
    },
    setContext() {
        this.canvasTag = document.querySelector('canvas')
        this.ctx = this.canvasTag.getContext('2d')
    },

    setDimensions() {
        this.canvasTag.setAttribute('width', this.canvasSize.w),
            this.canvasTag.setAttribute('height', this.canvasSize.h)
    },
    setEventListeners() {
        document.onkeydown = evt => {
            if (evt.key === 'ArrowLeft' && this.carPosition.x > 45) this.carPosition.x -= 10
            if (evt.key === 'ArrowRight' && this.carPosition.x < 375) this.carPosition.x += 10
            // if (evt.key === 'ArrowUp' && this.carPosition.x < 200 && this.carPosition.x > 100  ) this.carPosition.y -= 10
        }
    },
    start() {
        setInterval(() => {
            this.drawAll()
            this.frameIndex++

            if (this.framesIndex % 100 === 0) this.createObstacles()
        }, 10)
    },
    drawAll() {
        this.drawRoad()
        this.drawCar()
    },
    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)


        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(75, 0, this.canvasSize.w - 485, this.canvasSize.h)

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(400, 0, this.canvasSize.w - 485, this.canvasSize.h)

        this.ctx.beginPath()
        this.ctx.setLineDash([50, 20])
        this.ctx.moveTo(this.canvasSize.w / 2, -100)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.closePath()
    },
    createCar() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
    },
    drawCar() {
        this.ctx.drawImage(this.carInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)
    },
    createObstacles() {
        this.obstacle.push(
            new obstacle(this.ctx, this.canvasSize, 300, 200, 5),
        )
    },
}