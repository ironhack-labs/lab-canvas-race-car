class Obstacle {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = Math.floor(Math.random() * CANVAS_WIDTH);
        this.y = 0;
        this.w = Math.floor(Math.random() * CANVAS_WIDTH/2);
        this.h = 50;
        this.color = "red";
        this.vy = 6;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
        this.ctx.closePath();
      }
    
    move() {
        this.applyActions() 
        this.y += this.vy
      }

    applyActions() {
        if(this.x >= CANVAS_WIDTH - this.w) {
          this.x = (CANVAS_WIDTH - this.w) - 60
          } else if (this.x <= 0) {
          this.x = 60
          }
    }
}
