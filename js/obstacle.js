class Obstacle extends GameObject {
  constructor(ctx) {
    super(ctx);

    this.w = (Math.random() *(150 - 80)) + 80;
    this.h = 10;
    
    this.x = (Math.random() * ((this._ctx.canvas.width * 0.8) - (this.w / 2))) + ((this._ctx.canvas.width * 0.15));
    this.vy = 3;
  }

  draw() {
    this._ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  isOffScreen() {
      return this.y >= this._ctx.canvas.height
  }
}
