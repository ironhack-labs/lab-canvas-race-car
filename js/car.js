class car {
    constructor(ctx, carPosX, carPosY, carWidth, carHeight) {
        this.ctx = ctx
        this.carPos = { x: carPosX, y: carPosY }
        this.carSize = { w: carWidth, h: carHeight }
        this.carImage = "images/car.png"
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.carImage
    }

    drawCar() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }
    moveLeft() {
        if (this.carPos.x <= 75) {
            this.carPos.x = 75
        }
        this.carPos.x -= 20


    }

    moveRight() {
        if (this.carPos.x >= 335) {
            this.carPos.x = 335
        }
        this.carPos.x += 20

    }
}