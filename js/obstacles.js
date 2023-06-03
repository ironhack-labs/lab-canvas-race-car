class Obstacle {
    constructor(ctx, x, y, width, height, color, stroke){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.strokeColor = stroke

    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.strokeStyle = this.strokeColor;
        this.ctx.strokeRect(this.x, this.y, this.width, this.height);
      }

      move() {
        this.y += 1;
      }
    }