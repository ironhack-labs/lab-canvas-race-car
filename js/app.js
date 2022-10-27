const app = {
    appName: 'Race Car',
    version: '1.0.0',
    license: undefined,
    author: 'Marta Salvador',
    description: 'LAB Canvas',
    ctx: undefined,
    canvasSize: {
        w: document.querySelector('#canvas').width,
        h: document.querySelector('#canvas ').height
    },
    carData: {
        carSize: { w: 80, h: 160 },
        carPos: { x: 500 / 2 - 40, y: 700 - 180 },
        carImage: 'images/car.png'

    },
    framesCounter: 0,

    init() {

        this.setContext()
        this.createCar()
        this.setEventHandlers()
        this.start()
        this.createObstacles()
    },

    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
    },

    drawSquare() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)

    },
    drawLines() {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10

        this.ctx.beginPath()
        this.ctx.moveTo(70, 0)
        this.ctx.lineTo(70, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10

        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.w - 70, 0)
        this.ctx.lineTo(this.canvasSize.w - 70, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 7

        this.ctx.beginPath()
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
        this.ctx.setLineDash([0, 0])
    },

    drawRoad() {
        this.drawSquare()
        this.drawLines()
    },

    createCar() {
        this.carImageInstance = new Image()
        this.carImageInstance.src = this.carData.carImage
    },
    createObstacles() {
        this.createObstacles.push(
            new obstacles(this.ctx, 0, 100, 100, 100, 10, this.canvasSize),
            new obstacles(this.ctx, 100, 600, 300, 100, 10, this.canvasSize),
            new obstacles(this.ctx, 200, 300, 80, 30, 10, this.canvasSize),
            new obstacles(this.ctx, 300, 500, 40, 100, 10, this.canvasSize)
        )
    },

    setEventHandlers() {
        document.onkeydown = event => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.carData.carPos.x -= 10
                    break;
                case 'ArrowRight':
                    this.carData.carPos.x += 10
                    break;
                case 'ArrowUp':
                    this.carData.carPos.y -= 10
                    break;
                case 'ArrowDown':
                    this.carData.carPos.y += 10
                    break;
            }
        }
    },
    start() {
        setInterval(() => {
            this.framesCounter++

            this.clearAll()
            this.drawAll()
        }, 30)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll() {
        this.drawRoad()
        this.ctx.drawImage(
            this.carImageInstance,
            this.carData.carPos.x,
            this.carData.carPos.y,
            this.carData.carSize.w,
            this.carData.carSize.h
        )
    },
}