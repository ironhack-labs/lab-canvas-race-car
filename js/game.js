const raceCarGame = {
    gameName: 'Race Car Game',
    description: 'Lab to practice Canvas',
    author: 'Yerai Pinedo',
    license: undefined,
    version: '1.0.0',
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: {
        width: "500",
        height: "700",
    },
    car: undefined,

    init() {
        this.canvasDom = document.querySelector('#canvas')
        this.ctx = this.canvasDom.getContext('2d')
        this.setCanvasSize()
        this.drawCar()
        this.drawAll()
        this.setListener()
        // console.(this.ctx);

    },
    setCanvasSize() {
        this.canvasDom.setAttribute('width', this.canvasSize.width)
        this.canvasDom.setAttribute('height', this.canvasSize.height)
    },
    drawBackground() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.canvasSize.width / 2 - 150, this.canvasSize.height / 3 - 200, 300, 500)

    },
    drawRoad() {
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(this.canvasSize.width / 2 - 130, this.canvasSize.height / 5.25 - 100, 260, 500)
    },
    drawLeftLine() {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5
        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.width - 373, 32)
        this.ctx.lineTo(this.canvasSize.width - 373, 550)
        this.ctx.stroke()
        this.ctx.closePath()

    },
    drawRightLine() {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5
        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.width - 127, 32)
        this.ctx.lineTo(this.canvasSize.width - 127, 550)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawDashedLine() {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 9
        this.ctx.beginPath()
        this.ctx.setLineDash([30, 20])
        this.ctx.moveTo(this.canvasSize.width / 2, 40)
        this.ctx.lineTo(this.canvasSize.width / 2, 700)
        this.ctx.stroke()
        this.ctx.setLineDash([0, 0])
        this.ctx.closePath()
    },
    drawCar() {
        this.car = new Car(this.ctx)
    },
    drawAll() {
        setInterval(() => {
            this.clearScreen()
            this.drawBackground()
            this.drawRoad()
            this.drawLeftLine()
            this.drawDashedLine()
            this.drawRightLine()
            this.car.draw()
            this.obstacle1()
        }, 50)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },
    setListener() {
        document.onkeyup = e => {
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
        }
    },

    obstacle1() {
        this.ctx.strokeStyle = 'crimson'
        this.ctx.lineWidth = 15
        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.width - 400, 32)
        this.ctx.lineTo(this.canvasSize.width - 300, 32)
        this.ctx.stroke()
        this.ctx.closePath()
    }






}

class Car {

    constructor(ctx) {
        this.ctx = ctx
        this.init()

        this.carPos = { x: 160, y: 400 }
        this.carSize = { w: 50, h: 90 }
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        this.carPos.x -= 20
    }
    moveRight() {
        this.carPos.x += 20
    }

    // sideCrash() {
    //     if (this.carPos.x >= this.canvasSize.width) {
    //         console.log(this.carPos.x);
    //     }

    // }

}





