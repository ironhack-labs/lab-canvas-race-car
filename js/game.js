const carGame = {
    name: 'Island Racer',
    description: 'Canvas app for car game',
    version: '1.0.0',
    author: 'Pepe',
    ctx: undefined,
    canvasDom: undefined,
    canvasSize: { w: 500, h: 700 },
    road: undefined,
    car: undefined,
    obstacles: undefined,
    init() {
        this.context()
        this.dimensions()
        this.start()
        this.car = new Car(this.ctx)
        this.obstacles = new Obstacles(ctx, PosX, obsWidth, obsHeith, obsSpeed)
    },

    context() {
        this.canvasDom = document.querySelector('canvas')
        this.ctx = this.canvasDom.getContext('2d')

    },

    dimensions() {
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },

    carMovement() {
        document.onkeyup = e => {
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
        }
    },
    obsMovement() {
        this.obstacles.forEach(elm => elm.moveDown())
    },

    start() {
        this.createRoad()
        this.createCar()
        this.createObstacles

        setInterval(() => {
            this.clearScreen()
            this.drawAll()
            this.carMovement()
            this.obsMovement()

        }, 50)


    },
    createRoad() {
        this.road = new Road(this.ctx)
    },

    createCar() {
        this.car = new Car(this.ctx)
        console.log('this car')
    },
    createObstacles() {

        this.Obstacles1 = new Obstacles(ctx, 50, 100, 40, 1)
        this.Obstacles2 = new Obstacles(ctx, 70, 150, 40, 1)
        this.Obstacles3 = new Obstacles(ctx, 40, 200, 40, 1)
        this.Obstacles4 = new Obstacles(ctx, 300, 40, 40, 1)
        this.Obstacles5 = new Obstacles(ctx, 250, 50, 40, 1)
        this.Obstacles6 = new Obstacles(ctx, 125, 90, 40, 1)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)

    },
    drawAll() {
        this.car.draw()
        this.obstacles.draw()
        this.road.drawRoad()
        this.road.drawLines()
    },

}
class Road {
    constructor(ctx) {
        this.ctx = ctx
        this.init()
    }

    init() {
        this.drawRoad()
        this.drawLines()
    }

    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 500, 700)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(25, 0, 450, 700)

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 15
        this.ctx.beginPath()
        this.ctx.moveTo(50, 0)
        this.ctx.lineTo(50, 700)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.moveTo(450, 0)
        this.ctx.lineTo(450, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    }
    drawLines() {

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.beginPath()
        this.ctx.setLineDash([40, 15])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    }
}
class Car {
    constructor(ctx) {
        this.ctx = ctx
        this.carPos = { x: 250, y: 660 }
        this.carSizes = { w: 30, h: 40 }
        this.ImageInstance = undefined
        this.init()
    }
    init() {
        this.ImageInstance = new Image()
        this.ImageInstance.src = './images/car.png'

    }
    draw() {
        this.ctx.drawImage(this.ImageInstance, this.carPos.x, this.carPos.y, this.carSizes.w, this.carSizes.h)

    }
    moveLeft() {
        this.carPos.x -= 10

    }

    moveRight() {
        this.carPos.x += 10
    }
}
class Obstacles {
    constructor(ctx, PosX, obsWidth, obsHeith, obsSpeed) {
        this.ctx = ctx
        this.obsPos = { x: PosX, y: 0 }
        this.obsSize = { w: obsWidth, h: obsHeith }
        this.init()
        this.obsSpeed = obsSpeed
    }
    init() {
        this.draw()
    }
    draw() {
        this.ctx.fillStyle = 'brown'
        this.ctx.fillRect(this.obsPos.x, 0, this.obsSize.w, this.obsSize.h)
    }
    moveDown() {
        if (this.obsPos.y >= this.canvasSize.w - this.obsSize.w) {

            console.log('funciona')
        }
        this.obsPos.y += this.obsSpeed
    }
}