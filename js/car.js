class car {

    constructor(ctx, posX, posY, width, height, canvasSize) {

        this.ctx = ctx
        this.carPos = { x: posX, y: posY }
        this.carSize = { w: width, h: height }
        this.carImg = "images/car.png"
        this.imageInstance = undefined
        this.canvasSize = canvasSize

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.carImg
    }

    draw() {
        //this.move()
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {

        if (this.carPos.x < 0) {
            this.carPos.x = 0
        } else {
            this.carPos.x -= 20
        }
    }

    moveRight() {
        if (this.carPos.x > this.canvasSize.w - this.carSize.w) {
            this.carPos.x = 450
        } else {
            this.carPos.x += 20
        }
    }

}