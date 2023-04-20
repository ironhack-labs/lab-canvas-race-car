
const animateGame = {
    appName: 'Animate game',
    author: 'Helena Sánchez',
    version: '1.0.0',
    license: undefined,
    description: 'Basic app for game animation',
    ctx: undefined,
    frameIndex: 0,
    canvasSize: {
        w: 500,
        h: 700
    },
    carInstance: undefined,
    casrSpecs: {
        pos: { x: 225, y: 550 },
        size: { x: 50, y: 100 }
    },
    obstacles: [],
    frameIndex: 0,

    init() {
        this.setContext()
        this.setImageInstances()
        this.setEventListeners()
        this.start()
    },
    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
    },
    setDimensions() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        document.querySelector('canvas').setAttribute('width', this.canvasSize.w)
        document.querySelector('canvas').setAttribute('height', this.canvasSize.h)
    },
    setEventListeners() {
        document.onkeyup = event => {

            const { key } = event
            if (key === 'ArrowLeft') {
                this.casrSpecs.pos.x -= 20
            }
            if (key === 'ArrowRight') {
                this.casrSpecs.pos.x += 20
            }
        }
    },
    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, 400, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(65, 0, 15, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(420, 0, 15, this.canvasSize.h)
        this.ctx.beginPath()
        this.ctx.lineWidth = 7
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([40, 35])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    setImageInstances() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.frameIndex++
        }, 50)
    },
    drawCar() {
        this.ctx.drawImage(
            this.carInstance,
            this.casrSpecs.pos.x,
            this.casrSpecs.pos.y,
            this.casrSpecs.size.x,
            this.casrSpecs.size.y,
        )
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawBricks() {
        this.obstacles.forEach(brick => brick.drawObstacle())
        if (this.frameIndex % 10 === 0) {
            this.createObstacle()
        }
    },
    drawAll() {
        this.drawRoad()
        this.drawBricks()
        this.drawCar()
    },
    createObstacle() {
        this.obstacles.push(
            new Obstacles(this.ctx, this.canvasSize)
        )
    }

}

