class Car {
    constructor(ctx, posX, posY, height, width) {
        this.ctx = ctx
        this.carPos = { x: posX, y: posY }
        this.carSize = { h: height, w: width }
        this.carInstanced = undefined

        this.init()
    }
    init() {
        this.carInstanced = new Image()
        this.carInstanced.src = 'images/car.png'
    }
    drawCar() {
        this.ctx.drawImage(this.carInstanced, this.carPos.x, this.carPos.y, this.carSize.h, this.carSize.w)

    }
    moveLeft() {
        this.carPos.x -= 10
    }
    moveRight() {
        this.carPos.x += 10
    }

}