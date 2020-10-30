class Obstacle {
    constructor(ctx, obsPosX, obsPosY, obsWidth, obsHeight, obsColor, speed) {
        this.ctx = ctx;
        this.obsPos = {
            x: obsPosX, // this has to be random
            y: obsPosY // always start from the top = 0
        };
        this.obsSize = {
            w: obsWidth, // random width
            h: obsHeight // same height
        };
        this.obsColor = obsColor; // same color
        this.speed = speed;
        this.init();
    }
    init() {
        this.ctx.fillStyle = this.obsColor;
        this.ctx.fillRect(this.obsPos.x, this.obsPos.y, this.obsWidth.w, this.obsHeight.h);
    }
    moveObstacle() {
        if (this.obsPos.x >= this.canvasSize.w - this.obsSize.w) {
            this.speed *= -1
        }

        if (this.obsPos.x < 0) {
            this.speed *= -1
        }
}