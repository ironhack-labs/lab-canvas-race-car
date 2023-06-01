class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = "images/car.png";
    this.width = 35;
    this.height = (this.width * this.image.height) / this.image.width;
    this.image.onload = () => {
      this.isReady = true;
    };

    this.speedX = 232;
    //this.speedY = 0;
  }

  draw() {
    if (this.isReady) {
      this.ctx.drawImage(this.image, 232, 600, this.width, this.height);
    }
  }

  move() {
    this.x += this.speedX;
    //this.y += this.speedY;

    if (this.x <= 0) {
      this.x = 0;
    }

    if (this.x >= this.ctx.canvas.width - this.width) {
      this.x = this.ctx.canvas.width - this.width;
    }

//      if (this.y <= 0) {
//        this.y = 0;
//      }

//      if (this.y >= this.ctx.canvas.height - this.height) {
//        this.y = this.ctx.canvas.height - this.height;
//      }
    }
}

