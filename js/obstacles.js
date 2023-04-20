class Obstacle {

    constructor(ctx, canvasSize) {

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.obstacleSpecs = {
            size: { w: 100, h: 15 },
            pos: { x: Math.random() * 400, y: 0 },
            speed: 10,
            collision: false
        }
    }


    draw() {


        if (this.obstacleSpecs.collision) {
            this.ctx.fillStyle = 'purple'
        } else {
            this.ctx.fillStyle = 'brown'
        }


        this.ctx.fillRect(this.obstacleSpecs.pos.x, this.obstacleSpecs.pos.y, this.obstacleSpecs.size.w, this.obstacleSpecs.size.h)

        this.move()
    }

    move() {

        this.obstacleSpecs.pos.y += this.obstacleSpecs.speed
    }



}