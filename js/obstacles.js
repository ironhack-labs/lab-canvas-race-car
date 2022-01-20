class Obstacle {
    constructor(ctx, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.obstPos = { x: posX, y: posY }
        this.obstSize = { w: width, h: height }
        this.speed = speed
    }

    draw() {
         this.ctx.fillStyle = "red";
         this.ctx.fillRect(
           this.obstPos.x,
           this.obstPos.y,
           this.obstSize.w,
           this.obstSize.h
         );
    }

    move() {
        this.obstPos.y += this.speed
    }


}