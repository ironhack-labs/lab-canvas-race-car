class Car {
    constructor(ctx) {
        this._ctx = ctx

        this.x = this._ctx.canvas.width * 0.45
        this.y = this._ctx.canvas.height * 0.8

        this.w = 50
        this.h = 100

        this.vx = 0
        this.vy = 0

        this.ax = 0
        this.ay = 0

        this._img = new Image ()
        this._img.src = "./images/car.png"
    }

    draw() {
        this._ctx.drawImage(
            this._img,
            this.x,
            this.y,
            this.w,
            this.h
        )
    }
    move() {
        this.vx += this.ax
        this.vy += this.ay
    
        this.x += this.vx
        this.y += this.vy
    
        // if image out of canvas.... restart!
        if (this.x + this.w <= 0) {
          this.x = 0
        }
    }
}