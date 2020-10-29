
const controlledApp = {
    name: 'Race Car',
    discription: 'First canvas lab',
    version: '1.0.0',
    license: undefined,
    author: 'Jaime GE',
    canvasTag: undefined,
    ctx: undefined,
    frames: 0,
    obstacleVal1: false, 
    obstacleVal2: false, 
    obstacleVal3: false, 
    obstacleVal4: false, 
    obstacleVal5: false, 
    car: undefined,
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
        this.drawAll()
        this.createCar()
        this.setEventListeners()
    },
    setDimensions() {
        this.canvasSize.w = 500
        this.canvasSize.h = 700
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },


    drawRectangle() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h)
    },

    drawContinuousLines() {
        this.ctx.lineWidth = 15
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(80, 0)
        this.ctx.lineTo(80, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.lineWidth = 15
        this.ctx.beginPath()
        this.ctx.moveTo(420, 0)
        this.ctx.lineTo(420, this.canvasSize.h)
        this.ctx.stroke()
    },

    drawDashedLines() {
        this.ctx.lineWidth = 10
        this.ctx.beginPath()
        this.ctx.setLineDash([40, 10])      // Dash generator
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, this.canvasSize.h)
        this.ctx.stroke()
    },
    createCar() {
        this.car = new Car(this.ctx, 225, 600, 50, 80, 'car.png')
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
            this.frames % 20 === 0 && !this.obstacle1? this.createObstacles1() : null
            this.frames % 42 === 0 && !this.obstacle2? this.createObstacles2() : null
            this.frames % 64 === 0 && !this.obstacle3? this.createObstacles3() : null
            this.frames % 86 === 0 && !this.obstacle4 ? this.createObstacles4() : null
            this.frames % 102 === 0 && !this.obstacle5? this.createObstacles5() : null
            this.clearScreen()
            this.drawRectangle()
            this.drawDashedLines()
            this.drawContinuousLines()
            this.car.draw()
            this.obstacle1.draw()
            this.obstacle2.draw()
            this.obstacle3.draw()
            this.obstacle4.draw()
            this.obstacle5.draw()
            //this.drawObstacles1()
        }, 70)
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    createObstacles1() {
        let ranX = Math.floor(Math.random() * (400))
        let ranLen = Math.floor(Math.random() * 280) + 50
        this.obstacle1 = new Obstacle(this.ctx, ranX, 0, 'red', ranLen,25,this.obstacleVal1)
    },
    createObstacles2() {
        let ranX = Math.floor(Math.random() * (400))
        let ranLen = Math.floor(Math.random() * 280) + 50
        this.obstacle2 = new Obstacle(this.ctx, ranX, 0, 'red', ranLen,25,this.obstacleVal2)
    },
    createObstacles3() {
        let ranX = Math.floor(Math.random() * (400))
        let ranLen = Math.floor(Math.random() * 280) + 50
        this.obstacle3 = new Obstacle(this.ctx, ranX, 0, 'red', ranLen,25,this.obstacleVal3)
    },
    createObstacles4() {
        let ranX = Math.floor(Math.random() * (400))
        let ranLen = Math.floor(Math.random() * 280) + 50
        this.obstacle4 = new Obstacle(this.ctx, ranX, 0, 'red', ranLen,25, this.obstacleVal4)
    },
    createObstacles5() {
        let ranX = Math.floor(Math.random() * (400))
        let ranLen = Math.floor(Math.random() * 280) + 50
        this.obstacle5 = new Obstacle(this.ctx, ranX, 0, 'red', ranLen,25, this.obstacleVal5)
    }
}
    
    /*drawObstacles1() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.randomX[0], 0 + this.frames * 5, this.randomLength1[0], 25)

    }*/
//}
class Obstacle{
    constructor(ctx, obsPosX, obsPosY, obsColor, obsWidth, obsHeight, obstacleValue) {
        this.ctx = ctx
        this.obstacleValue = obstacleValue
        this.frames = 0
        this.obsPos = {
            x: obsPosX,
            y: obsPosY
        }
        this.obsSize = {
            w: obsWidth, 
            h: obsHeight
        }
        this.obsColor = obsColor
    }
    draw() {
        if (this.frames * 6 < 600) {
            this.frames++
            this.ctx.fillStyle = 'red'
            this.ctx.fillRect(this.obsPos.x, 0 + this.frames * 7, this.obsSize.w, 25)
            console.log(this.frames)
            this.obstacleValue = true;
        } else {
            this.frames = 0
            this.obstacleValue = false;
        }
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
        //dir === 'left' ? this.carPos.x -= 20 : null
        if (dir === 'left' && this.carPos.x >= 0) {
            this.carPos.x -= 20
        } 
        //dir === 'right' ? this.carPos.x += 20 : null
        if (dir === 'right' && this.carPos.x <= 460) {
            this.carPos.x += 20
        } 
    }
}