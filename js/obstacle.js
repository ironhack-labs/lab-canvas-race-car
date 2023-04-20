class Obstacle {
    constructor(ctx, canvasSize, posY, size, speed) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.imageInstance = undefined

        this.obstacleSpecs = {
            size: { w: size, h: size },
            pos: { x: 0, y: posY },
            speed: speed
        }
        this.init() 

    }
    init(){
        this.imageInstance = new Image(),
        this.imageInstance.src = "./images/abuela.png"
        this.draw()
    }
    draw() {
        this.move()

        this.ctx.drawImage(
            this.imageInstance,
            this.obstacleSpecs.pos.x,
            this.obstacleSpecs.pos.x,
            this.obstacleSpecs.size.w,
            this.obstacleSpecs.size.h,

        )
    }

    move() {
        this.obstacleSpecs.pos.y += this.obstacleSpecs.speed
    }
}