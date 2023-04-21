const basicShapesRoad = {
    appName: 'Basic shapes Ropad',
    author: 'Pedro de la Torre',
    version: '1.0.0',
    license: undefined,
    description: 'Basic app for Road shapes',
    ctx: undefined,
    obstacles: [],
    framesIndex: 0,
    canvasSize: {
        w: 500,
        h: 700
    },
    carInstance: undefined,
    carSpecs: {
        pos: { x: 200, y: 570 },
        size: { w: 100, h: 100 }
    },
    init() {
        this.setContext()
        this.drawRoad()
        this.setCarInstances()
        this.drawCar()
        this.setEventListeners()
        this.createObstacle()
        this.start()

    },
    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
    },
    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.canvasSize.w / 2 - 250, 0, 500, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(this.canvasSize.w / 2 - 200, 0, 400, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(this.canvasSize.w / 2 - 190, 0, 380, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(this.canvasSize.w / 2 - 180, 0, 360, this.canvasSize.h)
        //linea de la carretera
        this.ctx.beginPath()
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(this.canvasSize.w / 2 - 5, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    setCarInstances() {
        this.carInstance = new Image()
        this.carInstance.src = './images/alpacatCar.png'
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
    drawObstacle() {
        this.obstacles.forEach(elm => elm.draw())
        if (this.framesIndex % 20 === 0) this.createObstacle()
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
        this.setCarInstances()
        this.drawObstacle()

    },
    setEventListeners() {
        document.onkeyup = event => {
            const { key } = event
            if (key == 'ArrowLeft') {
                this.carSpecs.pos.x -= 10
            }
            if (key == 'ArrowRight') {
                this.carSpecs.pos.x += 10
            }
            if (key == 'ArrowUp') {
                this.carSpecs.pos.y -= 10
            }
            if (key == 'ArrowDown') {
                this.carSpecs.pos.y += 10
            }
        }
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    createObstacle() {
        this.obstacles.push(
            new Obstacle(this.ctx, this.canvasSize, 500, 100, 10),
            new Obstacle(this.ctx, this.canvasSize, 300, 50, 20),
            new Obstacle(this.ctx, this.canvasSize, 100, 140, 7)
        )
    }

}