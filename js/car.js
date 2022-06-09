class Car {
    constructor(ctx, carPosX, carWidth, carHeight) {
        this.ctx = ctx
        this.carPos = { x: carPosX, y: 500 }
        this.carSize = { w: carWidth, h: carHeight }
        this.carImage = `images/car.png`
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

    moveLeft () {
        if (this.carPos.x <= 50) {
            this.carPos.x = 50
        }
        this.carPos.x -=10
    }

    moveRight() {
        if (this.carPos.x >= 300) {
            this.carPos.x = 300
        }
        this.carPos.x += 10
    }
}