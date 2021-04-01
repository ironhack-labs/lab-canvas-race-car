const drawingApp = {
    name: 'HTML5 Canvas race car app',
    description: 'App for race car lab',
    author: 'Mario Ortiz',
    license: undefined,
    version: '1.0.0',
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: { w: undefined, h: undefined },
    car: undefined,
    obstacles: [],
    frames: 0,
    gameLoop: 0,

    init() {
        this.canvasDom = document.querySelector('#canvas')
        this.ctx = this.canvasDom.getContext('2d')

        this.setCanvas()
        this.setListeners()
        this.createCar()
        this.createObstacles()
        this.drawAll()
    },

    launch() {
        this.clearAll()
        this.setCanvas()
        this.setListeners()
        this.createCar()
    },

    setCanvas() {
        this.canvasDom.style.backgroundColor = 'grey'
        this.setwhiteline()
        this.drawFilledSquare()
    },

    setwhiteline() {
        this.ctx.beginPath()
        this.ctx.setLineDash([])
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.moveTo(70, 0)
        this.ctx.lineTo(70, 700)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.moveTo(430, 0)
        this.ctx.lineTo(430, 700)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.lineWidth = 5
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    drawFilledSquare() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 50, 700)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(450, 0, 50, 700)
    },

    createCar() {
        this.car = new Car(this.ctx)
    },
    createObstacles() {

        this.obstacles.push(new Obstacle(this.ctx))
    },

    drawAll() {
        this.gameLoop = setInterval(() => {
            this.clearAll()
            this.setCanvas()
            this.frames++
            this.frames % 250 === 0 ? this.createObstacles() : null
            this.obstacles.forEach(elm => {
                elm.draw()

                if ((elm.obsPos.y + elm.obsSize.h) >= this.car.carPos.y &&
                    (elm.obsPos.x + elm.obsSize.w) >= this.car.carPos.x &&
                    (elm.obsPos.x) <= this.car.carPos.x + this.car.carSize.w) {
                    //alert("Te pille! A empezar de nuevo, haber estudiado!")
                    this.gameOverSign()
                    this.obstacles = []
                    this.frames = 0
                    this.stopGame()
                } else if (elm.obsPos.y >= 700) {
                    this.obstacles.shift()
                }
            })
            this.car.draw()
            this.drawScore()
        }, 1000 / 60)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, 500, 700)
    },

    setListeners() {
        document.onkeyup = e => {
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
        }
    },

    stopGame() {
        clearInterval(this.gameLoop)
        //this.launch()
    },
    gameOverSign() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 200, 500, 300)
        this.ctx.font = "30px Arial"
        this.ctx.fillStyle = "white"
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillText("GAME OVER", 230, 300)
        this.ctx.fillText("Your Score: " + this.frames, 230, 350)
    },
    drawScore() {
        this.ctx.font = "24px Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Score: " + this.frames, 8, 20);
    },
}

class Car {
    constructor(ctx) {
        this.ctx = ctx
        this.init()
        this.carPos = { x: 200, y: 500 }
        this.carSize = { w: 100, h: 200 }
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        this.carPos.x >= 80 ? this.carPos.x -= 10 : null
    }

    moveRight() {
        this.carPos.x <= 320 ? this.carPos.x += 10 : null
    }

}

class Obstacle {
    constructor(ctx) {
        this.ctx = ctx
        this.obsPos = { x: this.random(), y: 0 }
        this.obsSize = { w: 100, h: 30 }
        this.draw()
    }


    draw() {
        this.move()
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.obsPos.x, this.obsPos.y, this.obsSize.w, this.obsSize.h)
    }

    random() {
        return Math.round(Math.random() * (320 - 100 - 70)) + 70
    }

    move() {
        this.obsPos.y += 5
    }

}
