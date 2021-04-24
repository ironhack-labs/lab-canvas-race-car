class Obstacles {
    constructor(ctx) {
        this.ctx = ctx
        this.x = Math.random() * this.ctx.canvas.width
        this.h = 20
        this.dist = Math.random() * this.ctx.canvas.height
        this.y = 200
        this.w = 200
        this.vy = 3
    }

    draw() {
        this.ctx.fillStyle = 'black',
        this.ctx.fillRect(
            this.x,
            this.y,
            this.w,
            this.h
        )
    }

    move() {
        this.y += this.vy
    }

    collide(el) {
        const collideX = el.x < this.x + this.w && el.x + el.w > this.x;
        const collideY = el.y < this.y + this.h && el.y + el.h > this.y;

        if (collideX && collideY) {
           
        }
        return collideX && collideY;
    }

    isVisible() {
        return (
          this.y < this.ctx.canvas.height * 2 &&
          this.y > 0 - this.ctx.canvas.height
        )
      }
}

