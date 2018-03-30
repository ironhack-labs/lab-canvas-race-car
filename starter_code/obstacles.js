function Obstacle(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
  
    this.x = 0;
    this.y = 0;
  
    this.w = Math.floor(
      Math.random() * 0.9 * this.canvas.width
    );
    this.h = 10;
    
    if (Math.random() > 0.5) {
      this.x = this.canvas.width - this.w;  
    }
  }
  
  Obstacle.prototype.draw = function() {
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  };
  
  Obstacle.prototype.isCollision = function(obj) {
  }