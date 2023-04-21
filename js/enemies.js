class Enemies {
    constructor(x,y,w,h,color,ctx) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.ctx = ctx;
        this.speedX = 0;
        this.speedY = 0;
    }

    draw(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    newPos(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    top(){
        return this.y;
    }
    bottom(){
        return this.y + this.h;
    }
    left(){
        return this.x;
    }
    right(){
        return this.x + this.w;
    }
}