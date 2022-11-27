class Player {
  constructor(ctx, x, y) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.width = 50
      this.img = new Image();
  this.img.src = "./images/car.png";
  this.img.onload = () => {
    this.height = this.width * this.img.height / this.img.width;
    this.isReady = true;
      };
      this.speed = 4;
      this.vx = 0;
      this.movements = {
          right: false,
          left: false,
      }
  }

  draw () {
  if (this.isReady) {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

  move () {
      if (this.movements.right) {
    this.vx = this.speed;
  } else if (this.movements.left) {
    this.vx = -this.speed;
  } else {
    this.vx = 0;
  }

  this.x += this.vx;

  if (this.x <= 0) {
    this.x = 0;
  } else if (this.x + this.width >= this.ctx.canvas.width) {
    this.x = this.ctx.canvas.width - this.width;
  }
  }

  directions (event) {
      if (event.keyCode === 39) {
    this.movements.right = event.type === "keydown";
  } else if (event.keyCode === 37) {
    this.movements.left = event.type === "keydown";
  }
  }

  isCrashing (obstacle) {
  return this.x < obstacle.x + obstacle.width
    && this.x + this.width > obstacle.x
    && this.y < obstacle.y + obstacle.height
}
}