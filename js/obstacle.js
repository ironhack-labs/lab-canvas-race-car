class Obstacle {
    constructor(ctx, x, y, width, vy){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = 40;

        this.vy = vy;
    }

    draw() {
        this.ctx.save()
        this.ctx.fillStyle = "rgb(137, 0, 0)";
        this.ctx.fillRect(this.x, this.y, this.width, this.height) 
        this.ctx.restore()
    }

    move() {
        this.y += this.vy
    }
}