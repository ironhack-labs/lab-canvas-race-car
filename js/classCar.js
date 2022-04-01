class Car {
    constructor(ctx, posX, posY, carWidth, carHeight) {
        this.ctx = ctx
        this.carPosition = { x: posX, y: posY }
        this.carSize = { width: carWidth, height: carHeight }
        this.carImage = undefined
        this.init()

    }

    init() {
        this.carImage = new Image()
        this.carImage.src = 'images/car.png'
    }
    drawCar() {
        this.ctx.drawImage(this.carImage, this.carPosition.x, this.carPosition.y, this.carSize.width, this.carSize.height)
    }


    moveLeft() {
        this.carPosition.x -= 20
    }

    moveRight() {
        this.carPosition.x += 20
    }
}
