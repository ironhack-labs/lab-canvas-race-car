class Obstacles {
    constructor(ctx, size, speed) {
        this.ctx = ctx;
        this.obsPos = { 
            x: Math.floor(Math.random() * (400 - 20)) + 45, 
            y: 100 
        }
        this.obsSize = { 
            w: Math.floor(Math.random() * (400 - 20)) + 50,
            h: 45
        }
        this.size = size;
        this.speed = speed;
    }

    draw() {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.obsPos.x, this.obsPos.y, this.obsSize.w, 45);
    }

    move() {
        this.obsPos.y += 5;
    }
}