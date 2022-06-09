class Car {

    constructor(ctx, carPosX, carPosY, carWidth, carHeight, carImage) {

        this.ctx = ctx
        this.carPos = { x: carPosX, y: carPosY }
        this.carSize = { w: carWidth, h: carHeight }
        this.carImage = 'images/car.png'
        this.imageInstance = undefined

        this.init()
    }

    init() {

        this.imageInstance = new Image()
        this.imageInstance.src = this.carImage

    }

    draw() {

        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)

    }

    moveLeft() {
        this.carPos.x -= 20
    }

    moveRight() {
        this.carPos.x += 20
    }

}
