class Car {

    constructor(ctx, wSize, ) {
        this._ctx = ctx
        this._posX = (wSize / 2) - 29
        this._posY = 350
        this._cWidth = 58
        this._cHeigth = 100
        this._vel = 20
        this._car = undefined


    }

    init() {
        this._car = new Image()
        this._car.src = './images/car.png'

        this._car.width = this._cWidth
        this._car.height = this._cHeigth

    }
    drawCar() {

        this._ctx.drawImage(this._car, this._posX, this._posY, this._cWidth, this._cHeigth)
    }

    move(dir) {

        if (this._posX >= 30 && this._posX <= 312) {
            dir === 'right' ? this._posX += this._vel : null
            dir === 'left' ? this._posX -= this._vel : null
        } else if (this._posX > 312) {
            this._posX = 312
        } else if (this._posX < 30) {
            this._posX = 30
        }
        // this._ctx.drawImage(this._car, this._posX)

    }





}