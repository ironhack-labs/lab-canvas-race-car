class Component {
    constructor(x, y, w, h, color, ctx) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.color = color;
      this.ctx = ctx;
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
      }
    }