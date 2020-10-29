const raceCarApp = {
    name: 'Island Racer',
    description: 'Canvas Race Car App',
    version: '1.0.0',
    license: undefined,
    author: 'Marisa Vitale',
    canvasTag: undefined,
    ctx: undefined,
    canvasSize: {
        w: 500,
        h: 700
    },
    frames: 0,
    car: undefined,
    keys: {
        left: 37,
        right: 39
    },
    obtacles: [],

    init(id) {
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        //this.setDimensions()
        this.setEventListeners()
        this.drawAll()
        this.createCar()
        this.generateObstacle()

    },

    drawRectangle() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.canvasSize.w - 500, this.canvasSize.h - 700, 360, 600)
        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(this.canvasSize.w - 470, this.canvasSize.h - 700, 300, 600)
    },

    drawContinuousLines() {
        this.ctx.lineWidth = 8
        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.w - 455, this.canvasSize.h - 700)       // Comenzar en...
        this.ctx.lineTo(this.canvasSize.w - 455, this.canvasSize.h)      // Trazar hasta...
        this.ctx.closePath()
        this.ctx.strokeStyle = 'white'
        this.ctx.stroke()

        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.w - 185, this.canvasSize.h - 700)       // Comenzar en...
        this.ctx.lineTo(this.canvasSize.w - 185, this.canvasSize.h)      // Trazar hasta...
        this.ctx.closePath()
        this.ctx.strokeStyle = 'white'
        this.ctx.stroke()
    },

    drawDashedLines() {
        this.ctx.lineWidth = 5
        this.ctx.beginPath()
        this.ctx.setLineDash([20, 9])      // Dash generator
        this.ctx.moveTo(this.canvasSize.w - 320, this.canvasSize.h - 700)
        this.ctx.lineTo(this.canvasSize.w - 320, this.canvasSize.h)
        this.ctx.strokeStyle = 'white'
        this.ctx.stroke()
    },

    createCar() {
        this.car = new Car(this.ctx, 200, 450, 50, 100, 'car.png')

    },

    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === this.keys.left ? this.car.move('left') : null
            e.keyCode === this.keys.right ? this.car.move('right') : null
        }
    },

    drawAll() {
        setInterval(() => {
            this.frames++
            this.frames % 50 === 0 ? this.generateObstacle() : null
            this.clearScreen()
            this.drawRectangle()
            this.drawContinuousLines()
            this.drawDashedLines()
            this.car.draw()
            this.obstacles.forEach(elm => {
                elm.draw()
                //console.log('El obstaculo está en la posición', elm.obstPos.x, ' - ', elm.obstPos.y)
            })
        }, 70)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    generateObstacle() {
        //console.log('NUEVO OBSTÁCULO! CUIDAO QUE VA!')

        const obst1 = new Obstacle(this.ctx, this.canvasSize, 0, 0, 200, 200, 4, 'car.png')
        const obst2 = new Obstacle(this.ctx, this.canvasSize, 0, 300, 160, 160, 7, 'car.png')
        const obst3 = new Obstacle(this.ctx, this.canvasSize, 0, 500, 300, 300, 3, 'car.png')

        this.obstacles.push(obst1, obst2, obst3)

    }

}


class Car {
    constructor(ctx, carPosX, carPosY, carWidth, carHeight, carImage) {
        this.ctx = ctx
        this.carPos = {
            x: carPosX,
            y: carPosY
        }
        this.carSize = {
            w: carWidth,
            h: carHeight
        }
        this.imageName = carImage
        this.carInstance = undefined
        this.init()
    }

    init() {
        this.carInstance = new Image()
        this.carInstance.src = `images/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    move(dir) {
        dir === 'left' ? this.carPos.x -= 20 : null
        dir === 'right' ? this.carPos.x += 20 : null
    }
}


class Obstacle {
    constructor(ctx, canvasSize, posObstX, posObstY, obstWidth, obstHeight, speed, image) {
        this.canvasSize = {
            w: canvasSize.w,
            h: canvasSize.h
        }
        this.obstPos = {
            x: posObstX,
            y: posObstY
        }
        this.obstSize = {
            w: obstWidth,
            h: obstHeight
        }
        this.speed = speed
        this.imageName = image
        this.ctx = ctx
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.imageName}`
    }

    draw() {
        this.moveObst()
        this.ctx.drawImage(this.imageInstance, this.obstPos.x, this.obstPos.y, this.obstSize.w, this.obstSize.h)
    }

    moveObst() {


        if (this.obstPos.x >= this.canvasSize.w - this.obstSize.w || this.obstPos.x < 0) {
            this.changeDirection()
        }

        this.obstPos.x += this.speed
    }

    changeDirection() {
        this.speed *= -1
    }
}