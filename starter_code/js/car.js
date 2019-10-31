class Car {
    constructor(ctx, url) {
        this._ctx = ctx
        this._image = new Image()
        this._image.src = url
        this._posX = 170
        this._posY = 700
        this._width = 60
        this._height = 60
        this._vel = 30
    }

    drawCar() {
        this._ctx.drawImage(this._image, this._posX, this._posY, this._width, this._height)
    }

    goLeft() {
        this._posX >= 30 ? this._posX -= this._vel : null
    }

    goRight() {
        this._posX <= 320 ? this._posX += this._vel : null
    }
}