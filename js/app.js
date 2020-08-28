const drawingRacerCar = {
    name: 'Race car game',
    author: 'Sergio Baltanás',
    version: '1.0.0',
    license: undefined,
    description: 'Obstacle course racing game',
    canvasId: undefined,
    ctx: undefined,
    car: null,
    obstacule: null,
    canvasSize: {
        w: 500,
        h: 700
    },
    init(id) {

        this.canvasId = id
        this.ctx = document.getElementById(this.canvasId).getContext('2d')
        this.roadDraw()
        this.drawCar('car.png')
        this.setEventListener()
        // this.drawObstacule()


        console.log(this.ctx)

    },
    roadDraw() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 500, 700)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, 400, 700)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(60, 0, 10, 700)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(430, 0, 10, 700)

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 3
        this.ctx.beginPath()
        this.ctx.setLineDash([20, 35])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.closePath()
        this.ctx.stroke()
    },
    drawCar(imageName) {

        this.car = new Car(this.ctx, this.canvasSize.w - 270, 580, 40, 100, imageName)
        setInterval(() => {
            this.clearScreen()
            this.roadDraw()
            this.car.draw()

        }, 50)
        // let car = new Image()
        // car.src = name
        //car.onload = () => this.ctx.drawImage(car, this.canvasSize.w - 270, 580, 40, 100)
    },
    setEventListener() {

        document.onkeydown = e => {
            e.keyCode === 37 ? this.car.move('left') : null
            e.keyCode === 39 ? this.car.move('right') : null
        }
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, 500, 700)
    },
    drawObstacule() {

        this.obstacule = new Obstacules(this.ctx, 40, 10, 50, 10)

    }


}


class Car {
    constructor(ctx, posX, posY, carW, carH, imageName) {
        this.carPos = {
            x: posX,
            y: posY
        }
        this.carSize = {
            w: carW,
            h: carH

        }
        this.imageCar = null
        this.imageName = imageName
        this.ctx = ctx
        this.draw()

    }
    draw() {
        this.imageCar = new Image()
        this.imageCar.src = `images/${this.imageName}`
        this.imageCar.onload = () => this.ctx.drawImage(this.imageCar, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }
    move(direction) {
        console.log(direction, this.carPos.x)
        direction === 'left' ? this.carPos.x -= 5 : null
        direction === 'right' ? this.carPos.x += 5 : null
    }



}

class Obstacules {
    constructor(ctx, oPosX, oPosY) {
        this.ObstaculesPos = {
            x: oPosX,
            y: oPosY
        }
        this.ctx = ctx

    }
    draw() {
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(this.ObstaculesPos.x, this.ObstaculesPos.y, this.ObstaculesPos.w, this.ObstaculesPos.h)
    }
}







// let prueba = document.getElementById('canvas')
// let ctx = prueba.getContext('2d')

// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();