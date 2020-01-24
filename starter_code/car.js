class Car {
    constructor(ctx, posX, posY) {
        this._ctx = ctx
        this._posX = posX
        this._posY = posY
        this._car = undefined
        this._vel = 10
    }
    init() {
        this._car = new Image()
        this._car.src = './images/car.png'
        this._car.onload = () => this._ctx.drawImage(this._car, this._posX, this._posY, 60, 100)


        // Cuando cargue la imagen la dibujas en x e y 
    }
    draw() {
        this._ctx.drawImage(this._car, this._posX, this._posY, 60, 100)
    }
    moveLeft() {

        if (this._posX <= 50) {

            this.draw()

        } else {
            this._posX -= this._vel
            this.draw()
        }
    }

    moveRight() {



        if (this._posX >= 295) {

            this.draw()

        } else {

            this._posX += this._vel
            this.draw()
        }

    }

    clear() {
        this._ctx.clearRect(this._posX, this._posY, 60, 100)
    }


}