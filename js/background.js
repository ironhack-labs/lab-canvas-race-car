class Background {
    constructor(ctx){
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = '/images/road.png';

        this.y = 0;
        this.vy = -4;
    }

    draw(){
        this.ctx.drawImage(
            this.img,
            0,
            0,
            this.ctx.canvas.width,
            this.ctx.canvas.height,
            )
    }

    move(){
        this.y += this.vy
        if(this.y + this.ctx.canvas.height <= 0 ){
            this.y = 0;
        }
    }
}