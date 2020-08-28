class Car {

    constructor(ctx, canvas) {

        this.ctx = ctx
        this.size = {

            width: 60,
            height: 100

        }

        this.bottomMargin = 20
        this.position = {

            x: canvas.canvasSize.width / 2 - this.size.width / 2,
            y: canvas.canvasSize.height - (this.size.height + this.bottomMargin)

        }

        this.isMoving = {

            left: false,
            right: false

        }

        this.imageInstance = undefined

        this.initialSpeed = 10
        this.currentSpeed = this.initialSpeed

        this.init()

    }

    init() {

        this.imageInstance = new Image()
        this.imageInstance.src = "images/car.png"

    }

    drawCar() {


        this.ctx.drawImage(this.imageInstance, this.position.x, this.position.y, this.size.width, this.size.height)

        // Box for testing purpose
        // this.ctx.fillStyle = 'black'
        // this.ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)

    }

    moveCar(direction) {

        this.currentSpeed = this.initialSpeed

        if (direction === 'left') {

            this.currentSpeed *= -1

        }

        this.position.x += this.currentSpeed

    }

    stopCar() {



    }

}

class Wall {

    constructor(ctx, canvas) {

        this.ctx = ctx
        this.canvas = canvas

        this.position = {

            x: undefined,
            y: 0

        }

        this.minPos = 70
        this.maxPos = undefined

        this.size = {

            width: undefined,
            height: 30

        }

        this.maxWidth = 200
        this.minWidth = 70

        this.color = 'darkRed'

        this.speed = 7

        this.init()

    }

    init() {

        this.setInitialValues()

        this.drawWall()

        this.moveWall()

    }

    setInitialValues() {

        this.size.width = Math.floor(Math.random() * (this.maxWidth - this.minWidth)) + this.minWidth

        this.maxPos = this.canvas.canvasSize.width - this.size.width - this.minPos

        this.position.x = Math.floor(Math.random() * (this.maxPos - this.minPos)) + this.minPos

    }

    drawWall() {

        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)

    }

    moveWall() {

        setInterval(() => {

            this.position.y += this.speed

        }, 30);
    }

}