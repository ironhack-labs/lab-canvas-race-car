class Obstacle {
    constructor(ctx) {
        this.ctx = ctx
        this.posX = (Math.floor(Math.random() * (350 - 40) + 40))
        this.posY = 0

        this.width = (Math.floor(Math.random() * (400 - 300) + 300))
        this.height = 20

        this.velY = 5

    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
        this.move()
    }

    move() {
        this.posY += this.velY
    }
}