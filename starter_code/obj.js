class obj {
    constructor(ctx, car) {
        this._ctx = ctx
        this._posX = Math.floor(Math.random() * 400)
        this._posY = 0
        this._width = Math.floor(Math.random() * (150 - 50)) + 50;
        this._heigth = 20
        this._obj = undefined
        this._vel = 10
        this._car = car
    }

    init() {
        this.draw()
    }
    draw() {
        this._ctx.fillStyle = "#000000"
        this._ctx.fillRect(this._posX, this._posY, this._width, this._heigth);
    }

    blockDown() {
        if ((this._posY + this._heigth >= this._car._posY && this._posX + this._width <= this._car._posX) || (this._posY + this._heigth >= this._car._posY && this._posX >= this._car._posX + this._car._width)) {
            alert("Te has chocado")
            console.log("IMPACTO")
        } else {
            this._posY += 10
            this.draw()
            console.log("continuo")

        }
    }
    clear() {
        this._ctx.clearRect(this._posX, this._posY, this._width, this._heigth)
    }

    // colision() {
    //     if (this._posY + this._width >= (this._car + 100) {

    //         this.draw()




    //     } else {

    //         this._posy == this._vel
    //         this.draw()
    //     }
    // }



}