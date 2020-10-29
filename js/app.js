const drawingApp = {
    name: 'Drawing app',
    description: 'Canvas app for basic drawing',
    version: '1.0.0',
    license: undefined,
    author: 'Héctor Carramiñana',
    canvasTag: undefined,
    ctx: undefined,
    frames: 0,
    cars: undefined,
    obstacles: [],
    keys: {
        left: 37,
        right: 39
    },
    canvasSize: {
        w: undefined,
        h: undefined
    },

    init(id) {

        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.setDimensions()
        this.createCars()
        this.drawRoad()
        this.setEventListeners()
    },

    setDimensions() {
        this.canvasSize.w = this.canvasTag.width
        this.canvasSize.h = this.canvasTag.height
    },
   
    drawRoad() {

        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(30, 0, this.canvasSize.w - 60, this.canvasSize.h)

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(40, 0, 20, this.canvasSize.h)
        this.ctx.fillRect(this.canvasSize.w - 60, 0, 20, this.canvasSize.h)

        // LÍNEAS DISCONTINUAS DE LA CARRETERA: 

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([40, 10])
        this.ctx.moveTo(this.canvasSize.w / 2 - 5, 0)
        this.ctx.lineTo(this.canvasSize.w / 2 - 5, this.canvasSize.h)
        this.ctx.stroke()
    },
    

    createCars() {

        this.cars = new Car(this.ctx, this.canvasSize.w / 2 - 30, this.canvasSize.h - 150, 50, 100, 'car.png', this.canvasSize)
    },

    createObstales() {
        // constructor(ctx, posX, posY, obstacleWidth, obstacleHeight, canvasSize, speed)

        const obstacle1 = new Obstacle(this.ctx, 60, 0, 220, 20, this.canvasSize, 3)
        const obstacle2 = new Obstacle(this.ctx, this.canvasSize.w / 2 - 80, 0, 220, 20, this.canvasSize, 7)
        const obstacle3 = new Obstacle(this.ctx, 200, 0, 220, 20, this.canvasSize, 4)
        this.obstacles.push(obstacle1, obstacle2, obstacle3)
    },

    drawAll() {

        setInterval(() => {
            this.frames++
            this.frames % 50 === 0 ? this.createObstales() : null
            this.clearScreen()
            this.drawRoad() 
            this.cars.draw()
            this.obstacles.forEach(elm => elm.drawObstacles())
        }, 70)
    },

    setEventListeners() {

        document.onkeydown = e => {
            e.keyCode === this.keys.left ? this.cars.moveCar('left') : null
            e.keyCode === this.keys.right ? this.cars.moveCar('right') : null
        }
    },


    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

}


class Car {
    constructor(ctx, posX, posY, carWidth, carHeight, image, canvasSize) {
        this.ctx = ctx
        this.imageInstance = undefined
        this.imgName = image
        this.carSize = {
            w: carWidth,
            h: carHeight
        },
            this.carPos = {
                x: posX,
                y: posY
            }

        this.canvasSize = {
            w: canvasSize.w,
            h: canvasSize.h
        }

        this.init()
    }

    init() {

        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.imgName}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveCar(direction) {
        
        if (this.carPos.x > 60 && (this.carPos.x + this.carSize.w) < (this.canvasSize.w - 60)) {
            direction === 'left' ? this.carPos.x -= 10 : null
            direction === 'right' ? this.carPos.x += 10 : null
        } else if (this.carPos.x <= 60) {
            direction === 'left' ? alert('APRENDE JS Y LUEGO A CONDUCIR') : null
            direction === 'right' ? this.carPos.x += 10 : null
        } else if ((this.carPos.x + this.carSize.w) >= (this.canvasSize.w - 60)) {
            direction === 'left' ? this.carPos.x -= 10 : null
            direction === 'right' ? alert('APRENDE JS Y LUEGO A CONDUCIR') : null
        }
    }
}


class Obstacle {
    constructor(ctx, posX, posY, obstacleWidth, obstacleHeight, canvasSize, speed) {
        this.canvasSize = {
            w: canvasSize.w,
            h: canvasSize.h
        }
        this.obstaclePos = {
            x: posX,
            y: posY
        }
        this.obstacleSize = {
            w: obstacleWidth,
            h: obstacleHeight
        }
        this.speed = speed
        this.ctx = ctx

        this.drawObstacles()
    }

    drawObstacles() {

        this.moveObstacles()
        this.ctx.fillStyle = 'brown'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.x, this.obstacleSize.w, this.obstacleSize.h)
    }

    moveObstacles() {

        this.obstaclePos.y += this.speed
    }

}