const app = {
    name: 'Island Racer',
    description: 'First Game Practice with Canva',
    version: '1.0.0',
    license: undefined,
    author: 'Daniel',
    canvasTag: undefined,
    ctx: undefined,
    carInstance: undefined,
    framesIndex: 0,
    canvasSize: { w: undefined, h: undefined },
    carPosition: { x: 125, y: 525 },
    carSize: { w: 75, h: 150 },
    moveCar: 10,
    obstacles: [],

    init() {
        this.setContext()
        this.setDimensions()
        this.animatedCarMove()
        this.createCar()
        this.setEventListeners()
        this.generateObstacle()
    },
    setContext() {
        this.canvasTag = document.querySelector('#canvas')
        this.ctx = this.canvasTag.getContext('2d')
        // console.log(this.ctx)
    },
    setDimensions() {
        this.canvasSize = {
            w: 500,
            h: 700,
        }
    },
    animatedCarMove() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++

            if (this.framesIndex % 100 === 0) this.generateObstacle()
        }, 10)
    },

    drawRoad() {
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h) //afuera
        this.ctx.fillStyle = 'grey'

        this.ctx.fillRect(30, 0, this.canvasSize.w - 60, this.canvasSize.h) //adentro
        this.ctx.fillStyle = 'white'

        this.ctx.fillRect(40, 0, this.canvasSize.w - 480, this.canvasSize.h) //linea
        this.ctx.fillStyle = 'white'

        this.ctx.fillRect(440, 0, this.canvasSize.w - 480, this.canvasSize.h) //linea
        this.ctx.fillStyle = 'green'

        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5
        this.ctx.setLineDash([30, 20])
        this.ctx.moveTo(this.canvasSize.w / 2, 20)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h - 10)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    createCar() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car2.png'
    },


    drawAll() {
        this.drawRoad()
        this.drawCar()
        this.obstacles.forEach(element => element.draw());
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawCar() {
        this.ctx.drawImage(this.carInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)
    },

    setEventListeners() {
        document.onkeydown = evt => {
            if (evt.key === 'ArrowLeft' && this.carPosition.x > 60) this.carPosition.x -= this.moveCar
            if (evt.key === 'ArrowRight' && this.carPosition.x < 365) this.carPosition.x += this.moveCar
        }
    },


    generateObstacle() {
        this.obstacles.push(
            new obstacle(this.ctx, this.canvasSize, 300, 20, 20),
            new obstacle(this.ctx, this.canvasSize, 400, 20, 20),
            new obstacle(this.ctx, this.canvasSize, 100, 20, 20),
            new obstacle(this.ctx, this.canvasSize, 250, 20, 20),
            console.log(this.ctx)
        )
    }
};