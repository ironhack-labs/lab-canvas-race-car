class Car {

    constructor(ctx, canvasSize, posX, posY, width, height) {

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.carPos = {
            x: posX,
            y: posY
        }
        this.carSize = {
            w: width,
            h: height
        }
        this.imageName = 'car.png'
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    move(distance) {
        this.carPos.x += distance
    }
}
