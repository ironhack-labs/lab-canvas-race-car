class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.image = new Image();
        this.image.src = 'images/car.png'
        this.x = 210;
        this.y = 500;
        this.width = this.image.width / 2;
        this.height = this.image.height / 2;

        this.isReady = false;
        this.image.onload = () => {
            this.isReady = true;

        };

        this.speedX = 0.5;
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