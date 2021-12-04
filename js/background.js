class Background {
    constructor(ctx){
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = '/images/road.png';
        this.img.isReady = false;
        this.img.onload = () => {
            this.img.isReady = true;
        }
        this.width = this.ctx.canvas.width
        this.height = this.ctx.canvas.height
        this.y = 0;
        this.vy = 4;
    }

    draw(){
        this.ctx.drawImage(
            this.img,
            0,
            this.y,
            this.width,
            this.height,
            )
        this.ctx.drawImage(
            this.img,
            0,
            this.y - this.height,
            this.width,
            this.height,
            )
    }

    move(){
        this.y += this.vy
        if (this.y >= this.height ){
            this.y = 0;
        }
    }
}