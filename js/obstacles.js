class Obstacle {
    constructor(ctx, x) {
        this.ctx = ctx;

        this.x = x;
        this.y = 0;
        
        this.width = Math.floor(Math.random() * (250 - 100 + 1) + 100);
        this.height = 30;

        this.vy = 4;
    }

    draw() {
        this.ctx.save();

        this.ctx.fillStyle = '#890000';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);

        this.ctx.restore();
    }

    move(){
        this.y += this.vy;
    }
}