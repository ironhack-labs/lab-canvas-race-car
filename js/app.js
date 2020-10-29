const islandRacer = {
    name: 'islandRacer',
    description: 'Driving game',
    version: '1.0.0',
    license: undefined,
    author: 'Jordi Boronat',
    canvasTag: undefined,
    ctx: undefined,
    car: undefined,
    obstacles: undefined,
    frames: 0,
    keys: {
        left: 37,
        right: 39
    },
    canvasSize: {
        w: 500,
        h: 700
    },

    init(id) {
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.drawAll()
        this.createCar()
        this.createObstacle()
        this.setEventListeners()
    },

    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === this.keys.left ? this.car.move('left') : null
            e.keyCode === this.keys.right ? this.car.move('right') : null
        }
    },
    drawAll() {

        setInterval(() => {
            this.clearScreen()
            this.drawGrass()
            this.drawRoad()
            this.drawDashedLines()
            this.drawLines()
            this.obstacles.draw()
            this.car.draw()

        }, 70)
    },

    drawGrass() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.canvasSize.w - 500, this.canvasSize.h - 700, 500, 700)
    },

    drawRoad() {
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(this.canvasSize.w - 465, this.canvasSize.h - 700, 430, 700)
    },

    drawLines() {
        this.ctx.setLineDash([0, 0])
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.strokeRect(this.canvasSize.w - 465, this.canvasSize.h - 750, 430, 800)
    },

    drawDashedLines() {
        this.ctx.lineWidth = 7
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.setLineDash([40, 15])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    createCar() {
        this.car = new Car(this.ctx, 200, 450, 80, 160, 'car.png', this.canvasSize)
        console.log('YAY')
    },

    createObstacle() {
        this.obstacles = new Obstacles(this.ctx, this.canvasSize, 300, 0, 100, 100, 5, 'obstacle.png')
        console.log('Grandma Attack!')

    }
}

class Car {
    constructor(ctx, carPosX, carPosY, carWidth, carHeigth, carImage, canvasSize) {
        this.ctx = ctx
        this.carPos = {
            x: carPosX,
            y: carPosY
        }
        this.carSize = {
            w: carWidth,
            h: carHeigth
        }
        this.imageName = carImage
        this.carInstance = undefined
        this.canvasSize = canvasSize
        this.init()
    }

    init() {
        this.carInstance = new Image
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

// class Obstacles {
//     constructor(ctx, canvasSize, posX, posY, obstWidth, obstHeight) {
//         this.ctx = ctx
//         this.canvasSize = canvasSize
//         this.obstPosition = {
//             x: posX,
//             y: posY
//         }
//         this.obstWidth = obstWidth
//         this.obstHeight = obstHeight
//     }

//     init() {
//         this.drawObstacle()

//     }

//     drawObstacle() {
//         this.ctx.fillStyle = 'brown'
//         this.ctx.fillRect(this.obstPosition.x, this.obstPosition.y, 100, 300)
//     }


class Obstacles {
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
        this.imageInstance.src = `images/obstacle.png`
    }

    draw() {
        this.moveObstacle()
        this.ctx.drawImage(this.imageInstance, this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }

    moveObstacle() {
        if (this.obstaclePos.y >= this.canvasSize.h - this.obstacleSize.h) {
            this.speed *= -1
        }

        if (this.obstaclePos.y < 0) {
            this.speed *= -1
        }

        if (this.obstaclePos.y >= this.canvasSize.h - this.obstacleSize.h || this.obstaclePos.h < 0) {
            this.changeDirection()
        }

        this.obstaclePos.y += this.speed
    }

    changeDirection() {
        this.speed *= -1
    }

}