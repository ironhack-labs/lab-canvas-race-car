class Obstacles {
    constructor(ctx){
        this.x = Math.random() * 500;
        this.y = 0;
        this.w = (Math.random() * 500) - this.x;
        this.h = 15;
        this.color = 'red';
        this.ctx = ctx;
        
    }

    draw(frame){
        const position = frame % 700
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
        this.y += 1;
        
    }
    
    
}