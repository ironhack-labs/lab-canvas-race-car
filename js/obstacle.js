class Obstacle {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = Math.floor(Math.random() * (this.ctx.canvas.width - 60) + 35) ;
        this.y = 0;
        this.h = 20;
        this.w = Math.floor(Math.random() * (70) + 70) ;

        this.vy = 5;
    }

    draw() {
        this.ctx.beginPath();
        
        this.ctx.rect(this.x, 
            this.y, 
            this.w, 
            this.h
        );
        
        this.ctx.fill();
    }

    move() {
        this.y += this.vy;
    }
}