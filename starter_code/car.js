class Car {
    constructor(ctx, name) {
        this._ctx = ctx
        this._image = new Image()
        this._image.src = `images/${name}`
        this._posX = 190
        this._posY = window.innerHeight - 120
        this._vel = 18
    }
    draw() {
        this._ctx.drawImage(this._image, this._posX, this._posY, 60, 90)
    }
    goLeft() {
        this._posX >= 35 ? this._posX -= this._vel : null
    }
    goRight() {
        this._posX <= 280 ? this._posX += this._vel : null
    }
}
