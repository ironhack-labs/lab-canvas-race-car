class Obstacle {
    constructor(ctx, canvasSize, posY) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.posY = posY
        this.obstacle = {
            size: { w: 180, h: 30 },
            pos: { x: 0, y: posY }

        }
        this.init()
        this.draw()

    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './img/jager.png'
    }
    draw() {

        this.ctx.drawImage(this.imageInstance,
            this.obstacle.pos.x,
            this.obstacle.pos.y)
    }
    move() {
        this.obstacle.pos.y++
    }
}