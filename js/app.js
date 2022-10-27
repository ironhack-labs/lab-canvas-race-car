const app = {
    appName: 'Race Car',
    Version: '1.0.0',
    License: 'undefined',
    author: 'Juliana Gómez',
    description: 'Lab Race Car',
    ctx: 'undefined',
    obstacle: [],
    canvasSize: {
        w: undefined, h: undefined
    },
    framesCounter: 0,


    carData: {
        pos: { x: 200, y: 600 },
        size: { w: 100, h: 100 },
        image: './images/car.png'
    },


    init() {
        this.setDimensions()
        this.setContext()
        this.createCar()
        this.start()
        this.createCar


    },
    setDimensions() {
        this.canvasSize = {
            w: 500,
            h: 700
        }
        document.querySelector("canvas").setAttribute('height', this.canvasSize.h)
        document.querySelector("canvas").setAttribute('width', this.canvasSize.w)
    },

    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')

    },
    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey '
        this.ctx.fillRect(30, 0, this.canvasSize.w - 60, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
    },


    drawLines() {

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 7
        this.ctx.beginPath()
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    createCar() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.carData.image
    },

    drawCar() {
        this.ctx.drawImage(
            this.imageInstance,
            this.carData.pos.x,
            this.carData.pos.y,
            this.carData.size.w,
            this.carData.size.h)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    createObstacule() {
        this.obstacle.push(
            new Obstacle(this.ctx, 0, 100, 100, 100, 10, this.canvasSize),

        )
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.drawCar()
        }, 50)
    },

    setEventHandlers() {
        document.onkeydown = event => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.carData.pos.x -= 10
                    break;
                case 'ArrowRight':
                    this.carData.pos.x += 10
                    break;
            }
        }
    },
    drawAll() {
        this.drawRoad()
        this.drawLines()
        this.setEventHandlers()
    }


}