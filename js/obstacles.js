class Obstacle {
    constructor(ctx, x, y, width, height) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;

        this.minLeft = 60;
        this.maxRight = this.ctx.canvas.width - 60;

        this.vy = -4;
    }

    draw() {
        this.ctx.save();
        this.ctx.fillStyle = 'brown';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.restore();
    }

    move() {
        this.y -= this.vy;
        // if (this.x >= 60 && this.x <= this.ctx.canvas.width ) {
        //     this.x = this.minLeft;
        // } else if (this.x >= this.maxRight) {
        //     this.x = this.maxRight;
        // }
    }

}