class Component {
    constructor(width, height, x, y, ctx) {
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.ctx = ctx;
    }
    update() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

  }