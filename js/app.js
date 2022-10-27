const app = {
    appName: 'lab-canvas-race-car',
    version: '1.0.0',
    license: undefined,
    author: 'Jadde Suarez',
    ctx: undefined,
    obstacle: [],
    imageInstance: undefined,
    canvasSize: {
        w: document.querySelector('#canvas').width,
        h: document.querySelector('#canvas').height
    },
    framesCounter: 0,
    carData: {
        carSize: { w: 50, h: 100 },
        carPos: { x: 500 / 2 - 25, y: 700 - 120 },
        image: 'images/car.png'
    },
    init() {
        this.setContext()
        this.createCar()
        this.setEventHandlers()
        this.createObstacle()
        this.start()
    },
    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
        // console.log(this.ctx)
    },
    createObstacle() {
        this.obstacle.push(
            new Obstacle(this.ctx, this.canvasSize),
        )
    },
    setEventHandlers() {
        document.onkeydown = event => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.carData.carPos.x -= 25
                    break;
                case 'a':
                    this.carData.carPos.x -= 25
                    break;
                case 'ArrowRight':
                    this.carData.carPos.x += 25
                    break;
                case 'd':
                    this.carData.carPos.x += 25
                    break;
                case 'ArrowUp':
                    this.carData.carPos.y -= 25
                    break;
                case 'w':
                    this.carData.carPos.y -= 25
                    break;
                case 'ArrowDown':
                    this.carData.carPos.y += 25
                    break;
                case 's':
                    this.carData.carPos.y += 25
                    break;
            }
        }
    },
    drawSquare() {
        this.ctx.fillStyle = '#C8DBBE'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = '#B7C4CF'
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
    },
    drawLines() {
        this.ctx.strokeStyle = '#FDFDBD'
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

        this.ctx.strokeStyle = '#FDFDBD'
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
            this.framesCounter++
            if (this.framesCounter % 35 === 0) this.createObstacle()
            this.clearAll()
            this.moveAll()
            this.drawAll()
        }, 50)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    moveAll() {
        this.obstacle.forEach(elem => elem.move())
    },
    drawAll() {
        this.drawRoad()
        this.ctx.drawImage(
            this.imageInstance,
            this.carData.carPos.x,
            this.carData.carPos.y,
            this.carData.carSize.w,
            this.carData.carSize.h)
        this.obstacle.forEach(elem => elem.draw())
    }
}