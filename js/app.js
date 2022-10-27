const app = {
    appName: 'Island Racer',
    version: '1.0.0',
    license: undefined,
    author: 'Naomi Burgués',
    description: 'Canvas app for car and controllers',
    ctx: undefined,
    obstacle: [],
    canvasSize: {
        w: undefined, h: undefined
    },
    imageCar: undefined,
    carData: {
        pos: { x: 200, y: 600 },
        size: { w: 100, h: 100 },
        image: './images/car.png'

    },
    framesCounter: 0,

    init() {
        this.setDimensions()
        this.setContext()
        //console.log('init')
        this.createCar()
        this.createObstacles()
        this.start()

    },

    setDimensions() {
        this.canvasSize = {
            w: 500,
            h: 700
        }
        document.querySelector('#canvas').setAttribute('height', this.canvasSize.h)
        document.querySelector('#canvas').setAttribute('width', this.canvasSize.w)
    },

    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
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

    drawRoad() {
        //console.log('estoy en carretera')
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(30, 0, this.canvasSize.w - 60, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(60, 0, this.canvasSize.w - 120, this.canvasSize.h)
    },

    drawLines() {
        //console.log('estoy en la linea')
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 20

        this.ctx.beginPath()
        this.ctx.setLineDash([40, 20])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    createCar() {
        this.imageCar = new Image()
        this.imageCar.src = this.carData.image
        //console.log('creando coche')
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.drawCar()
            this.moveAll()
        }, 50)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawCar() {
        this.ctx.drawImage(
            this.imageCar,
            this.carData.pos.x,
            this.carData.pos.y,
            this.carData.size.w,
            this.carData.size.h
        )
    },

    drawAll() {
        this.drawRoad()
        this.drawLines()
        this.setEventHandlers()
        this.obstacle.forEach(elm => elm.draw())

    },

    moveAll() {
        this.obstacle.forEach(elm => elm.move())
    },

    createObstacles() {
        new Obstacle(this.ctx,)
    },


}