class Car {

    constructor(ctx, gameSize, posX, posY, width, heigth) {
        this.ctx = ctx
        this.carPos = { x: posX, y: posY }
        this.carSize = { w: width, h: heigth }
        this.gameSize = gameSize
        this.imagenInstance = undefined
        this.init()
    }

    init() {
        this.imagenInstance = new Image()
        this.imagenInstance.src = 'images/car.png'
    }

    moveLeft() {
        this.carPos.x -= 10
    }

    moveRight() {
        this.carPos.x += 10
    }

    draw() {
        this.ctx.drawImage(this.imagenInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }
}