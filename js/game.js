const roadApp = {
    name: 'HTML5 Canvas application',
    description: 'App for Canvas basic forms',
    author: 'Achraf Arazzouk',
    license: undefined,
    version: '1.0.0',
    canvasDom: undefined,
    ctx: undefined,
    car: undefined,
    obs: [],
    frames: 0,

    init() {
        this.canvasDom = document.querySelector('#canvas')
        this.ctx = this.canvasDom.getContext('2d')
        this.createCar()
        this.setListener()
        this.creationGame()
        this.drawAll()
    },

    creationGame() {
        this.createBorderLines()
        this.fillRoad()
        this.createBorderRoadlines()
        this.createCenterLines()

    },

    createBorderLines() {


        this.ctx.strokeStyle = "green";
        this.ctx.lineWidth = 100

        this.ctx.beginPath()
        this.ctx.moveTo(0, 0)
        this.ctx.lineTo(0, 700)
        this.ctx.stroke()
        this.ctx.closePath()



        this.ctx.beginPath()
        this.ctx.moveTo(500, 0)
        this.ctx.lineTo(500, 700)
        this.ctx.stroke()
        this.ctx.closePath()


    },

    createBorderRoadlines() {
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 20

        this.ctx.beginPath()
        this.ctx.moveTo(80, 0)
        this.ctx.lineTo(80, 700)
        this.ctx.stroke()
        this.ctx.closePath()



        this.ctx.beginPath()
        this.ctx.moveTo(420, 0)
        this.ctx.lineTo(420, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    createCenterLines() {
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 10

        this.ctx.beginPath()
        this.ctx.setLineDash([20, 20])

        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.setLineDash([])

    },

    fillRoad() {
        this.ctx.fillStyle = '#AFAFAF';
        this.ctx.fillRect(50, 0, 400, 700)
    },

    createCar() {
        this.car = new Car(this.ctx, 225, 550, 50, 100, 500, 700)
    },

    drawAll() {



        setInterval(() => {
            this.frames++
            console.log(this.frames)
            this.frames % 10 === 0 ? this.obs.push(this.createObs()) : null
            this.clearScreen()
            this.creationGame()
            this.car.draw()

            this.obs.forEach(e => {
                e.draw()
            })

        }, 500)
        console.log(this.car)
    },

    setListener() {
        document.onkeyup = e => {
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
        }
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasDom.width, this.canvasDom.height)

    },

    createObs() {
        if (this.obs.length > 0) {
            this.obs.forEach(e => {
                e.obstaclePos.y += 70
            })
        }

        let width = 300 * Math.random()

        const obstacle = new Obstacle(
            this.ctx,
            width
        )

        //obstacle.draw()

        return obstacle
    }




}

class Car {

    constructor(ctx, posX, posY, carWidth, carHeight, canvasWidth, canvasHeight) {
        this.ctx = ctx;
        this.carPos = { x: posX, y: posY }
        this.carSize = { w: carWidth, h: carHeight }
        this.canvasSize = { w: canvasWidth, h: canvasHeight }


        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/car.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        console.log(this.canvasSize.w / 2 - 145, this.carPos.x)
        if (this.carPos.x >= this.canvasSize.w / 2 - 145)
            this.carPos.x -= 10
    }

    moveRight() {
        console.log(this.canvasSize.w / 2 + 110, this.carPos.x)
        if (this.carPos.x <= this.canvasSize.w / 2 + 110) {
            this.carPos.x += 10
        }
    }
}


class Obstacle {
    constructor(ctx, obstacleWidth) {
        this.ctx = ctx;
        this.obstaclePos = { x: 150, y: 40 }
        this.obstacleSize = { w: obstacleWidth }
    }

    draw() {
        this.ctx.strokeStyle = "red";
        this.ctx.lineWidth = 30

        this.ctx.beginPath()
        this.ctx.moveTo(this.obstaclePos.x, this.obstaclePos.y)
        this.ctx.lineTo(50 + this.obstacleSize.w, this.obstaclePos.y)
        this.ctx.stroke()
        this.ctx.closePath()
    }
}



