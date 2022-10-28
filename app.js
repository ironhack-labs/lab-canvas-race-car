const app = {

    appName: 'Mi primer canvas',
    version: '1.0.0',
    license: undefined,
    author: 'João Pedro',
    description: 'Week 2, Day 4',
    ctx: undefined,
    imageInstance: undefined,
    canvasSize: {
        w: undefined, h: undefined
    },
    carData: {
        pos: { x: 500 / 2 - 30, y: 700 - 130 },
        size: { w: 60, h: 120 },
        image: 'images/car.png'
    },
    init() {
        this.setDimensions()
        this.setContext()
        this.createCar()
        this.start()
        this.setEventHandlers()
        this.begin()

    },
    setDimensions() {
        this.canvasSize = {
            w: 500,
            h: 700,
        }
        document.querySelector('#myCanvas').setAttribute('height', this.canvasSize.h)
        document.querySelector('#myCanvas').setAttribute('width', this.canvasSize.w)
    },
    setContext() {
        this.ctx = document.querySelector("#myCanvas").getContext('2d')
    },
    createSquare() {
        this.ctx.fillStyle = "#239B56"
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = "#99A3A4"
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
    },
    drawRect() {
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(60, 0, this.canvasSize.w - 490, this.canvasSize.h)
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(430, 0, this.canvasSize.w - 490, this.canvasSize.h)
    },
    dashedLine() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = "white"
        this.ctx.beginPath()
        this.ctx.setLineDash([65, 40])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawRoad() {
        this.createSquare()
        this.drawRect()
        this.dashedLine()
        this.drawObs()
    },
    createCar() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.carData.image
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()

        }, 30)
    },
    setEventHandlers() {
        document.onkeydown = event => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.carData.pos.x -= 10
                    break;
                case 'ArrowRight':
                    this.carData.pos.x += 10
                    break;
                case 'ArrowUp':
                    this.carData.pos.y -= 10
                    break;
                case 'ArrowDown':
                    this.carData.pos.y += 10
                    break;
            }
        }
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll() {
        this.drawRoad()
        this.ctx.drawImage(
            this.imageInstance,
            this.carData.pos.x,
            this.carData.pos.y,
            this.carData.size.w,
            this.carData.size.h
        )
    },
    drawObs() {
        this.ctx.fillStyle = "#922B21"
        this.ctx.fillRect(215, 260, 70, 25, this.canvasSize.h)
        this.ctx.fillStyle = "#922B21"
        this.ctx.fillRect(340, 520, 70, 25, this.canvasSize.h)
        this.ctx.fillStyle = "#922B21"
        this.ctx.fillRect(80, 10, 70, 25, this.canvasSize.h)
        this.ctx.fillStyle = "#922B21"
        this.ctx.fillRect(340, 10, 70, 25, this.canvasSize.h)
        this.ctx.fillStyle = "#922B21"
        this.ctx.fillRect(80, 520, 70, 25, this.canvasSize.h)
    },
    createObstacle() {
        this.drawObs.push
        console.warn('AQUI TE CREAS UN OBSTACULO')
    },
    begin() {
        setInterval(() => {

            this.framesCounter++

            if (this.framesCounter % 120 === 0) this.createObstacle()

            this.clearAll()
            this.drawAll()
        }, 20)
    },
}
