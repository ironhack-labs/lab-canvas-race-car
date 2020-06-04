class Obstacle {
  constructor(ctx) {
    this._ctx = ctx;
    this.w = Math.random() * (this._ctx.canvas.width / 2  - 300) + 300;
    this.h = 50
    this.x =  Math.random() < 0.5 ? 0 : this._ctx.canvas.width - this.w
    
    this.y = -30;
   
    

    this.vy = 3;
  }
  draw() {
    this._ctx.fillRect(this.x, this.y, this.w, this.h);
  }
  move() {
    this.y += this.vy
  }
  collide(el) {
    const collideX = el.x + el.w/2 > this.x && el.x - el.w / 2 < this.x + this.w;
    const collideY = el.y + el.h > this.y  && el.y  < this.y + this.h;

    return collideX && collideY;
    
  }
  isVisible() {
    return (
      this.x < this.ctx.canvas.width * 2 && this.x > 0 - this.ctx.canvas.width
    );
  }
}
