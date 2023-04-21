const EvadingCarGame = {
    appName: "Cars",
    author: "Ricardo Navarro",
    version: "1.0.0",
    license: undefined,
    description: "Simple car game that dodges obstacles",
    ctx: undefined,
    canvasSize: {
        w: 500,
        h: 700,
    },
    carInstance: undefined,
    carSpecs: {
        pos: {
            x: 200,
            y: 525
        },
        size: { w: 75, h: 75 }
    },
    framesIndex: 0,
    obstacles: [],
    init() {
        this.setContext()
        this.setDimensions()
        this.setImageInstances()
        this.start()


    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.setEventListeners()

            this.framesIndex++
        }, 50)
    },
    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')

    },
    setDimensions() {
        this.canvasSize = {
            w: document.querySelector('canvas').getAttribute('width'),
            h: document.querySelector('canvas').getAttribute('height')
        }
    },
    setEventListeners() {

        document.onkeydown = event => {

            const { key } = event
            if (key === 'ArrowLeft') {
                this.carSpecs.pos.x -= 10
            }

            if (key === 'ArrowRight') {
                this.carSpecs.pos.x += 10
            }
            if (key === 'ArrowUp') {
                this.carSpecs.pos.y -= 10
            }
            if (key === 'ArrowDown') {
                this.carSpecs.pos.y += 10
            }
        }
    },
    createObstacles() {
        this.obstacles.push(
            new Obstacle(this.ctx, this.canvasSize, 240, 40, 10))
    },

    setImageInstances() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
    },
    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(30, 0, this.canvasSize.w - 60, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(55, 0, this.canvasSize.w - 110, this.canvasSize.h)
        this.ctx.beginPath()
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([40, 20])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawAll() {
        this.drawRoad()
        this.createObstacles()
        this.ctx.drawImage(
            this.carInstance,
            this.carSpecs.pos.x,
            this.carSpecs.pos.y,
            this.carSpecs.size.w,
            this.carSpecs.size.h
        )
        if (this.framesIndex % 20 === 000) this.createObstacles()
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

}