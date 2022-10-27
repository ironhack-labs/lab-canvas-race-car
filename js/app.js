const app = {
    appName: 'lab-canvas-race-car',
    version: '1.0.0',
    license: undefined,
    author: 'Jadde Suarez',
    ctx: undefined,
    imageInstance: undefined,
    canvasSize: {
        w: document.querySelector('#canvas').width,
        h: document.querySelector('#canvas').height
    },
    carData: {
        carSize: { w: 80, h: 160 },
        carPos: { x: 500 / 2 - 40, y: 700 - 200 },
        image: 'images/car.png'
    },
    init() {
        this.setContext()
        this.createCar()
        this.setEventHandlers()
        this.start()
    },
    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
        // console.log(this.ctx)
    },
    setEventHandlers() {
        document.onkeydown = event => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.carData.carPos.x -= 7
                    break;
                case 'ArrowRight':
                    this.carData.carPos.x += 7
                    break;
            }
        }
    },
    drawSquare() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
    },
    drawLines() {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 15
        this.ctx.beginPath()
        this.ctx.moveTo(70, 0)
        this.ctx.lineTo(70, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.w - 70, 0)
        this.ctx.lineTo(this.canvasSize.w - 70, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.beginPath()
        this.ctx.setLineDash([70, 20])
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
        this.imageInstance = new Image()
        this.imageInstance.src = this.carData.image
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 50)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll() {
        this.drawRoad()
        this.ctx.drawImage(
            this.imageInstance,
            this.carData.carPos.x,
            this.carData.carPos.y,
            this.carData.carSize.w,
            this.carData.carSize.h)
    }
}