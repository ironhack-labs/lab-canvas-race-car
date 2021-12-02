class Obstacle {
    constructor(ctx, x, width, height) {
        this.ctx = ctx;
        this.x = x;
        this.y = 0;
        this.width = width;
        this.heigth = height;
    }

    draw() {
        this.ctx.save();

        this.ctx.fillStyle = '#870007';
        this.ctx.fillRect(
            this.x, 0, this.width, this.height
        );

        this.ctx.restore();
        console.log('drawn');
    }
}