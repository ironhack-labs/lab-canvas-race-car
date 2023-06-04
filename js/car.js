class Car {
    constructor(ctx) {
      this.ctx = ctx;
      this.image = new Image();
      this.image.src = './images/car.png';
      this.width = 0;
      this.height = 100;
      this.speedX = 0;
      this.speedY = 0;
      this.x = 225; 
      this.y = 580; 
  
      this.image.onload = () => {
        this.width = this.height * this.image.width / this.image.height;
        this.isReady = true;
      };
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
      this.x += this.speedX;
      this.y += this.speedY;
  
      if (this.x <= 0) {
        this.x = 0;
      }
  
      if (this.x >= this.ctx.canvas.width - this.width) {
        this.x = this.ctx.canvas.width - this.width;
      }
  
      if (this.y <= 0) {
        this.y = 0;
      }
  
      if (this.y >= this.ctx.canvas.height - this.height) {
        this.y = this.ctx.canvas.height - this.height;
      }
    }
  }