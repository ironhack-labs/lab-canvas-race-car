const carLab = {
    name: 'Car Lab',
    description: 'car game',
    version: '1.0.0',
    author: 'Javier Ceballos',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: { w: 500, h: 700 },
    car: undefined,
    obstacle: undefined,
    


    init() {
        this.setContext()
        this.setDimensions()
        this.drawRoad()
        this.insertImage
    },
    setContext() {
        this.canvasDOM = document.querySelector('#canvas')
        this.ctx = this.canvasDOM.getContext('2d')
    },
    setDimensions() {

        this.canvasDOM.setAttribute('width', this.canvasSize.w)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)
    },

    drawRoad() {

        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvas.w, this.canvas.h)

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(20, 0, this.canvas.w - 20, this.canvas.h)


        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5

        this.ctx.beginPath()
        this.ctx.moveTo(30, 0)
        this.ctx.lineTo(30, this.canvas.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5

        this.ctx.beginPath()
        this.ctx.lineTo(this.canvas.w - 30, 0)
        this.ctx.lineTo(this.canvas.h - 30, this.canvas.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.beginPath()
        this.ctx.setLineDash([5, 15])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
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
        this.setListeners()

        this.setInterval(() => {
            this.clearScreen()
            this.drawAll()
        }, 20)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    createCar() {
        this.car = new Car(this.ctx, this.window.w / 2 - 50, this.window.h - 100, 100, 100, 'car.png')
    },

    createObstacles() {

        this.obstacle1 = new Obstacles(x, y, w, h, color)
        this.obstacle2 = new Obstacles(x, y, w, h, color)
        this.obstacle3 = new Obstacles(x, y, w, h, color)
        this.obstacle4 = new Obstacles(x, y, w, h, color)

    },
    drawAll() {
        this.car.draw()
        this.obstacles.draw()
    }
}



class Car {

    constructor(ctx, carPosx, carPosy, carWidth, carHeight, carImg) {
        this.ctx = ctx
        this.carPos = { x: carPosx, y: carPosy }
        this.carSize = { w: carWidth, h: carHeight }
        this.carImage = carImg
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.carImage}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        this.ballPos.x -= 10
    }

    moveRight() {
        this.ballPos.x += 10
    }
}

class Obstacles {

    constructor(ctx, obstaclePosx, obstaclePosy, obstacleWidth, obstacleHeight, color) {
        this.ctx = ctx
        this.obstaclePos = { x: obstaclePosx, y: obstaclePosy }
        this.obstacleSize = { w: obstacleWidth, h: obstacleHeight }
        this.obstacle.draw = undefined
        this.color = 'red'
    }

    draw() {
        this.ctx.drawImage(this.obstaclePos.x, this.carPos.y, this.carSize.w, this.carSize.h, this.obstacle.draw)
    }
}