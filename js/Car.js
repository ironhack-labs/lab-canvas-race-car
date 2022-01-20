class Car {
    constructor(ctx, posX, posY, width, height, gameSize) {
        this.ctx = ctx
        this.carPos = { x: posX, y: posY }
        this.carSize = { w: width, h: height }
        this.carImagen = `car.png`
        this.imageInstance = undefined
        this.gameSize = gameSize

        this.init()
    }
    init() {
        this.carImg = new Image()
        this.carImg.src = `images/car.png`
    }
    draw() {
        this.ctx.drawImage(this.carImg, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    checkCollision() {
        if (this.carPos.x >= this.gamesize.w - this.gameSize.h || this.carPos.x <= 0) {
            this.turn()
        }
    }
    moveRight() {
        this.carPos.x += 4
    }
    moveLeft() {
        this.carPos.x -= 4
    }
    moveUp() {
        this.carPos.y -= 4
    }
    moveDown() {
        this.carPos.y += 4
    }
}