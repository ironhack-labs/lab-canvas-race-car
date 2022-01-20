class Obstacle {
    constructor(ctx, posx, posy, width, gameSize) {
        this.ctx = ctx
        this.obstaclePos = { x: posx, y: posy }
        this.obstacleSize = { w: width, h: 20 }
        this.obstacleSpeed = 10
        this.imagenInstance = undefined
        this.gameSize = gameSize
        this.init()
    }
    init() {

    }
    move() {
        this.obstaclePos.y += this.obstacleSpeed // o dar velocidad 
    }
    rectangleDrawO() {

        this.ctx.fillStyle = `green`
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)

    }
}