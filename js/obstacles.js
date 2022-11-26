class Obstacle {
    constructor(ctx) {
        this.ctx = ctx
        this.height = 20
        this.width = Math.floor(Math.random() * (200 - 50 + 1) + 50)
        this.x = Math.floor(Math.random() * ((this.ctx.canvas.width - 70 - this.width) - 75 + 1) + 75)
        this.y = - this.height
        this.speed = 10
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.closePath()
    }

    move() {
        this.y += this.speed
    }

    isColliding(obj) {
        return this.x < obj.x + obj.width
		 && this.x + this.width > obj.x
		 && this.y < obj.y + obj.width
		 && this.y + this.height > obj.y;
    }
}