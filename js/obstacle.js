class Obstacle {
    constructor (ctx, width, height, dimensionCanvas, position, speed){
        this.ctx = ctx
        this.obstacleSize = {
            w: width,
            h: height,
        }
        this.dimensionCanvas = dimensionCanvas
        this.obstaclePosition = {
            x: position,
            y: 50
        }
        this.speed = speed
    }
    draw(){
        this.ctx.fillStyle = `#912932`,
        this.ctx.fillRect(this.obstaclePosition.x, this.obstaclePosition.y, this.obstacleSize.w, this.obstacleSize.h)
        this.move();
    }
    move(){
        this.obstaclePosition.y += this.speed;
    }
}