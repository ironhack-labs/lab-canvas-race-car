class Car {
    constructor(ctx, carPosX, carPosY, carWidth, carHeight, carImage) {

        this.ctx = ctx
        this.carPos = { x: carPosX, y: carPosY }
        this.carSize = { w: carWidth, h: carHeight }
        this.carImage = carImage
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.carImage}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        if (this.carPos.x <= 35) {
            this.carPos.x = 35
        }
        this.carPos.x -= 20


    }

    moveRight() {
        if (this.carPos.x >= 415) {
            this.carPos.x = 415
        }
        this.carPos.x += 20


    }


}