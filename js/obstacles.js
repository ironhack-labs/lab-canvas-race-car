class Obstacle {
    constructor(ctx, x, width) {
        this.ctx = ctx;

        this.x = x;
        this.y = 0;
        
        this.width = width;
        this.height = 30;
    }

    draw() {
        this.ctx.save();

        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);

        this.ctx.restore();
    }
}