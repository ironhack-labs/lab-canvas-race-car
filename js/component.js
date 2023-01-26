/** @type {HTMLCanvasElement} */

class Component {
    constructor(width, height, x, y, color, ctx) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
      this.ctx = ctx;
      this.car = new Image();
      this.speedX = 0;
      this.speedY = 0;
    }
    draw = () => {
        this.car.src = "images/car.png"
        this.ctx.drawImage(this.car, this.x, this.y, this.width, this.height)
    }
    
    newPos() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
    
    top(){ //y
      return this.y
  }

  bottom(){ 
      return this.y + this.height;
  }

  left(){
      return this.x;
  }

  right(){
      return this.x + this.width;
  }
  crashWith(enemy){
    return !(
        this.bottom() < enemy.top() ||
        this.top() > enemy.bottom() ||
        this.right() < enemy.left() ||
        this.left() > enemy.right()
    );
}
  }

  class Enemy {
    constructor(x, y, w, h, color, ctx) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.ctx = ctx;
        this.speedX = 0;
        this.speedY = 0;
  
    }
  
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.w, 30);
    }
  
    newPosition() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    top(){ 
      return this.y;
  }

  bottom(){ 
      return this.y + this.h
  }

  left(){
      return this.x;
  }

  right(){
      return this.x + this.w;
  }

    
  }