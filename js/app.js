const carGame = {

    name: 'Fast and Furios',
    description: 'Car game for lab',
    version: '1.0.0',
    author: 'Kevin Santana',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: { w: undefined, h: undefined },
    car: undefined,
    obstacles: [],
    frameCounter: 0,

    init() {
        this.setContext()
        this.setDimensions()
        this.drawMap()
        /////////////////

        this.createCar()
        this.createObstacle()
        this.start()
        this.setListeners()

        console.log({ loquequierover: document })

    },
    start() {

        //  this.drawAll()
        setInterval(() => {
            this.frameCounter++
            console.log(this.frameCounter)
            this.clearScreen()
            this.drawAll()

            if (this.frameCounter % 40 === 0) {
                console.log('OBSTÁCULO VAAAA')
                this.createObstacle()
                obstacles.push(this.createObstacle())

            }

        }, 70)

    },
    setContext() {
        this.canvasDOM = document.querySelector('#canvas')
        this.ctx = this.canvasDOM.getContext('2d')


    },
    setDimensions() {
        this.canvasSize.w = 500
        this.canvasSize.h = 700
        this.canvasDOM.setAttribute('width', this.canvasSize.w)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)

    },


    setListeners() {
        // const keyPressed = {
        //     left: true,
        //     right: true
        // }

        // if(keyPressed.right) this.car.moveRight()

        document.onkeyup = e => {
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
        }
    },
    drawMap() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 500, 700)
        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(50, 0, 400, 700)
        /////////////////////////////////////////
        this.ctx.strokeStyle = 'white'

        this.ctx.beginPath()
        this.ctx.setLineDash([])
        this.ctx.moveTo(75, 0)
        this.ctx.lineTo(75, 700)
        this.ctx.lineWidth = 20
        this.ctx.stroke()
        this.ctx.closePath()
        /////////////////////////////////////////

        this.ctx.strokeStyle = 'white'

        this.ctx.beginPath()
        this.ctx.setLineDash([])
        this.ctx.moveTo(425, 0)
        this.ctx.lineTo(425, 700)
        this.ctx.lineWidth = 20
        this.ctx.stroke()
        this.ctx.closePath()
        ////////////////////////////////////
        this.ctx.lineWidth = 15
        this.ctx.beginPath()
        this.ctx.setLineDash([60, 30])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
        this.ctx.closePath()




        //this.ctx.fillStyle = '#d2d2d2'
        //this.ctx.fillRect(this.canvasSize.w / 2 - 20, this.canvasSize.h / 2 - 250, 40, 500)
    },

    createCar() {
        this.car = new Car(this.ctx, 200, 450, 120, 200)
    },

    createObstacle() {
        /////
        this.obstacle = new Obstacle(this.ctx, Math.random() * (0 - 400) + 400, 50, Math.random() * (50 - 200) + 200, 30)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll() {

        this.drawMap()
        this.car.draw()
        this.obstacle.draw()
    },



}

class Car {
    constructor(ctx, carPosx, carPosY, carWidth, carHeight) {
        this.ctx = ctx
        this.carPos = { x: carPosx, y: carPosY }
        this.carSize = { w: carWidth, h: carHeight }

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/car2.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)

    }
    moveLeft() {
        this.carPos.x -= 10
    }

    moveRight() {
        this.carPos.x += 10
    }

}


class Obstacle {
    constructor(ctx, obstPosx, obstPosY, obstWidth, obstHeight) {
        this.ctx = ctx
        this.obstPos = { x: obstPosx, y: obstPosY }
        this.obstSize = { w: obstWidth, h: obstHeight }

        //this.init()
    }

    // init() {
    //     //  this.imageInstance = new Image()
    //     // this.imageInstance.src = './images/car2.png'
    // }

    draw() {
        // this.ctx.drawImage(this.imageInstance, this.obstPosx.x, this.carPos.y, this.carSize.w, this.carSize.h)
        //foreach de del
        this.ctx.fillStyle = 'brown'
        this.ctx.fillRect(this.obstPos.x, this.obstPos.y, this.obstSize.w, this.obstSize.h)

    }


}