class Background {
    constructor(ctx) {
      this.ctx = ctx;

      this.x = 0;
      this.y = 0;
      this.width = this.ctx.canvas.width;
      this.height = this.ctx.canvas.height;

      this.vy = 2;

      this.img = new Image()
      this.img.src = './images/road.png';

    }

    draw() {
      this.ctx.drawImage (
        this.img,
        this.x,
        this.y,
        this.width,
        this.height
      );

      
      this.ctx.drawImage (
        this.img,
        this.x,
        this.y - this.height,
        this.width,
        this.height
      );
    }

    move() {

      if (this.movements.up && !this.isJumping) {
        this.isJumping = true
        this.vy = -8
      } else if (this.isJumping) {
        this.vy += GRAVITY
      }

      // this.y += this.vy;

      // if (this.y - this.height >= 0) {
      //     this.y = 0;
      // }
    }
}