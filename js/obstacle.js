class Obstacle {

    constructor(ctx){
        this.ctx = ctx;
        this.y = 0;
        this.randomW = Math.floor((Math.random() * (200 - 95)) + 95);
        this.randomX = Math.floor((Math.random() * ((this.ctx.canvas.width - 60 - this.randomW) - 60)) + 60);
        this.h = 30;
        this.color = 'red'; 

        this.vy = 2;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.randomX, this.y, this.randomW, this.h);
        this.ctx.closePath();
    }

    move() {
        this.y += this.vy;
    }

    collide(player) {
        const collideX = player.x + player.w > this.randomX && player.x < this.randomX + this.randomW;
        const collideY = player.y < this.y + this.h && player.y + player.h > this.y;

        return collideX && collideY
  }
}