class Obstacle {
    constructor(ctx) {
      this.ctx = ctx;
      this.obsHeight = 20;
      this.obsWidth = 150;
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.color = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    }
  
    drawObstacle = () => {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.obsWidth, this.obsHeight);
    };
  
    moveObstacle = () => {
      this.y += 10;
    };
  }