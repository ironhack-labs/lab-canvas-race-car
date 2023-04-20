class Obstacle {
    constructor(ctx, canvasSize) {
        console.log(canvasSize);
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.obstacle = {
            size: { w: 80, h: 80 },
            pos: { x: randomIntFromInterval(0, canvasSize.w), y: -30 }

        }
        this.init()
        this.draw()

    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/jager.png'
    }
    draw() {
        this.ctx.drawImage(this.imageInstance,
            this.obstacle.pos.x,
            this.obstacle.pos.y, this.obstacle.size.w, this.obstacle.size.h)
    }
    move() {
        this.obstacle.pos.y += 10
    }

}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}