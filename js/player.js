class Player {
    constructor(ctx) {
      this.ctx = ctx;
      this.image = new Image();
      this.image.src = 'images/car.png';
      this.width = 35;
      this.height = this.width * this.image.height / this.image.width;
      this.image.onload = () => {
        this.isReady = true;
      };
    }
  
    draw() {
      if (this.isReady) {
        this.ctx.drawImage(
          this.image,
          232,
          600,
          this.width,
          this.height
        );
      }
    }
  }