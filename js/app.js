const app = {
    appName: 'Race Car',
    version: '1.0.0',
    license: undefined,
    author: 'Catalina Sabogal',
    description: 'Day 4 Week 2 Lab',
    ctx: undefined,
    obstacles: [],
    canvasSize: {
        w: undefined, h: undefined
    },
    framesCounter: 0,


    carDetails: {
        pos: { x: 200, y: 600 },
        size: { w: 100, h: 50 },
        image: 'images/car.png'
    },

    init() {
        this.setDimensions()
        this.setContext()
        this.createObstacles()
        this.drawAll()
        this.createCar()
        this.drawCar()
        this.setEventHandlers()
        this.start()


    },

    setDimensions() {
        this.canvasSize = {
            w: 500,
            h: 700,
        }
        document.querySelector('#myCanvas').setAttribute('height', this.canvasSize.h)
        document.querySelector('#myCanvas').setAttribute('width', this.canvasSize.w)
    },

    setContext() {
        this.ctx = document.querySelector('#myCanvas').getContext('2d')
    },

    createObstacles() {
        this.obstacles.push(
            new Obstacle(this.ctx, 100, 0, 200, 26, 5, this.canvasSize),
            new Obstacle(this.ctx, 250, 100, 60, 30, 14, this.canvasSize),
            new Obstacle(this.ctx, 300, 200, 60, 30, 14, this.canvasSize),

        )
    },

    createCar() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.carDetails.image
    },


    drawSquare() {

        this.ctx.fillStyle = '#adbae3'
        this.ctx.fillRect(0, 0, 500, 700)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(100, 0, 300, 700)
    },

    drawLines() {

        this.ctx.lineWidth = 20
        this.ctx.strokeStyle = '#FF7F50'
        this.ctx.beginPath()

        // arreglar / cambiar a lineas o cuadrados largos.. 
        this.ctx.moveTo(110, 0)
        this.ctx.lineTo(110, 700)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.lineWidth = 20
        this.ctx.strokeStyle = '#FF7F50'
        this.ctx.beginPath()
        this.ctx.moveTo(400, 0)
        this.ctx.lineTo(400, 700)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.lineWidth = 15
        this.ctx.strokeStyle = '#FFDB58'
        this.ctx.beginPath()
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.setLineDash([60, 20])
        this.ctx.stroke()
        this.ctx.closePath()
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawCar()
            this.drawLines()
            this.drawSquare()
            this.drawAll()
            this.framesCounter++
            if (this.framesCounter % 60 === 0) {
                this.createObstacles()
            }
        }, 50)
    },

    setEventHandlers() {
        document.onkeydown = event => {
            switch (event.key) {
                case 'ArrowRight':
                    this.carDetails.pos.x += 10
                    break;
                case 'ArrowLeft':
                    this.carDetails.pos.x -= 10
                    break;
            }
        }
    },

    drawCar() {
        this.ctx.drawImage(
            this.imageInstance,
            this.carDetails.pos.x,
            this.carDetails.pos.y,
            this.carDetails.size.h,
            this.carDetails.size.w
        )
    },

    drawAll() {
        this.drawSquare()
        this.drawLines()
        this.createCar()
        this.drawCar()
        this.obstacles.forEach(obstacle => obstacle.draw())
        this.obstacles.forEach(obstacle => obstacle.move())
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
}