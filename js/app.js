const app = {
    appName: 'Race Car',
    version: '1.0.0',
    license: undefined,
    author: 'Hugo Paniagua',
    description: 'Race car videogame',
    ctx: undefined,
    imageInstance: undefined,
    canvasSize: {
        w: undefined, h: undefined
    },

    carData: {
        pos: { x: 200, y: 500 },
        size: { w: 60, h: 80 },
        image: 'images/car.png'
    },

    init() {
        this.setContext()
        this.setDimensions()
        this.createCar()
        this.setEventHandlers()
        this.start()
    },

    setDimensions() {
        this.canvasSize = {
            w: 500,
            h: 700
        }
        document.querySelector('canvas').setAttribute('height', this.canvasSize.h)
        document.querySelector('canvas').setAttribute('width', this.canvasSize.w)
    },

    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')

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
                case 'ArrowUp':
                    this.carData.pos.y -= 10
                    break;
                case 'ArrowDown':
                    this.carData.pos.y += 10
                    break;
            }
        }
    },

    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(65, 0, this.canvasSize.w / 30, this.canvasSize.h)

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(420, 0, this.canvasSize.w / 30, this.canvasSize.h)

    },

    drawLines() {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5

        this.ctx.beginPath()
        this.ctx.setLineDash([25, 20])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    createCar() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.carData.image
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 50)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll() {
        this.drawRoad()
        this.drawLines()
        this.ctx.drawImage(
            this.imageInstance,
            this.carData.pos.x,
            this.carData.pos.y,
            this.carData.size.w,
            this.carData.size.h
        )
    }
}