class Player {
    constructor(x, y, w, h, ctx) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.ctx = ctx;
      this.speedX = 0;
      this.speedY = 0;
    }
    draw() {
      const playerImage = new Image();
      playerImage.src = "./images/car.png";
      this.img = playerImage;
  
      const roadImage = new Image();
      roadImage.src = "./images/road.png";
  
      ctx.drawImage(roadImage, 0, 0, canvas.width, canvas.height);
  
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
    newPos() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  
    left() {
      return this.x;
    }
    right() {
      return this.x + this.w;
    }
  
    crashWith(enemy) {
      return (
      this.bottom() > enemy.top() &&
      this.top() < enemy.bottom() &&
      this.right() > enemy.left() &&
      this.left() < enemy.right()
    );
    }
  }