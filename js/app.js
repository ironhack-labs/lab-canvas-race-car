const app = {

    name: 'CarRace Videogame',
    author: 'Don´t know',
    version: '1.0',
    description: 'Just cloning an existing app',
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: {
        width: 500,
        height: 700
    },
    frames: 0,
    interval: 0,
    obstaclesArr: [],
    startGame(id) {
        this.canvasDom = document.getElementById(id)
        this.canvasDom.width = this.canvasSize.width
        this.canvasDom.height = this.canvasSize.height
        this.ctx = this.canvasDom.getContext('2d')
        this.setEventListeners()
        this.drawBackround()
        this.drawRoad()
        this.drawLines()
        this.draw()
        this.drawDashed()
        this.crash()
        this.gameOver()
    },

    drawBackround() {

        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.width, this.canvasSize.height)

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(40, 0, 420, this.canvasSize.height)
    },

    drawRoad() {
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(40, 0, 420, this.canvasSize.height)
    },

    drawLines() {

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.beginPath()
        this.ctx.moveTo(60, 0)
        this.ctx.lineTo(60, this.canvasSize.height)
        this.ctx.stroke()

        this.ctx.beginPath()
        this.ctx.moveTo(440, 0)
        this.ctx.lineTo(440, this.canvasSize.height)
        this.ctx.stroke()

    },

    drawDashed() {
        this.ctx.setLineDash([50, 40])
        this.ctx.beginPath()
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, this.canvasSize.height)
        this.ctx.stroke()
    },



    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },

    setEventListeners() {

        document.onkeydown = e => {
            e.keyCode === 37 ? this.car.move('left') : null
            e.keyCode === 39 ? this.car.move('right') : null

        }

    },

    draw() {
        this.car = new Car(this.ctx, 300, 600, 50, 100, this.canvasSize)
        this.car.initCar()
        setInterval(() => {

            this.clearScreen()
            this.drawBackround()
            this.drawRoad()
            this.drawLines()
            this.drawDashed()
            this.frames++
                this.frames % 350 === 0 && this.obstaclesArr.push(new Obstacles(this.ctx))
            this.obstaclesArr.map(elm => {

                elm.draw()
                elm.move()
                this.crash(this.car, elm) ? this.gameOver() : null
            })

            this.car.draw()
        }, 10)
    },

    crash(car, obstacle) {

        return car.posX < obstacle.posX + obstacle.width &&
            car.posX + car.carWidth > obstacle.posX &&
            car.posY < obstacle.posY + obstacle.height &&
            car.posY + car.carHeight > obstacle.posY

    },

    gameOver() {
        alert('Car crashed')
        document.location.reload()
        window.clearInterval(this.interval)
    }

}



class Car {

    constructor(ctx, posX, posY, carWidth, carHeight, canvasSize) {

        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.carWidth = carWidth
        this.carHeight = carHeight
        this.canvasSize = {
            width: canvasSize.width,
            height: canvasSize.height
        }
        this.vel = 20
        this.car = undefined

    }


    initCar() {
        this.car = new Image()
        this.car.src = 'images/car.png'
        this.car.onload = () => this.ctx.drawImage(this.car, this.posX, this.posY, this.carWidth, this.carHeight)
    }


    move(dir) {

        this.ctx.drawImage(this.car, this.posX, this.posY, this.carWidth, this.carHeight)

        if (this.posX <= 40) {
            this.posX = 40
        }
        if (this.posX >= 410) {
            this.posX = 410
        }
        dir === 'left' ? this.posX -= this.vel : null
        dir === 'right' ? this.posX += this.vel : null

    }


    draw() {
        this.ctx.drawImage(this.car, this.posX, this.posY, this.carWidth, this.carHeight)
    }

}

class Obstacles {
    constructor(ctx) {
        this.ctx = ctx
        this.posX = Math.floor(Math.random() * 400)
        this.posY = 0
        this.width = Math.floor(Math.random() * 400)
        this.height = 30
        this.color = 'blue'

        this.speed = 1

    }
    draw() {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }
    move() {
        this.posY += this.speed
    }

}