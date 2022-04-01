class Obstacle {
    
    constructor(ctx, gameSize, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.gameSize = gameSize
        this.ObstaclePos = { x: (Math.random() * (this.gameSize.w - 100) + 100), y: 0}
        this.ObstacleSize = { w: (Math.random() * (300 - 100) * 100), h: 100}
        this.speed = speed
        

        this.init()
    }

    init() {

    }

    draw(){
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.ObstaclePos.x, this.ObstaclePos.y, this.ObstacleSize.w, this.ObstacleSize.y)
    }

    move(){
        this.ObstaclePos.y += 20
    }
    
}