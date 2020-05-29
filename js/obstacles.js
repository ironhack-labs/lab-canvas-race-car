class Obstacle {

    constructor (ctx) {
        this.ctx = ctx

        this.w = Math.random() * (this.ctx.canvas.width / 2) + 30
        this.h = 10

        this.x = Math.random() * (this.ctx.canvas.width - 40 - this.w - 40) + 40
        this.y = 0   
        
        this.vy = 5
    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
        this._move()
    }

    _move() {
        this.y += this.vy
    }
} 