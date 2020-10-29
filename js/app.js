const gameApp = {
    name: 'Island racer app',
    description: 'Canvas app for basic shapes controlling',
    version: '1.0.0',
    license: undefined,
    author: 'Jorge Martín',
    canvasTag: undefined,
    ctx: undefined,
    frames: 0,
    obstacles: [],
    car: undefined,
    keys: {
        left: 37,
        right: 39
    },
    canvasSize: {
        w: 500,
        h: 700
    },
    score: 0,

    init(id) {
        console.log(window)
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.createCar()
        this.createObstacle()
        this.drawAll()
        this.setEventListeners()
        this.createScore()
    },

    createCar() {
        this.car = new Car(this.ctx, this.canvasSize.w - 275, this.canvasSize.h - 270, 50, 70, 'car.png')
    },

    createObstacle() {

        const obstacle1 = new Obstacle(this.ctx, this.canvasSize, this.canvasSize.w - 400, 0, 70, 70, 4, 'obstacle.png')
        const obstacle2 = new Obstacle(this.ctx, this.canvasSize, this.canvasSize.w - 200, 0, 60, 60, 6, 'obstacle 2.png')
        this.obstacles.push(obstacle1, obstacle2)
    },
       
    createScore() {
        this.ctx.fillStyle = 'blue'
        this.ctx.font = '22px serif'
        this.ctx.fillText(`Score: ${this.score}`, 70, 20)

    },

    drawRectangle() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.canvasSize.w - 500, this.canvasSize.w -700, 500, 700)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(this.canvasSize.w - 470, this.canvasSize.w - 700, 440, 700)
    },
    drawContinuousLines() {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 8
        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.w - 450, this.canvasSize.w)    
        this.ctx.lineTo(this.canvasSize.w - 450, this.canvasSize.w - 700)  
        this.ctx.closePath()
        this.ctx.stroke()

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 8
        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.w - 50, this.canvasSize.w)       
        this.ctx.lineTo(this.canvasSize.w - 50, this.canvasSize.w -700)       
        this.ctx.closePath()
        this.ctx.stroke()
    },

    drawDashedLines() {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 6
        this.ctx.beginPath()
        this.ctx.setLineDash([25, 15]) 
        this.ctx.moveTo(this.canvasSize.w / 2, this.canvasSize.w)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.w - 700)
        this.ctx.stroke()
    },
        setEventListeners() {
            document.onkeydown = e => {
                if (e.keyCode === this.keys.left) {
                    this.car.move('left')
                }
                if (e.keyCode === this.keys.right) {
                    this.car.move('right')
                }
        }
    },

    drawAll() {
        setInterval(() => {
            this.frames++
            if (this.frames % 60 === 0) {
                return this.createObstacle()
            }
            this.clearScreen()
            this.drawRectangle()
            this.drawContinuousLines()
            this.drawDashedLines()
            this.car.draw()
            this.createScore()
            this.obstacles.forEach(elm => {
                elm.draw()
                console.log('El obstáculo está en la posición', elm.obstaclePos.x, ' - ', elm.obstaclePos.y)
            })

        }, 70)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
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
        if (dir === 'left') {
            this.carPos.x -=20
        }
        else if (dir === 'right') {
            this.carPos.x += 20 
        }
        else {
            return null
        }
    }
}

class Obstacle {
    constructor(ctx, canvasSize, posX, posY, obstacleWidth, obstacleHeight, speed, image) {
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
        this.moveObstacle()
        this.ctx.drawImage(this.imageInstance, this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }

    moveObstacle() {
        if (this.obstaclePos.y >= this.canvasSize.w - this.obstacleSize.w) {
            this.speed *= -1
        }

        if (this.obstaclePos.y < 0) {
            this.speed *= -1
        }

        if (this.obstaclePos.y >= this.canvasSize.w - this.obstacleSize.w || this.obstaclePos.y < 0) {
            this.changeDirection()
        }

        this.obstaclePos.y += this.speed
    }

    changeDirection() {
        this.speed *= -1
    }
}