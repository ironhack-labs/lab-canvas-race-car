class Obstacle {
    constructor(ctx, x, y, width, height) {
        this.ctx = ctx;
		this.x = x;
		this.y = y;
        this.vy = 5;
		this.width = width;
        this.height = height;
    }

    draw () {
        game.ctx.fillStyle = "#870107";
        game.ctx.fillRect(this.x, this.y, this.width, this.height);    
    }

    move () {
        this.y += this.vy;
    }
}