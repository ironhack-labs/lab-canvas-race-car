class Blocking {
    constructor (ctx) {
        this.ctx = ctx;
        
       
        this.dist = Math.random() * 100 + 300;
        this.x = Math.random() > 0.9 ? 0 - this.dist : this.dist;
        
        this.h = Math.random() * 40 + 50; 
        
        this.y = 0;
        this.w = this.ctx.canvas.width;


        this.vy = 1;
    }

    draw(){
        this.ctx.fillRect (
            this.x,
            this.y,
            this.w,
            this.h 
        )

        this.ctx.fillStyle = "#7A0707";
    }

    move() {
        this.y += this.vy
    }

    isVisible() {
        return (
            this.y < this.ctx.canvas.height &&
            this.y > 0 - this.h
        )
    }
}