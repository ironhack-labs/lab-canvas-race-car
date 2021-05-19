class Obstacles {
    constructor(ctx, position, size) {
      this.ctx = ctx;

      this.x = position;
      this.y = 0;
      this.width = size;
      this.height = 30;
      this.canvasWidth = this.ctx.canvas.width;
      this.canvasHeight = this.ctx.canvas.height;

      this.vy = 2;
    }

    draw() {
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = "red"
    }

    move() {
        this.y += this.vy;
    }
}
