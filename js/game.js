const gameCar = {
    canvasDom: undefined,
    ctx: undefined,
    interval: 0,
    frames: 0,
    car: undefined,
    obstacles: [],
    score: 0,
    init(id) {
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext("2d")
        this.drawBackground()
        this.drawCar()
        this.setEventListener()
        this.interval = setInterval(() => {
            this.clearScreen()
            this.drawBackground()
            this.frames++
            this.frames % 350 === 0 && this.obstacles.push(new Obstacles(this.ctx))
            this.obstacles.forEach(obs => {
                obs.draw()
                obs.move()
                this.isCrashing(this.car, obs) ? this.finishGame(this.score) : null
                if (obs.posY > 700) {
                    this.scorePoints()
                    this.obstacles.shift()
                    console.log(this.obstacles)
                }
            })
            this.drawScore()
            this.car.draw()
        }, 10)
    },
    drawBackground() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 500, 700)

        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(35, 0, 430, 700)

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([0, 0])
        this.ctx.beginPath()
        this.ctx.moveTo(50, 0)
        this.ctx.lineTo(50, 700)
        this.ctx.stroke()

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([0, 0])
        this.ctx.beginPath()
        this.ctx.moveTo(450, 0)
        this.ctx.lineTo(450, 700)
        this.ctx.stroke()

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5
        this.ctx.setLineDash([25, 20])
        this.ctx.beginPath()
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
    },
    drawCar() {
        this.car = new Car(this.ctx, 230, 610, 40, 80)
        this.car.init()
    },
    drawScore() {
        this.ctx.fillStyle = 'black'
        this.ctx.font = '20px sans-serif'
        this.ctx.fillText(`Points: ${this.score}`, 70, 50)
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, 500, 700)
    },
    setEventListener() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.car.move('left') : null
            e.keyCode === 39 ? this.car.move('right') : null
        }
    },
    isCrashing(car, obstacle) {
        return (
            car.posX < obstacle.posX + obstacle.width &&
            car.posX + car.width > obstacle.posX &&
            car.posY < obstacle.posY + obstacle.height &&
            car.posY + car.height > obstacle.posY
        )
    },
    scorePoints() {
        this.score += 100
    },
    finishGame(score) {
        alert(`GAME OVER TRON!\nLa has liao parda.\nTu puntuación es: ${score}`)
        document.location.reload();
        window.clearInterval(this.interval)
    }
}

class Car {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.width = width
        this.height = height
        this.car = undefined
        this.vel = 20
    }
    init() {
        this.car = new Image()
        this.car.src = `images/car.png`
        this.car.onload = () => this.ctx.drawImage(this.car, this.posX, this.posY, this.width, this.height)
    }
    draw() {
        this.ctx.drawImage(this.car, this.posX, this.posY, this.width, this.height)
    }
    move(dir) {
        this.ctx.drawImage(this.car, this.posX, this.posY, this.width, this.height)

        if (this.posX <= 55) {
            this.posX = 55
        }
        if (this.posX >= 405) {
            this.posX = 405
        }

        dir === 'left' ? this.posX -= this.vel : null
        dir === 'right' ? this.posX += this.vel : null
    }
}

class Obstacles {
    constructor(ctx) {
        this.ctx = ctx
        this.posX = Math.floor(Math.random() * 400)
        this.posY = 0
        this.width = Math.floor(Math.random() * 400)
        this.height = 40
        this.color = 'red'
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