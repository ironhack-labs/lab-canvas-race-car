const drawAll = {
    name: 'Basic forms drawing app',
    author: 'Gonzalo Martín',
    version: '1.0.0',
    license: undefined,
    description: 'My first canvas-game',
    canvasId: undefined,
    ctx: undefined,
    canvasSize: {
        w: 500,
        h: 700
    },
    carPosX: 500 / 2 - 75,
    carPosY: 700 - 250,
    init(id) {

        this.canvasId = id
        this.ctx = document.getElementById(this.canvasId).getContext('2d')
        
        this.draw()
    },
    draw() {

        this.obstacle = new obstacle(this.ctx)

        setInterval(() => {
            this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
            this.fail()
            this.drawBackground()
            this.drawCentralLine()
            this.drawLateralLines()
            this.drawCar('/images/car.png')
            this.setEventListeners()
            this.drawSprites()
            this.moveObstacle()
        }, 20)
    },
    drawBackground() {

        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(000, 000, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(40, 000, this.canvasSize.w - 80, this.canvasSize.h)
    },
    drawLateralLines() {

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(60, 0, 20, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(this.canvasSize.w - 80, 0, 20, this.canvasSize.h)

    },
    drawCentralLine() {
 
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.setLineDash([40, 80])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.closePath()
        this.ctx.stroke()

    },
    drawCar(name) {

        let carImg = new Image()
        carImg.src = name
        carImg.onload = () => this.ctx.drawImage(carImg, this.carPosX, this.carPosY, 150, 150)
    },
    moveCar(direction) {

        if(this.carPosX < this.canvasSize.w - 180 && direction > 0)
            this.carPosX += direction * 30
        if(this.carPosX > 33 && direction < 0)
            this.carPosX += direction * 30

    },
    setEventListeners() {

        document.onkeydown = e => {
            e.keyCode === 37 ? this.moveCar(-1) : null
            e.keyCode === 39 ? this.moveCar(+1) : null
        }
    },
    drawSprites() {

        this.obstacle.drawObstacle()
        this.obstacle.moveObstacle()
    },
    fail() {

        if (this.carPosY < this.obstacle.ctx.form.y + 20 && this.carPosX > this.obstacle.ctx.form.x && this.carPosX < this.obstacle.ctx.form.w) 
           alert("HAS CHOCADO!")
    }
} 

class obstacle {
    constructor(ctx) {
        this.ctx = ctx
        this.ctx.fillStyle = 'brown'
        this.ctx.form = {
            x: 20,
            y: 20,
            w: 150,
            h: 20
        }
    }
    drawObstacle() {

        this.ctx.fillStyle = 'brown'
        this.ctx.fillRect(this.ctx.form.x, this.ctx.form.y, this.ctx.form.w, this.ctx.form.h)
    }
    moveObstacle() {

        if (this.ctx.form.y === 680)
             this.ctx.form.y = 0
        this.ctx.form.y += 3
        this.drawObstacle()
    }

}