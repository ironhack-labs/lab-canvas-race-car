class Background {
    constructor(ctx) {
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = './images/road.png';
        
        this.x = 0; 
        this.y = 0;
        this.w = ctx.canvas.width;
        this.h = ctx.canvas.height;
        
        this.vy = 5;
    }

    draw() {
        this.ctx.drawImage(this.img,
            this.x, 
            this.y, 
            this.w, 
            this.h)

         this.ctx.drawImage(this.img,
            this.x, 
            this.y - this.h, 
            this.w, 
            this.h)           
    }

    move() {
        this.y += this.vy

        if (this.y - this.h >= 0) this.y = 0;
    }


}
