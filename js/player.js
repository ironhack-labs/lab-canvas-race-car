class Player {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.img.src = "/images/pngwing.com (2).png";
    this.speed = 7;
    this.directions = {
      left: false,
      right: false,
    };
  }
  
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move() {
    if (this.directions.left) {
      this.x -= this.speed;
    } else if (this.directions.right) {
      this.x += this.speed;
    }

    const rightSide = this.x + this.width;
    const leftSide = this.x;

    if (rightSide > this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.width;
    }

    if (leftSide <= 0) {
      this.x = 0;
    }
  }

  keyDownHandler(event) {
    switch (event.keyCode) {
      case 37:
        this.directions.left = event.type === "keydown";
        break;
      case 39:
        this.directions.right = event.type === "keydown";
        break;
      default:
        break;
    }
  }

	isColliding(obstacle) {
		const threshold = 20;
		return this.x + threshold < obstacle.x + 140
			&& this.x + this.width > obstacle.x + threshold
			&& this.y + threshold < obstacle.y + 140
			&& this.y + this.height > obstacle.y + threshold;
	}
}
