class Background {
    constructor(ctx) {
        this.ctx = ctx;
        this.image = new Image();
        this.image.src = "D:/gabriela/ironhack/module1/week5/lab-canvas-race-car/images/road2.png";
        this.x = 0;
        this.y = 0;
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;

        this.image.onload = () => {
            this.isReady = true;
        }
    }

    draw() {
        if(this.isReady){
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
                this.y - this.height,
                this.width,
                this.height 
            )
        }
    }

    move() {

        this.y += 1;

        if (this.y > this.height) {
            this.y = 0;
        }
    }
}
