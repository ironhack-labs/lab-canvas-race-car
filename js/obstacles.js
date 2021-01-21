class Obstacle {
    constructor (ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.x = this.randomNumber(1, 360)
        this.y = this.randomNumber(200, 650)

    }

    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.x, this.y, 140, 20)
    }

    move() {

    }
}

