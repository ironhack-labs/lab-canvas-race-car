class Obstacle{
    constructor(ctx, left) {
        this.ctx = ctx;
        this.dist = Math.random() * 300 + 60
        this.x = left ? 0 : this.ctx.canvas.width - this.dist
        this.y = 0;
        this.w = CANVAS_WIDTH - this.dist;
        this.h = 50;
        this.color = 'red'
        this.vy = 5;
      }

      move() {
        this.y += this.vy;
      }  

      collide(player) {
        const collideX = player.x + player.w > this.x && player.x < this.x + this.w
        const collideY = player.y < this.y + this.h && player.y + player.h > this.y
    
        return collideX && collideY // si las dos se cumplen significa que es true y por lo tanto en game.js se valora como GameOver
      }

      draw() {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
      }
}
