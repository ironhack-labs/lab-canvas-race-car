const gameApp = {
    name: 'Island Racer',
    description: 'Canvas app for basic Roads',
    version: '1.0.0',
    author: 'Carolina Vitale',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: { w: undefined, h: undefined },
    obstacles: [],
    framesCounter: 0,



    init() {
        this.setContext()
        this.setDimensions()
        this.drawFilledSquares()
        this.drawRegularLines()
        this.drawDashedLines()
        this.start()
        // this.createObstacle()
    
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
    drawFilledSquares() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.canvasSize.w -500, this.canvasSize.h -700, 500, 700)
        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(this.canvasSize.w - 460, this.canvasSize.h - 700, 420, 700)
    },

    drawRegularLines() {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 8
        this.ctx.beginPath()
        this.ctx.moveTo(55, 0)
        this.ctx.lineTo (55, 700)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 7
        this.ctx.beginPath()
        this.ctx.moveTo(445, 0)
        this.ctx.lineTo(445, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    drawDashedLines() {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5
        this.ctx.beginPath()
        this.ctx.setLineDash([50, 50])
        this.ctx.moveTo(this.canvasSize.w/ 2, 20)
        this.ctx.lineTo(this.canvasSize.w/ 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
        this.ctx.setLineDash([0,0])
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

        setInterval(() => {
            this.clearScreen()
            this.drawAll()
            this.framesCounter++
            if (this.framesCounter % 20 === 0) {
                numRandom =Math.floor(Math.random() * (450 -350) - 350)
                numRandom2 = Math.floor(Math.random() * (450))
                this.obstacles.push(new Obstacle(this.ctx, numRandom2, -75, numRandom, 150, 10, this.canvasSize))
            }
        }, 100/2)
    },

    createCar() {
        this.car = new Car(this.ctx, 220, 560, 60, 120, 'car.png')
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll() {
        this.drawFilledSquares()
        this.drawRegularLines()
        this.drawDashedLines()
        this.car.draw()
        this.drawAllObstacle()
        this.moveAll()
    }, 

    clearScreenObstacle() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAllObstacle() {
        this.obstacles.forEach(elm => elm.draw())
    },

    moveAll() {
      this.obstacles.forEach(elm => elm.move())
    }
}




class Obstacle {

    constructor(ctx, posX, posY, width, height, speed, canvasSize) {
        this.ctx = ctx
        this.obstaclePos = { x: posX, y: posY }
        this.obstacleSize = { w: width, h: height }
        this.obstacleImage = 'tree.png'
        this.imageInstance = undefined
        this.obstacleSpeed = speed
        this.canvasSize = canvasSize

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.obstacleImage}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }

    move() {
        this.obstaclePos.y >= this.canvasSize.h - this.obstacleSize.h
        this.obstaclePos.y += this.obstacleSpeed
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
        this.carPos.x -= 40
    }

    moveRight() {
        this.carPos.x += 40
    }

}