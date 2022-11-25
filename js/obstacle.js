class Obstacle {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 13;
    this.img = new Image();
    this.img.src = "/images/pngwing.com (1).png";
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, 140, 140);
  }

  move(){
    this.y += this.speed;
    
  }

}
