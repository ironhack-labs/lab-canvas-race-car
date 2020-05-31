class Obstacle {
    constructor(ctx) {
        this._ctx = ctx

        this.w = Math.random() * (this._ctx.canvas.width / 2) + 60
        this.h = 20

        this.x =  Math.random() * (this._ctx.canvas.width - 40 - this.w - 40) + 40
        this.y = 0

        this.vy = 8
        this.vx = 0

        
    }

    draw() {
        this._ctx.fillRect(this.x, this.y, this.w, this.h);
        this._ctx.fillStyle = "orange"
    }

    move() {
        this.y += this.vy
    }


}