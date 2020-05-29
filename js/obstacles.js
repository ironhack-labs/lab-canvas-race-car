class Obstacles {
    constructor(ctx, x, width, speed, color) {
        this._ctx = ctx

        this.x = x
        this.y = 0
        this.width = width
        this.height = 50
        this.color = color

        this.vx = 0
        this.vy = 3 + speed
    }



    draw() {
        this._ctx.fillStyle = this.color
        this._ctx.fillRect(this.x, this.y, this.width, this.height)

    }


    move() {
        this.y += this.vy

    }

    collision (car) {

        const left = this.x
        const right = this.x + (this.width)
        const botton = this.y + this.height
        const top = this.y

        const carleft = car.x
        const carrigth = car.x + car.width
        const carrTop = car.y
        const carBotton = car.y + car.height

        if (carrigth >= left && carleft <= right && botton >= carrTop && top <= carBotton) {
            return false
         } else return true
    }


}