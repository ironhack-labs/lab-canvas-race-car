class Obstacle {             //Esta clase  a los obstaculos.
  constructor(x, y, color, width, height) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    
    }
    draw() {
        let ctx = this.ctx;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }

  }

  
