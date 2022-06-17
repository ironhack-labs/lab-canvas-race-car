class Obstacle {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = Math.random()*300+ 50;
        this.y = 0;
        this.w = Math.random()*170 + 100;
        this.h = 20;
        this.vy = 2;
        this.color="red";
        this.score=0;

    }
    move() {
        this.y += this.vy;
    }

    draw() {
        console.log("entro")
        /*
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h
        )
        */

        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
        this.ctx.closePath();

    }
    collide(el){
        const collideX = el.x + el.w > this.x && el.x < this.x + this.w;
        const collideY = el.y < this.y + this.h && el.y + el.h > this.y;

        return collideX && collideY
    }
    posision(){
        if( this.y >=0){
            this.score++;
        }
    }

}