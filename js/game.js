const raceCarGame = {
    appName: "Race Car Game",
    author: "Alvaro",
    version: "1.0.0",
    licese: undefined,
    description: "Race Car Game",
    ctx: undefined,
    carInstance: undefined,
    carSpecs: {
        pos: { x: 225, y: 600 },
        size: { w: 50, h: 100 }
    },
    frameIndex: 0,
    obstacles: [],

    init() {
        this.setContext()
        this.start()
        this.setImageInstances()
        this.setEventListeners()
        this.createObstacles()
    },

    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
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

        if (this.frameIndex % 50 === 0) {
            this.createObstacles()
        }
    },

    drawRoad() {
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(0, 0, 20, 700)
        this.ctx.fillRect(480, 0, 20, 700)
        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(20, 0, 460, 700)
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(30, 0, 10, 700)
        this.ctx.fillRect(460, 0, 10, 700)
        this.ctx.beginPath()
        this.ctx.lineWidth = 20
        this.ctx.strokeStyle = "white"
        this.ctx.setLineDash([60, 30])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    drawCar() {
        this.ctx.drawImage(this.carInstance,
            this.carSpecs.pos.x,
            this.carSpecs.pos.y,
            this.carSpecs.size.w,
            this.carSpecs.size.h
        )
    },

    clearAll() {
        this.ctx.clearRect(0, 0, 500, 700)
    },

    setImageInstances() {
        this.carInstance = new Image()
        this.carInstance.src = "./images/car.png"
    },

    createObstacles() {
        this.obstacles.push(new Obstacles(this.ctx, 10, 20, 10))
        this.obstacles.forEach(elm => elm.drawObstacles())
    },

    setEventListeners() {
        document.onkeydown = event => {
            const { key } = event
            if (key == 'ArrowLeft') {
                this.carSpecs.pos.x -= 10
            }
            if (key == 'ArrowRight') {
                this.carSpecs.pos.x += 10
            }
        }

    },
}