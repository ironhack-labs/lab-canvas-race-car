class Car {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.CarPos = { x: 211, y: 550 }
        this.CarSize = { w: width * .30, h: width * .75 }
        this.CarImage = 'car.png'
        this.imageInstance = undefined
        this.height = height

        this.init()

    }

    init() {

        this.imageInstance = new Image()
        this.imageInstance.src = "images/car.png"
    }

    drawCar() {

        this.ctx.drawImage(this.imageInstance, this.CarPos.x, this.CarPos.y, this.CarSize.w, this.CarSize.h)

    }

    moveLeft() {
        this.CarPos.x -= 20
    }

    moveRight() {
        this.CarPos.x += 20
    }



}