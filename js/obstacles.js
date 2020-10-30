class Obstacle {
    constructor(x,y,size){
      this.x = x;
      this.y = y;
      this.width = size;
      this.height = 20;
      this.color = 'red';
      this.speedX = 0;
      this.speedY = 0;
    }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  update(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  }  