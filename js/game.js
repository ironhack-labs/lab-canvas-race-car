
const carGameApp = {
    name: 'Car game app',
    description: 'Canvas app for car game interaction',
    version: '1.0.0',
    author: 'Lali Osorio',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    car: undefined,
    block: undefined,
    canvasSize: { w: undefined, h: undefined },
    framesCounter: 0,
    init() {
        this.setContext()
        this.setDimensions()
        this.start()

    },
    setContext() {
        this.canvasDOM = document.querySelector('#canvas')
        this.ctx = this.canvasDOM.getContext('2d')
        console.log('Echa un vistazo al contexto 2d:', this.ctx)
    },
    setDimensions() {
        this.canvasSize.w = this.canvasDOM.attributes[1].value
        console.log(this.canvasSize.w)
        this.canvasSize.h = this.canvasDOM.attributes[2].value
        console.log(this.canvasSize.h)

    },
    setRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 500, 700)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(this.canvasSize.w / 2 - 200, 0, 400, 700)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(this.canvasSize.w / 2 - 185, 0, 10, 700)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(this.canvasSize.w / 2 + 175, 0, 10, 700)
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.setLineDash([40, 30])
        this.ctx.moveTo(this.canvasSize.w / 2, 20)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
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
        this.createCar()
        //this.createBlock()
        this.setListeners()

        setInterval(() => {
            this.clearScreen()
            this.setRoad()
            this.moveAll()
            this.drawAll()
            this.framesCounter++
            //this.framesCounter % 2 === 0 ? this.createBlock() : null
        }, 1000)
    },

    createCar() {
        this.car = new Car(this.ctx, 225, 600, 50, 90, 'car.png')
        console.log(this.car)
    },
    createBlock() {
        this.block = new Blocks(this.ctx, 0, this.canvasSize)
        console.log(this.block)
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll() {
        this.car.draw()
        this.block.draw()
    },
    moveAll() {
        if (this.framesCounter % 2 === 0) {
            this.createBlock()
            this.block.move()
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
        if (this.carPos.x === 65) {
            this.carPos.x

        } else {
            this.carPos.x -= 40
        }
    }

    moveRight() {
        if (this.carPos.x === 385) {
            this.carPos.x

        } else {
            this.carPos.x += 40
        }
    }
}
class Blocks {

    constructor(ctx, posY, canvasSize) {
        this.ctx = ctx
        this.blockPos = {
            x: Math.floor(Math.random() * (300 - 50)) + 50,
            y: posY
        }
        this.blockSize = {
            w: Math.floor(Math.random() * (310 - 65)) + 65,
            h: 30
        }
        this.blockSpeed = 100
        this.canvasSize = canvasSize

        this.init()
    }

    init() {
    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.blockPos.x, 10, this.blockSize.w, this.blockSize.h)
    }

    move() {
        this.blockPos.y += this.blockSpeed
        console.log(this.blockPos)
    }
}