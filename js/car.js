class Car {
    constructor(ctx, carPosX, carPosY, carWidth, carHeight, canvasSize) {

        this.ctx = ctx
        this.carPosition = { x: carPosX, y: carPosY }
        this.carSize = { w: carWidth, h: carHeight }
        this.carImage = './images/car.png'
        this.imageInstance = undefined
        this.canvasSize = canvasSize

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.carImage
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        if (this.carPosition.x < 0) this.carPosition.x = -35
        else this.carPosition.x -= 20
        console.log('left')
    }

    moveRight() {
        if (this.carPosition.x >= this.canvasSize.w - 35) this.carPosition.x = this.canvasSize.w - 35
        else this.carPosition.x += 20
        console.log('right')
    }
}