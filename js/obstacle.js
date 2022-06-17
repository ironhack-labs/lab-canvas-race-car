class Obstacle {
    constructor(ctx) {
        this.ctx = ctx;
        this.y = 0;
        this.color = 'yellow';
        this.vy = 2;
        this.h = 30;
        
       
    }
    
    move() {
        this.y += this.vy;
      }

      
      collide(player) {
        const collideX = car.x + car.w > this.x && car.x < this.x + this.w
        const collideY = car.y < this.y + this.h && car.y + car.h > this.y
  
        return collideX && collideY
      }
    
      draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color
        this.ctx.fillRect();
        this.ctx.closePath();
      }
    } 
