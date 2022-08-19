class Obstacles {
    constructor (ctx, posX, posY, width, height, speed, color) {
        this.ctx = ctx
        this.speed = speed
        this.obstaclePos = { x: posX, y: posY }
        this.obstacleSize = { w: width, h: height }
        this.color = color
        this.init()
    }
    init() {
        this.draw()

        
    }

    draw() {
        this.move();
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h);
    }

    move() {

        this.obstaclePos.y += this.speed
    }
    deleteObstacle() {
        this.obstaclePos.slice()                        
    }

}