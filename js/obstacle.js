class Obstacle {
    constructor(ctx, left) {
        this.ctx = ctx
        this.distance = Math.random() * 300 + 150
        this.x = left ? 0 : this.ctx.canvas.width - this.distance
        this.y = 0
        this.w = this.ctx.canvas.width - this.distance
        this.h = 50
        this.color = 'red'
        this.ay = 0.1
    }

    draw() {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
    }
    move() {
        this.y += this.ay
        this.y += 10
        this.ay += 0.3
        console.log(this.y, this.ay)
    }
    collide(player) {
        const collideX = player.x + player.w > this.x && player.x < this.x + this.w
        const collideY = player.y < this.y + this.h && player.y + player.h > this.y

        return collideX && collideY
    }
}
