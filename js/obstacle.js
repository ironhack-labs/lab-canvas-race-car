class Obstacle {
    constructor(ctx, x, y, width, height, color, speed) {
      this.ctx = ctx;
      this.x = 65;
      this.y = 0;
      this.width = width;
      this.height = height;
      this.color = color;
      this.speed = speed;
    }
  
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  
    move() {
      this.y += this.speed;
    }
  }