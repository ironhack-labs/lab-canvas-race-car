class Car {
    constructor(ctx, canvasSize, posX, posY) {
        /** @type {CanvasRenderingContext2D} */

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.posX = posX
        this.posY = posY

        this.imageName = 'car.png'
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.imageName}`
        this.carWidth = 50
        this.carHeight = 100
    }

    drawCar() {
        this.ctx.drawImage(this.imageInstance, this.posX - this.carWidth / 2, this.posY - this.carHeight / 2, this.carWidth, this.carHeight)
    }

    moveCar(distance) {
        if (!this.hasReachedBorder(distance)) {
            this.posX += distance
        }
    }

    hasReachedBorder(distance) {
        return (this.posX - this.carWidth / 2 + distance <= 0) || (this.posX + this.carWidth / 2 + distance >= this.canvasSize.w)
    }

    getCarWidth() {
        return this.carWidth
    }
}