class Car {
    constructor(ctx, posX, posY, vel) {
        this._ctx = ctx
        this._posX = posX
        this._posY = posY
        this._speed = 5

    }
    init() {
        this._car = new Image()
        this._car.src = "./images/car.png"
    }
    draw() {
        this.init()
        this._car = this._ctx.drawImage(this._car, this._posX, this._posY, 60, 90)

    }
    moveCar(dir) {
        dir === "right" && this._posX < 212 ? this._posX += this._speed : null
        dir === "left" && this._posX > 30 ? this._posX -= this._speed : null

    }
}