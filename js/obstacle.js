class Obstacle {
    constructor(ctx) {
        this.ctx = ctx;
        this.y = 0;
        this.randomX = Math.random()* 300 + 50;
        this.randomW = Math.random()* 170 + 100;
        this.h = 30;
        this.color = 'red';
        this.vy = 2;
       
    }
    
    draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = 'red';
      this.ctx.fillRect(this.randomX, this.y, this.randomW , this.h);
      this.ctx.closePath();
    }
    
    move() {
        this.y += this.vy;
      }

      collide(el) {
        const collideX = el.x + el.w > this.x && el.x < this.x + this.w
        const collideY = el.y < this.y + this.h && el.y + el.h > this.y
  
        return collideX && collideY
      }
    
    } 
