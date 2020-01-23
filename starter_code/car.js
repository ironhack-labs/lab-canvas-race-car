class Car {

    constructor(ctx) {

        this._width = undefined
        this._height = undefined
        this._speed = 10
        this._xPos = 310
        this._yPos = 700.5
        this._ctx = ctx
        this.myImage = undefined

        this._rLimit = 570
        this._lLimit = 50
    }


    moveRight() {
        this._xPos < this._rLimit ? this._xPos += this._speed : null
    }

    moveLeft() {

        this._lLimit < this._xPos ? this._xPos -= this._speed : null
    }

    createCar() {
        this.myImage = new Image()


        this.myImage.src = "./images/car.png"

    }

    drawCar() {
        this._ctx.drawImage(this.myImage, this._xPos, this._yPos, 79, 169.5) // El evento .onload se dispara cuando la imagen ha sido completamente cargada

    }

}