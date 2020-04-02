const appBg = {
    ctx: undefined,
    canvasDom: undefined,
    canvasSize: {
        height: 700,
        width: 500
    },
    car: undefined,
    counter: 0,
    obstaclesArr =[],
    init(id) {
        this.canvasDom = document.getElementById(id)
        this.canvasDom.width = this.canvasSize.width
        this.canvasDom.height = this.canvasSize.height
        this.ctx = this.canvasDom.getContext('2d')
        this.car = new myCar(this.ctx, this.canvasSize.width / 2 - 25, this.canvasSize.height - 125, 50, 100, this.canvasSize)
        // this.eventListener()
        setInterval(() => {
            this.counter++
            if (this.counter % 50 === 0) {
                this.generateObstacles()
            }
            this.clearScreen()
            this.drawBg()
            this.drawLine()
            this.drawCar()
            this.eventListener()
        }, 1000)
    },
    drawBg() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 500, 700)

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(60, 0, 380, 700)
    },
    drawLine() {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 7
        this.ctx.moveTo(70, 0)
        this.ctx.lineTo(70, 700)
        this.ctx.stroke()

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 7
        this.ctx.moveTo(430, 0)
        this.ctx.lineTo(430, 700)
        this.ctx.stroke()

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5
        this.ctx.setLineDash([30, 20])
        this.ctx.moveTo(252, 10)
        this.ctx.lineTo(252, 700)
        this.ctx.stroke()
    },
    eventListener() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.car.move('right') : null
            e.keyCode === 39 ? this.car.move('left') : null
        }
    },
    drawCar() {
        this.car.draw()

    },
    randomNum(min, max) {
        return Math.random() * (max - min) + min;
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },
    generateObstacles() {

        let randomX = this.randomNum(0, this.canvasSize.width)
        let randomWidth = this.randomNum(0, 100)
        this.obstaclesArr.push(new ObstaclesGame(this.ctx, randomX, randomWidth))
    }
}


class myCar {
    constructor(ctx, posX, posY, carW, carH, canvasSize) {
        this.ctx = ctx
        this.car = undefined
        this.vel = 30
        this.posX = posX
        this.posY = posY
        this.carW = carW
        this.carH = carH
        this.canvasSize = {
            width: canvasSize.width,
            height: canvasSize.height
        }
    }
    draw() {
        this.car = new Image()
        this.car.src = './images/car.png'
        this.car.onload = () => { this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH) }

    }
    move(dir) {
        dir === 'left' ? this.posX += this.vel : null
        dir === 'right' ? this.posX -= this.vel : null
    }
    changeDirection() {
        this.vel *= -1
    }
}


class ObstaclesGame {

    constructor(ctx, obsX, obsW) {
        this.ctx = ctx
        this.obsX = obsX
        this.obsY = 0
        this.obsW = obsW
        this.obsH = 15

    }
    drawObs() {
        this.ctx.fillStyle = 'rojo'
        this.ctx.fillRect(100, 10, 200, 100)
    }

}