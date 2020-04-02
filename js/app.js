const app = {
    name: 'Island Racer',
    author: 'Patricia Jurado De Bilbao',
    version: '1.0.0',
    description: 'App island racer',
    license: undefined,
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: {
        height: 700,
        width: 500
    },
    frames: 0,
    interval: 0,
    init(id) {
        this.canvasDom = document.getElementById(id)
        this.canvasDom.width = this.canvasSize.width
        this.canvasDom.height = this.canvasSize.height
        this.ctx = this.canvasDom.getContext('2d')
        this.drawRoad()
        this.drawLines()
        this.drawCar()
        this.setEventListeners()
       // this.blueCar.drawImage()
        this.interval = setInterval(() => {
            this.clearScreen()
            this.drawRoad()
            this.drawLines()
            this.frames++
            this.frames % 50 === 0  
            this.blueCar.drawImage()
        }, 10)
    },
    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 400, 800)

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, 300, 800)
    },
    drawLines() {
        this.ctx.beginPath()
        this.ctx.setLineDash([40, 0])
        this.ctx.moveTo(50, 0)
        this.ctx.lineTo(50, 800)
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10 
        this.ctx.stroke()

        this.ctx.beginPath()
        this.ctx.setLineDash([40, 0])
        this.ctx.moveTo(350, 0)
        this.ctx.lineTo(350, 800)
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10 
        this.ctx.stroke()

        this.ctx.beginPath()
        this.ctx.setLineDash([40, 30])
        this.ctx.moveTo(200, 0)
        this.ctx.lineTo(200, 800)
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 6 
        this.ctx.stroke()
    },
    drawCar() {
        this.blueCar = new Car(this.ctx, 175, 610, 40, 80, this.canvasSize)
        this.blueCar.init()
    },
    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.blueCar.moveCar('right') : null
            e.keyCode === 39 ? this.blueCar.moveCar('left') : null
        }
    },
    clearScreen() {
      this.ctx.clearRect(0,0, this.canvasSize.width, this.canvasSize.height)
    }
}
class Car {
    constructor(ctx, posX, posY, carW, carH, canvasSize) {
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.carW = carW
        this.carH = carH
        this.vel = 20
        this.car = undefined
        this.canvasSize = {
            width: canvasSize.width,
            height: canvasSize.height
        }
    }

    init() {
        this.car = new Image()
        this.car.src = `images/car.png`
        this.car.onload = () => this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)

        
    }
    drawImage() {
        this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)
    }
    moveCar(dir) {
        dir === 'left' ? this.posX += this.vel : null
        dir === 'right' ? this.posX -= this.vel : null
    }
}