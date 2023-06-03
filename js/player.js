class Player {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.player = new Image();
    this.player.src = "images/car.png";
    this.width = 0;
    this.height = 100,
    this.isReady = false;

    this.player.onload = () => {
      this.width = (this.height * this.player.width) / this.player.height;
      this.isReady = true;
    };

    this.speedX = 0;
    //this.speedY = 0;
  }

  draw() {
    if (this.isReady) {
      this.ctx.drawImage(this.player, this.x, this.y, this.width, this.height);
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

      // if (this.y <= 0) {
      //    this.y = 0;
      //  }

      //  if (this.y >= this.ctx.canvas.height - this.height) {
      //    this.y = this.ctx.canvas.height - this.height;
      //  }
    }
}

