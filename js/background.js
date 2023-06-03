class Background {
    constructor(ctx) {
        this.ctx = ctx;
        this.image = new Image();
        this.image.src = "./images/road2.jpg";
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
        this.x = 0;
        this.y = 0;
        
        this.isReady = false;
        this.image.onload = () => {
            this.isReady = true;
        }
    }
     draw() {
        if (this.isReady) {
            this.ctx.drawImage(
                this.image,
                this.x,
                this.y,
                this.width,
                this.height
            )
            this.ctx.drawImage(
                this.image,
                this.x,
                this.y - this.width,
                this.width,
                this.height
            )
        }
    }

    move() {
        this.y += 1;

        if (this.y > this.width) {
            this.y = 0;
        }
    }
}
