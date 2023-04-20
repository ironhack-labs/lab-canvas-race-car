const gameApp = {
    appName: 'Carro-Motor',
    author: 'Ignatius',
    version: '1.0.0',
    licensed: undefined,
    description: 'Basic game in which the car has to avoid the obstacles',
    ctx: undefined,
    framesIndex: 0,
    canvaSize: {
        w: 500,
        h: 700
    },
    carInstance: undefined,
    carSpecs: {
        pos: { x: 250 - 50, y: 700 - 200 },
        size: { w: 100, h: 200 }
    },
    obstacles: [],
    init() {
        this.setContext()
        this.setImageInstance()
        this.setEventListeners()
        this.start()
    },
    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
    },
    setImageInstance() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
    },
    setEventListeners() {
        document.onkeyup = event => {

            const { key } = event

            if (key === 'ArrowLeft') {
                this.carSpecs.pos.x -= 10
            }

            if (key === 'ArrowRight') {
                this.carSpecs.pos.x += 10
            }
        }
    },
    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(500 / 2 - 250, 0, 500, 700)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(500 / 2 - 200, 0, 400, 700)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(60, 0, 15, 700)
        this.ctx.fillRect(427, 0, 15, 700)
        this.ctx.beginPath()
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(500 / 2, 0)
        this.ctx.lineTo(500 / 2, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawCar() {
        this.ctx.drawImage(
            this.carInstance,
            this.carSpecs.pos.x,
            this.carSpecs.pos.y,
            this.carSpecs.size.w,
            this.carSpecs.size.h
        )
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++
        }, 50)
    },
    drawAll() {
        this.drawRoad()
        this.drawCar()
        this.obstacles.forEach(elm => elm.drawObstacle())
        if (this.framesIndex % 40 === 0) this.createObstacles()

    },
    clearAll() {
        this.ctx.clearRect(0, 0, 500, 700)
    },
    createObstacles() {
        this.obstacles.push(
            new obstacle(this.ctx, Math.random() * (300 - 100) + 100, Math.random() * (200 - 100) + 100, this.carSpecs)
        )
    }
}

