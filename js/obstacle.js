class Obstacle {
    constructor(ctx, x, y, width) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = 30;
        this.speed = 2;
    }

    draw() {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move() {
        this.y = this.y + this.speed;
    }
}


