class Car {
    constructor(ctx,url){
        this._ctx = ctx
        this._img = new Image()
        this._img.src = url
        this._posX = 218
        this._posY = 600
        this._carWidth = 90
        this._carHeight = 120
        this._vel = 40
    }
    draw() {
        this._ctx.drawImage(this._img, this._posX, this._posY, this._carWidth, this._carHeight)
    }
    goLeft() {
        this._posX -= this._vel
    }

    goRight() {
        this._posX += this._vel
    }

}
