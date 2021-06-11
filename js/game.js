const raceApp = {
    name: 'Race App',
    description: 'Canvas App for Car Race',
    version: '1.0.0',
    author: 'Juan Fuertes',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDom: undefined,
    canvasSize: { w: undefined, h: undefined },
    car: undefined,

    init() {
        this.setContext()
        this.setDimensions()
        this.start()
    },
    setContext() {
        this.canvasDOM = document.querySelector('#canvas')
        this.ctx = this.canvasDOM.getContext('2d')
    },
    setDimensions() {
        this.canvasSize.w = 500
        this.canvasSize.h = 700
        this.canvasDOM.setAttribute('width', this.canvasSize.w)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)
    },
    drawRoad() {
        // Rectángulos
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 500, 700)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(30, 0, 440, 700)
        // Líneas
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 9
        this.ctx.beginPath()
        this.ctx.moveTo(50, 0)
        this.ctx.lineTo(50, 700)
        this.ctx.stroke()
        this.ctx.closePath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 9
        this.ctx.beginPath()
        this.ctx.moveTo(450, 0)
        this.ctx.lineTo(450, 700)
        this.ctx.stroke()
        this.ctx.closePath()
        // L. discontinua
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 6
        this.ctx.beginPath()
        this.ctx.setLineDash([35, 20])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    setListeners() {
        document.onkeyup = e => {
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
        }
    },
    start() {
        //this.createBlock()
        this.setListeners()
        this.createCar()

        setInterval(() => {
            this.clearScreen()
            this.drawRoad()
            this.moveAll()
            this.drawAll()
            this.framesCounter++
            this.framesCounter % 2 === 0
        }, 1000)
    },

    createCar() {
        this.car = new Car(this.ctx, 225, 510, 80, 80, 'car.png')
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll() {
        this.car.draw()
    },
    moveAll() {
        if (this.framesCounter % 2 === 0) {
        }
    }
}

class Car {

    constructor(ctx, carPosX, carPosY, carWidth, carHeight, carImg) {
        this.ctx = ctx
        this.carPos = { x: carPosX, y: carPosY }
        this.carSize = { w: carWidth, h: carHeight }
        this.carImage = carImg
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.carImage}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        if (this.carPos.x <= 60) {
            this.carPos.x

        } else {
            this.carPos.x -= 40
        }
    }

    moveRight() {
        if (this.carPos.x >= 385) {
            this.carPos.x

        } else {
            this.carPos.x += 40
        }
    }
}



