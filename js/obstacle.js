class Obstacle {
    constructor(ctx) {
        this.ctx = ctx
        this.w = Math.random() * (this.ctx.canvas.width / 2)
        this.h = 30

        this.x =  Math.random() * (this.ctx.canvas.width - 50 - this.w - 50) + 50
        this.y = 0

        this.vy = 5
        this.vx = 0
    }
    draw() {
        this.ctx.fillRect(
            this.x, 
            this.y, 
            this.w, 
            this.h);
    }

    move() {
        this.y += this.vy
    }
}