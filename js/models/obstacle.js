class Obstacle {
    constructor(ctx) {
        this.ctx = ctx; 
        this.x = Math.floor() * (this.ctx.canvas.width-this.w); 
        this.y = 0; 
        this.w = Math.floor(Math.random() * 200 + 100);
        
        
        this.vy = 2;
    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(
            this.x, 
            this.y, 
            this.w, 
            this.h)
    }
}