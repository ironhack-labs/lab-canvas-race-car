class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.image = new Image();
        this.image.src = 'images/halcon.png'
        this.x = 150;
        this.y = 450;
        this.width = this.image.width;
        this.height = this.image.height;

        this.isReady = false;
        this.image.onload = () => {
            this.isReady = true;

        };

        this.vx = 0;
    }

    draw() {
        if (this.isReady) {
            this.ctx.drawImage(
                this.image,
                this.x,
                this.y,
                this.width,
                this.height
            );
        }
    }

    move() {
            this.x += this.vx
        /*if (this.x + this.width > 450) {
            this.x = this.ctx.canvas.width - 450;
          }*/
          if (this.x <= 0) {
            this.x = 0;
          }

          if (this.x >= this.ctx.canvas.width - this.width) {
            this.x = this.ctx.canvas.width - this.width;
          }

    }
}