class Obstacle {
    constructor(ctx, obstPosX, obstPosY, width, height, gameSize, fallSpeed) {
        this.obstPos = { x: obstPosX, y: obstPosY }
        this.ctx = ctx
        this.oSize = { w: width, h: height }
        this.fallSpeed = fallSpeed
        this.gameSize = gameSize
    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.obstPos.x, this.obstPos.y, this.oSize.w, this.oSize.h)

    }
    move() {
        this.obstPos.y += this.fallSpeed
    }
}