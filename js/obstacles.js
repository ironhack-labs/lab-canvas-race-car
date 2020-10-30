class Obstacle {
    constructor(x,y,width,height,image){
      this.x = x;
      this.y = y;
      this.image = image;
      this.width = width;
      this.height = height;
      this.color = 'red';
      this.speedX = 0;
      this.speedY = 0;
    }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  update(ctx){
    //ctx.fillStyle = this.color;
    //ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
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