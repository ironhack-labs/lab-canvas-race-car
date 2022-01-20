const raceCarApp = {
    appName: 'Race Car Game',
    author: 'Mikel Laiseca',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    obstacles: [],
    framesIndex: 0,
    init() {
        this.setContext()
        this.setSize()

        this.start();
    },

    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')

    },
    setSize() {
        this.gameSize.w = document.querySelector('#canvas').getAttribute('width')
        this.gameSize.h = document.querySelector('#canvas').getAttribute('height')
    },

    start() {
        this.drawGreenRectangle()
        this.drawGreyRectangle()
        this.drawRegularLines()
        this.drawDashedLine()
        this.createCar()
        this.drawAll()
        this.setEventHandlers()
    },
    drawGreenRectangle() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 400, 600)
    },
    drawGreyRectangle() {
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(25, 0, 350, 600)
    },
    drawRegularLines() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(40, 0)
        this.ctx.lineTo(40, 700)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.moveTo(360, 0)
        this.ctx.lineTo(360, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawDashedLine() {
        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w / 2 - 50, 0)
        this.ctx.setLineDash([40, 40])
        this.ctx.lineTo(this.gameSize.w / 2 - 50, 700)
        this.ctx.stroke()
        this.ctx.closePath()
        this.ctx.setLineDash([0, 0])
    },
    createCar() {
        this.car = new Car(this.ctx, 175, 450, 50, 100)
    },
    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.drawGreenRectangle()
            this.drawGreyRectangle()
            this.drawRegularLines()
            this.drawDashedLine()
            this.car.draw()
        }, 40)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },
    createObstacles() {
        this.obstacles.push(
            new Obstacle()
        )
    },

    setEventHandlers() {
        document.addEventListener('keydown', event => {
            const { key } = event
            key === 'ArrowRight' ? this.car.moveRight() : null
            key === 'ArrowLeft' ? this.car.moveLeft() : null
        })
    }
}