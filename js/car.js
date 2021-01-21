class Car {
    constructor(ctx, canvasSize) {
        /** @type {CanvasRenderingContext2D} */

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.carWidth = 50
        this.carHeight = 100
        this.posX = (this.canvasSize.w - this.carWidth) / 2
        this.posY = this.canvasSize.h * 0.8

        this.imageName = 'car.png'
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.imageName}`

    }

    drawCar() {
        console.log(this.posX)
        this.ctx.drawImage(this.imageInstance, this.posX, this.posY, this.carWidth, this.carHeight)
    }

    moveCar(distance) {
        if (!this.hasReachedBorder(distance)) {
            this.posX += distance
        }
    }

    hasReachedBorder(distance) {
        return (this.posX + distance <= 0) || (this.posX + this.carWidth + distance >= this.canvasSize.w)
    }

    getCarWidth() {
        return this.carWidth
    }

    getLeftBorder() {
        return this.posX
    }
    getRightBorder() {
        return this.posX + this.carWidth
    }
    getTopBorder() {
        return this.posY
    }
}