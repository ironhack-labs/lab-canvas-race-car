class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.image = new Image();
        this.image.src = 'images/car2.png'
        this.x = 100;
        this.y = 300;
        this.width = this.image.width / 3;
        this.height = this.image.height / 3;

        this.isReady = false;
        this.image.onload = () => {
            this.isReady = true;

        };

        this.speedX = 0;
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
        if (this.x < 0) {
            this.x = 0;
            this.speedX = 0;
          }

          if (this.x > this.ctx.canvas.width - this.width) {
            this.x = this.ctx.canvas.width - this.width;
            this.speedX = 0;
          }

          this.x += this.speedX;
    }
}