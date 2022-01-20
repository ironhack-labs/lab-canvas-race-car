const drawingCar = {
    appName: 'Canvas Race Car',
    author: 'Ricardo Ronchetti',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    car: undefined,
    framesIndex: 0,
    init() {
        this.setContext()
        this.setSize()
        this.createCar()
        this.drawAll()
        this.setEventHandlers()
    },
    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
        console.log(this.ctx)
    },
    setSize() {
        this.gameSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
    },
    drawFilledRectangle() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(35, 0, this.gameSize.w - 1045, this.gameSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(50, 0, this.gameSize.w - 1460, this.gameSize.h)
        this.ctx.fillRect(435, 0, this.gameSize.w - 1460, this.gameSize.h)
    },
    drawDashedLines() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(250, 0)
        this.ctx.setLineDash([60, 20])
        this.ctx.lineTo(250, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    createCar() {
        this.car = new Car(this.ctx, 225, 570, 50, 100)
    },
    createObstacles() {
        this.ctx.createObstacles(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    },
    drawAll() {
        setInterval(() => {
            this.framesIndex++
            this.framesIndex % 50 === 0 ? this.createObstacle() : null
            this.clearAll()
            this.drawFilledRectangle()
            this.drawDashedLines()
            this.car.draw()
            this.createObstacles()
            this.obstacles.forEach(elm => {
                elm.move()
                elm.draw()
            })
        }, 40)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },
    setEventHandlers() {
        document.addEventListener('keydown', event => {
            const { key } = event
            key === 'ArrowRight' ? this.car.moveRight() : null
            key === 'ArrowLeft' ? this.car.moveLeft() : null
        })
    },
}