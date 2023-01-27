const raceCarApp = {
    name: 'Race Car App',
    description: 'Driving game to avoid obstacles',
    version: '1.0.0',
    license: undefined,
    author: 'Daniel Salomon',
    canvasTag: undefined,
    ctx: undefined,
    framesIndex: 0,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    carInstance: undefined,
    carPos: { x: 220, y: 550 },
    carSize: { w: 60, h: 120 },
    carMoveLeft: false,
    carMoveRight: false,
    obstacle: [],

    init() {
        this.setContext()
        this.setDimensions()
        this.createCar()
        this.setEventListeners()
        this.start()
        // this.Obstacle()
        this.generateObstacle()
    },

    setContext() {
        this.canvasTag = document.querySelector('canvas')
        this.ctx = this.canvasTag.getContext('2d')
    },

    setDimensions() {
        this.canvasSize = {
            w: 500,
            h: 700
        }
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },

    drawRoad() {
        this.ctx.fillStyle = '#808080' // Gris
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = '#3A831D' // Verde
        this.ctx.fillRect(0, 0, 40, this.canvasSize.h)
        this.ctx.fillStyle = '#FFFFFF' // Blanco
        this.ctx.fillRect(55, 0, 10, this.canvasSize.h)
        this.ctx.fillStyle = '#3A831D' // Verde
        this.ctx.fillRect(460, 0, 40, this.canvasSize.h)
        this.ctx.fillStyle = '#FFFFFF' // Blanco
        this.ctx.fillRect(435, 0, 10, this.canvasSize.h)
    },

    drawDashedLine() {
        this.ctx.beginPath()
        this.ctx.strokeStyle = '#FFFFFF'
        this.ctx.lineWidth = 8
        this.ctx.setLineDash([30, 30])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    createCar() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
    },

    drawCar() {
        this.ctx.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    },

    moveLeft() {
        if (this.carPos.x > 40) this.carPos.x -= 8
    },

    moveRight() {
        if (this.carPos.x < 400) this.carPos.x += 8
    },

    drawAll() {
        this.drawRoad()
        this.drawDashedLine()
        this.drawCar()
        this.framesIndex++
        if (this.framesIndex % 100 === 0) this.Obstacle()
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    setEventListeners() {
        document.onkeydown = event => {
            if (event.key === 'ArrowLeft') this.carMoveLeft = true
            if (event.key === 'ArrowRight') this.carMoveRight = true
        }
        document.onkeyup = event => {
            if (event.key === 'ArrowLeft') this.carMoveLeft = false
            if (event.key === 'ArrowRight') this.carMoveRight = false
        }
    },

    generateObstacle() {
        // console.log('OBSTACULO')
        // this.ctx.fillStyle = '#870007'
        // this.ctx.fillRect(obsPos.x, obsPos.y, 300, 100)
        this.drawObstacle()
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            if (this.carMoveLeft) { this.moveLeft() }
            if (this.carMoveRight) { this.moveRight() }
        }, 10)
    }
}