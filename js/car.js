class Car {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.carPosition = { x: posX, y: posY }
        this.carSize = { w: width, h: height }

        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png'

    }

    drawCar() {
         this.ctx.drawImage(this.imageInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)
      
    }

    moveLeft() {
        this. carPosition.x -= 5
    }

    moveRight() {
        this.carPosition.x += 5
    }

}