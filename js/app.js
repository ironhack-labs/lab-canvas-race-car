const carRaceDraw = {

    appName: 'island racer',
    author: 'guille rodríguez',
    version: '1.0.0',
    license: 'undefined',
    gameSize: { w: 500, h: 700 },
    ctx: undefined,
    car: undefined,
    obstacles: [],
    frameIndex: 0,

    init() {
        this.setContent()

        this.drawRoad()
        this.drawDashedLines()

        this.createCar()
        this.setEventHandlers()



        setInterval(() => {
            this.drawRoad()
            this.drawDashedLines()
            this.car.drawCar()
            this.drawObstacle()
            this.move()






        }, 50)
    },
    setContent() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
    },

    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, this.gameSize.w - 95, this.gameSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(65, 0, this.gameSize.w - 480, this.gameSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(420, 0, this.gameSize.w - 480, this.gameSize.h)

    },

    drawDashedLines() {
        this.ctx.lineWidth = 8
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(240, 700)
        this.ctx.setLineDash([45, 25])
        this.ctx.lineTo(this.gameSize.w - 258, 0)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    createCar() {
        this.car = new Car(this.ctx, 100, 100, 200, 200)
    },

    setEventHandlers() {
        document.addEventListener('keydown', event => {
            const { key } = event
            key === 'ArrowRight' ? this.car.moveRight() : null
            key === 'ArrowLeft' ? this.car.moveLeft() : null
        })
    },



}






