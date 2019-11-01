class Car {
    constructor(ctx, name) {
        this._ctx = ctx
        this._image = new Image()
        this._image.src = `images/${name}`
        this._posX = 80
        this._posY = 550
        this._vel = 20
    }
    draw() {
        this._ctx.drawImage(this._image, this._posX, this._posY, 100, 200)
    }
    goLeft() {
        this._posX >= 70 ? this._posX -= this._vel : null
    }
    goRight() {
        this._posX <= 403 ? this._posX += this._vel : null
    }
}