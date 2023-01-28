class Enemy{
    constructor(x, y, w, h, color, ctx) {

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.ctx = ctx;
    this.speedx = 0;
    this.speedy = 0;

    }

    draw(){ // To draw the enemy (rectangle)
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

    }
    newPosition(){ // to update the enemies position
        this.x += this.speedx;
        this.y += this.speedy;
    }
    top() {
        return this.y;
      }
      bottom() {
        return this.y + this.h;
      }
      left() {
        return this.x;
      }
      right() {
        return this.x + this.w;
      }
  }