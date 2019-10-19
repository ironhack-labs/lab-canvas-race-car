//(Math.random() * ((this.ctx.canvas.width *0.8) - (this.ctx.canvas.width*0.3) + this.ctx.canvas.width*0.3)
class Obstacle {
    constructor(ctx){
        this.ctx = ctx;
        const randomWidth = Math.random() * ((this.ctx.canvas.width *0.6) - (this.ctx.canvas.width*0.3)) + this.ctx.canvas.width*0.3;

        this.x = 0;
        this.y = 0;
        this.w = randomWidth; 
        this.h = 20;

        this.vy = 3

    }

    draw() {
        this.ctx.fillRect(
            this.x,
            this.y,
            this.w,
            this.h
        )
    }

    move() {
        this.y += this.vy
    }

    collide(el) {
        const colX = el.x + el.w > this.x && el.x < this.x + this.w
        const colY = el.y + el.h > this.y && el.y < this.y + this.h
        return colX && colY
    }
}