const game = {
    name: 'Canvas Race Game',
    author: 'Alvaro Moral',
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: {
        height: 700,
        width: 500
    },
    car: undefined,
    counter: 0,
    obstacle: [],
    interval: 0,

    startGame(id) {
        console.log("Empieza el juego")
        this.canvasDom = document.getElementById(id)
        this.canvasDom.width = this.canvasSize.width
        this.canvasDom.height = this.canvasSize.height
        this.ctx = this.canvasDom.getContext('2d')
        this.setEventListeners()
        this.car = new Car(this.ctx, this.canvasSize.width / 2 + 50, this.canvasSize.height / 2 + 180, 50, 100, this.canvasSize)
        this.interval = setInterval(() => {
            this.clearScreen()
            this.drawBackground()
            this.drawCarOnBoard()
            this.car.drawCar()
            this.counter++
            this.counter % 300 === 0 && this.generateObstacle()
            this.obstacle.forEach((elm) => {
                elm.drawObstacle()
                elm.move()
                elm.isColision(this.car, elm) ? this.finPartida() : null
            })

        }, 10)


    },
    drawBackground() {
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(this.canvasSize.width / 2 - 100, this.canvasSize.height / 2 - 300, 350, 600)
        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(this.canvasSize.width / 2 - 75, this.canvasSize.height / 2 - 300, 300, 600)
        this.ctx.strokeStyle = "white"
        this.ctx.lineWidth = 8
        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.width / 2 - 65, this.canvasSize.height / 2 - 300)
        this.ctx.lineTo(this.canvasSize.width / 2 - 65, 650)
        this.ctx.stroke()
        this.ctx.moveTo(this.canvasSize.width / 2 + 215, this.canvasSize.height / 2 - 300)
        this.ctx.lineTo(this.canvasSize.width / 2 + 215, 650)
        this.ctx.stroke()
        this.ctx.closePath()
        //this.ctx.strokeStyle = "red"
        //this.ctx.beginPath()
        //this.ctx.setLineDash([10, 10])
        //this.ctx.moveTo(this.canvasSize.width / 2 - 10, this.canvasSize.height / 2 - 300)
        //this.lineTo(this.canvasSize.width / 2, 650)
        //this.ctx.stroke()
    },
    drawCarOnBoard() {
        this.car.init()
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },
    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.car.moveCar('left') : null
            e.keyCode === 39 ? this.car.moveCar('right') : null
        }
    },
    generateObstacle() {
        this.obstacle.push(new Obstacle(this.ctx, this.canvasSize.width / 2 - 100, this.canvasSize.height / 2 - 300, 100, 10, this.canvasSize))
        console.log("metido!")
    },
    finPartida() {
        alert("¡Te has estrellado! comprate un coche, e inténtalo de nuevo")
        document.location.reload();
        window.clearInterval(this.interval)
    }

}

class Car {
    constructor(ctx, posX, posY, carW, carH, canvasSize) {
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.carW = carW
        this.carH = carH
        this.canvasSize = {
            width: canvasSize.width,
            height: canvasSize.height
        }
        this.car = undefined
        this.spd = 10
    }
    init() {
        this.car = new Image()
        this.car.src = "images/car.png"
        this.car.onload = () => this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)
    }
    moveCar(dir) {
        dir === 'right' ? this.posX += this.spd : null
        dir === 'left' ? this.posX -= this.spd : null
    }
    drawCar() {
        this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)
    }
}

class Obstacle {
    constructor(ctx, posX, posY, obsW, obsH, canvasSize) {
        this.ctx = ctx
        this.posX = Math.floor((Math.random() * 200) + 70)
        this.posY = posY
        this.obsW = Math.floor((Math.random() * 200) + 70)
        this.obsH = obsH
        this.canvasSize = {
            width: canvasSize.width,
            height: canvasSize.height
        }
        this.obs = undefined
        this.speed = 2
    }

    drawObstacle() {
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(this.posX, this.posY, this.obsW, this.obsH)
        console.log("obstaculo")
    }
    move() {
        this.posY += this.speed
    }
    isColision(vehicle, enemy) {
        return (vehicle.posX < enemy.posX + enemy.obsW &&
            vehicle.posX + vehicle.carW > enemy.posX &&
            vehicle.posY < enemy.posY + enemy.obsH &&
            vehicle.posY + vehicle.carH > enemy.posY)
    }

}